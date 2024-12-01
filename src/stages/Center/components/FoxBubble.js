import { motion, AnimatePresence } from "framer-motion";
import {  useState , useEffect} from "react";
import useAnimalStore from "../../../store/useAnimalStore"; 
import fetchFoxResponse from "../../../utils/api/fetchFoxResponse";

const staticResponses = {
  default: "Allo there! I am the Fox. Please enjoy my music. Please, ask me any questions you have.",
  noInput: "It seems like you haven't asked a question. Please try asking something!",
  inputTooLong: "Your question is too long! Please limit it to 100 characters.",
  error: "I'm having trouble responding right now. Please try again later.",
};

const FoxBubble = ({ toggleAPI, userInput }) => {
  const [aiText, setAiText] = useState(staticResponses.default);

  const { fox, animalChoice } = useAnimalStore();


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
      const response = await fetchFoxResponse(input);
      setAiText(response);
    } catch (error) {
      console.error("Failed to fetch Fox response:", error);
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
      {fox && animalChoice === "fox" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inner foxBubble"
        >
          <p className="foxText">{aiText}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
    </>
  );
};

export default FoxBubble;