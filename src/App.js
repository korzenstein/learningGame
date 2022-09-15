import "./style/sass/App.scss";
import CenterStage from "./stages/Center/CenterStage";
import RightStage from "./stages/Right/RightStage";
import LeftStage from "./stages/Left/LeftStage"
// Library Imports
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  // information state
  const [mushCount, setMushCount] = useState(0);
  // animals
  const [loadBadger, setLoadBadger] = useState(false);
  const [loadFox, setLoadFox] = useState(false);
  const [loadMoodBird, setLoadMoodBird] = useState(false);
  const [loadShoppe, setLoadShoppe] = useState(false);
  // Animal Conversations
  const [foxConvo, setFoxConvo] = useState("");
  const [badgerConvo, setBadgerConvo] = useState("");
  const [moodBirdConvo, setMoodBirdConvo] = useState("");
  // Other
  const [animalChoice, setAnimalChoice] = useState("");
  const [userInput, setUserInput] = useState("");
  const [toggleAPI, setToggleAPI] = useState(null);
  const [aiText, setAiText] = useState(undefined);
  const [loadMap, setLoadMap] = useState(false);
  const [forestBird, setForestBird] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [itemChoice, setItemChoice] = useState(false);

  const goBack = () => {
    setItemChoice(false);
  };

  const handleMushCount = (amount) => {
    setMushCount((mushCount) => mushCount + amount);
  };

  const handleForestBird = () => {
    setLoadShoppe(false);
    setAnimalChoice("forestBird");
    setForestBird((prev) => !prev);
    setLoadBadger(false);
    setLoadFox(false);
  };

  const handleBadger = () => {
    setAnimalChoice("badger");
    setLoadShoppe((prev) => !prev);
    setLoadBadger((prev) => !prev);
    setLoadFox(false);
    setLoadMoodBird(false);
    setForestBird(false);
    goBack();
  };

  const handleFox = () => {
    setAnimalChoice("fox");
    setLoadShoppe(false);
    setLoadFox((prev) => !prev);
    setLoadBadger(false);
    setLoadMoodBird(false);
  };

  const handleMoodBird = () => {
    setAnimalChoice("moodBird");
    setLoadShoppe(false);
    setLoadMoodBird((prev) => !prev);
    setLoadBadger(false);
    setLoadFox(false);
  };

  const handleShoppe = () => {
    setLoadShoppe((prev) => !prev);
    setLoadBadger(false);
    goBack();
  };

  const handleMap = () => {
    setLoadMap((prev) => !prev);
  };

  const getReply = (event) => {
    event.preventDefault();
    setToggleAPI(true);

    if (animalChoice === "fox") {
      setFoxConvo(userInput);
      setSessionQuestions((sessionQuestions) => [
        ...sessionQuestions,
        foxConvo,
      ]);
      event.target.reset();
    } else if (animalChoice === "badger") {
      setBadgerConvo(userInput);
      setSessionQuestions((sessionQuestions) => [
        ...sessionQuestions,
        badgerConvo,
      ]);
      event.target.reset();
    } else if (animalChoice === "moodBird") {
      setMoodBirdConvo(userInput);
      setSessionQuestions((sessionQuestions) => [
        ...sessionQuestions,
        moodBirdConvo,
      ]);
      event.target.reset();
    }
  };

  return (
    <DragDropContext>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          default: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="main"
      >
        <div className="wrapper">
          <h1 className="title">Badger + Fox</h1>
          <AnimatePresence exitBeforeEnter initial={false}>
            <LeftStage
              {...{
                itemChoice,
                setItemChoice,
                goBack,
                loadShoppe,
                animalChoice,
                handleShoppe,
                forestBird,
              }}
            />
          </AnimatePresence>
          <CenterStage
            {...{
              aiText,
              loadBadger,
              loadFox,
              loadShoppe,
              toggleAPI,
              badgerConvo,
              handleShoppe,
              userInput,
              foxConvo,
              setAiText,
              moodBirdConvo,
              loadMoodBird,
              setUserInput,
              handleForestBird,
              handleMushCount,
              handleMap,
              handleFox,
              handleBadger,
              handleMoodBird,
              getReply,
            }}
          />
         <RightStage
         {...{
              forestBird,
              loadMap,
              setLoadMap,
            }}
         />
        </div>
      </motion.main>
    </DragDropContext>
  );
}

export default App;
