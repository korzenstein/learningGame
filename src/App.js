import "./style/sass/App.scss";
// UI Stage Imports
import CenterStage from "./stages/Center/CenterStage";
import RightStage from "./stages/Right/RightStage";
import LeftStage from "./stages/Left/LeftStage";
import InventoryNav from "./stages/Inventory/InventoryNav";

// Library Imports
import { useState } from "react";
import { motion } from "framer-motion";
import useAnimalStore from "./store/useAnimalStore.js";

const App = () => {

  const {
    animalChoice,
    foxString,
    badgerString,
    moodbirdString,
    converseFox,
    converseBadger,
    converseMoodbird,
    toggleCenterStage,
  } = useAnimalStore();
  // UserInput For Convo
  const [userInput, setUserInput] = useState("");
  const [toggleAPI, setToggleAPI] = useState(null);
  const [aiText, setAiText] = useState(undefined);
  const [sessionQuestions, setSessionQuestions] = useState([]);

    // Handle conversation replies
  const getReply = (event) => {
    event.preventDefault();
    setToggleAPI(true);

    if (animalChoice === "fox") {
      converseFox(userInput);
      setSessionQuestions((prev) => [...prev, foxString]);
      event.target.reset();
    } else if (animalChoice === "badger") {
      converseBadger(userInput);
      setSessionQuestions((prev) => [...prev, badgerString]);
      event.target.reset();
    } else if (animalChoice === "moodBird") {
      converseMoodbird(userInput);
      setSessionQuestions((prev) => [...prev, moodbirdString]);
      event.target.reset();
    }
  };

  return (
    <motion.main
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <div className="wrapper">
        <h1 onClick={toggleCenterStage} className="title">
          Badger + Fox
        </h1>
        <LeftStage />
        <InventoryNav/>
        <CenterStage
          {...{
            setToggleAPI,
            aiText,
            toggleAPI,
            userInput,
            setAiText,
            setUserInput,
            getReply,
          }}
        />
        <RightStage />
      </div>
    </motion.main>
  );
};

export default App;
