import "./style/sass/App.scss";

import Animals from "./components/Animals";
import Firelies from "./components/Fireflies";
// User Interaces / UI
import Shoppe from "./components/Shoppe";
import Information from "./components/Information";
// Speech Bubbles
import MoodBirdBubble from "./components/speech/MoodBirdBubble";
import BadgerBubble from "./components/speech/BadgerBubble";
import FoxBubble from "./components/speech/FoxBubble";
// import { Configuration, OpenAIApi } from "openai";
import background from "./assets/transparentmini.png";

// Library Imports
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DragDropContext } from "react-beautiful-dnd";

import shoppeItems from "./components/shoppeItems.js";


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
  const [backColor, setBackColor] = useState("");

  const [aiText, setAiText] = useState(undefined);
  const [shoppeArray, setShoppeArray] = useState(shoppeItems);
  const [loadMap, setLoadMap] = useState(false)

  // firebase collection
  const [sessionQuestions, setSessionQuestions] = useState([]);

  const [itemChoice, setItemChoice] = useState(false);

  const goBack = () => {
    setItemChoice(false);
  };

  const handleMushCount = (amount) => {
    setMushCount((mushCount) => mushCount + amount);
  };

  const handleBadger = () => {
    setAnimalChoice("badger");
    setLoadShoppe(prev => !prev);
    setLoadBadger(prev => !prev);
    setLoadFox(false);
    setLoadMoodBird(false);
    goBack();
  };
  const handleFox = () => {
    setAnimalChoice("fox");
    setLoadShoppe(false);

    setLoadFox(prev => !prev);
    console.log(loadFox)
    setLoadBadger(false);
    setLoadMoodBird(false);
  };

  const handleMoodBird = () => {
    setAnimalChoice("moodBird");
    setLoadShoppe(false);

    setLoadMoodBird(prev => !prev);
    setLoadBadger(false);
    setLoadFox(false);
  };
  const handleShoppe = () => {
    setLoadShoppe(prev => !prev);
    setLoadBadger(false);
    goBack();
  };

  const handleMap = () => {
    setLoadMap(prev => !prev)
  }

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

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const animalStage = useMemo(() => {
    return (
    <Animals
    handleMap={handleMap}
    shoppeArray={shoppeArray}
    handleFox={handleFox}
    handleBadger={handleBadger}
    handleMoodBird={handleMoodBird}
    handleMushCount={handleMushCount}
    />)
  }, [])


  
  return (
    <DragDropContext>
      <motion.main 
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
       transition={{
        default: {
          duration: 1,
          ease: "easeInOut"
        }
      }}
      className="main">
        <div className="wrapper">
          <h1 className="title">Badger + Fox</h1>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Shoppe
              itemChoice={itemChoice}
              setItemChoice={setItemChoice}
              goBack={goBack}
              setShoppeArray={setShoppeArray}
              shoppeArray={shoppeArray}
              loadShoppe={loadShoppe}
              animalChoice={animalChoice}
              handleShoppe={handleShoppe}
            />
          </AnimatePresence>
          <section style={{ backgroundColor: aiText }} className="stage">
            <img
              className="inner backImg"
              src={background}
              alt="Illustrated forest setting"
            />
            {animalStage}
            <BadgerBubble
              loadShoppe={loadShoppe}
              userInput={userInput}
              toggleAPI={toggleAPI}
              badgerConvo={badgerConvo}
              loadBadger={loadBadger}
              handleShoppe={handleShoppe}
            />
            <FoxBubble
              userInput={userInput}
              toggleAPI={toggleAPI}
              foxConvo={foxConvo}
              loadFox={loadFox}
            />
            <MoodBirdBubble
              aiText={aiText}
              setAiText={setAiText}
              userInput={userInput}
              toggleAPI={toggleAPI}
              moodBirdConvo={moodBirdConvo}
              loadMoodBird={loadMoodBird}
            />
            <Firelies />
            <AnimatePresence exitBeforeEnter initial={false}>
              {loadFox || loadBadger || loadMoodBird ? (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={getReply}
                  onChange={handleInput}
                  className="inner userBubble"
                >
                  <input className="userText" type="text" />
                </motion.form>
              ) : null}
            </AnimatePresence>
          </section>
          {/* <motion.section className="uiRight"> */}
            <Information loadMap={loadMap} />
          {/* </motion.section> */}
        </div>
      </motion.main>
    </DragDropContext>
  );
}

export default App;
