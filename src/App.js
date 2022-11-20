import "./style/sass/App.scss";
// UI Stage Imports
import CenterStage from "./stages/Center/CenterStage";
import RightStage from "./stages/Right/RightStage";
import LeftStage from "./stages/Left/LeftStage";
// Library Imports
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import {
  converseMoodbird,
  converseBadger,
  converseFox,
} from "./features/animalSlice.js";

const App = () => {
  const dispatch = useDispatch();
  // UserInput For Convo
  const [userInput, setUserInput] = useState("");
  const [toggleAPI, setToggleAPI] = useState(null);
  const [aiText, setAiText] = useState(undefined);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  // Animal Choice
  const animalValue = useSelector((state) => state.animal.animalChoice);
  // Animal Conversations
  const foxStringValue = useSelector((state) => state.animal.foxString);
  const badgerStringValue = useSelector((state) => state.animal.badgerString);
  const moodbirdStringValue = useSelector(
    (state) => state.animal.moodbirdString
  );

  const getReply = (event) => {
    event.preventDefault();
    setToggleAPI(true);

    if (animalValue === "fox") {
      dispatch(converseFox(userInput));
      setSessionQuestions((sessionQuestions) => [
        ...sessionQuestions,
        foxStringValue,
      ]);
      event.target.reset();
    } else if (animalValue === "badger") {
      dispatch(converseBadger(userInput));
      setSessionQuestions((sessionQuestions) => [
        ...sessionQuestions,
        badgerStringValue,
      ]);
      event.target.reset();
    } else if (animalValue === "moodBird") {
      dispatch(converseMoodbird(userInput));
      setSessionQuestions((sessionQuestions) => [
        ...sessionQuestions,
        moodbirdStringValue,
      ]);
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
        <h1 className="title">Badger + Fox</h1>
        <AnimatePresence exitBeforeEnter initial={false}>
          <LeftStage />
        </AnimatePresence>
        <CenterStage
          {...{
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
