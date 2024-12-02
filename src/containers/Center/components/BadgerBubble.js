import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useAnimalStore from "store/useAnimalStore"; 
import fetchBadgerResponse from "utils/api/fetchBadgerResponse";

const staticResponses = {
  default: "Why hello there! Welcome to my shoppe in the woods. Please, ask me any questions you have.",
  noInput: "It seems like you haven't asked a question. Please try asking something!",
  inputTooLong: "Your question is too long! Please limit it to 100 characters.",
  error: "I'm having trouble understanding your question right now. Please try again later.",
};

const BadgerBubble = ({ toggleAPI, userInput }) => {
  const [aiText, setAiText] = useState(staticResponses.default);
  const { badger, animalChoice } = useAnimalStore();

  
 const getResponse = async (input) => {
    try {
      if (!input) {
        setAiText(staticResponses.noInput);
        return;
      }
      if (input.length > 100) {
        setAiText(staticResponses.inputTooLong);
        return;
      }
      const response = await fetchBadgerResponse(input);
      setAiText(response);
    } catch (error) {
      console.error("Failed to fetch Badger response:", error);
      setAiText(staticResponses.error);
    }
  };


  useEffect(() => {
    if (toggleAPI && userInput) {
      getResponse(userInput);
    }
  }, [toggleAPI, userInput]);

  return (
    <>
      <AnimatePresence>
      {badger && animalChoice === "badger" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inner badgerBubble"
        >
          <p className="badgerText">{aiText}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
    </>
  );
};

export default BadgerBubble;
