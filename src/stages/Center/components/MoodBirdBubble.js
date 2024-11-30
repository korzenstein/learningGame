import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useAnimalStore from "../../../store/useAnimalStore";

const responses = [
  { text: "Hmm, that's interesting.", color: "#a8dadc" },
  { text: "I feel that too.", color: "#f4a261" },
  { text: "What a peculiar thought!", color: "#e9c46a" },
  { text: "That resonates with me.", color: "#2a9d8f" },
  { text: "Tell me more about that.", color: "#264653" },
];

const MoodBirdBubble = ({ setAiText, toggleAPI, setToggleAPI, setUserInput, userInput }) => {
  const { moodbird  } = useAnimalStore();
  const [currentResponse, setCurrentResponse] = useState(null);


  useEffect(() => {
    if (toggleAPI && moodbird) {
      // Generate a random response
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setCurrentResponse(randomResponse);
      setAiText(randomResponse.color); // Update background color in parent
setUserInput("");
      // Reset toggleAPI to allow new inputs
      setTimeout(() => {
        setToggleAPI(false);
      }, 100); 
    }
  }, [setAiText, toggleAPI, setToggleAPI, moodbird]);

  console.log('userInput', userInput)
  return (
    <AnimatePresence>
      {moodbird ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inner moodBirdBubble"
        >
          <p className="moodBirdText">
            {currentResponse ? currentResponse.text : "Tell me how you feel..."}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MoodBirdBubble;
