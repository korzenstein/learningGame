import "./style/sass/App.scss";
import Animals from "./components/Animals";
import Firelies from "./components/Fireflies";
import Shoppe from "./components/Shoppe";
import MoodBirdBubble from "./components/MoodBirdBubble";
import BadgerBubble from "./components/BadgerBubble";
import FoxBubble from "./components/FoxBubble";
import Information from "./components/Information";
// import { Configuration, OpenAIApi } from "openai";
import shoppeItems from "./components/shoppeItems.js";
import background from "./assets/transparentmini.png";
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
  const [backColor, setBackColor] = useState("");

  const [aiText, setAiText] = useState(undefined);
  const [shoppeArray, setShoppeArray] = useState(shoppeItems);

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
    setLoadShoppe(!loadShoppe);
    setLoadBadger(!loadBadger);
    setLoadFox(false);
    setLoadMoodBird(false);
    goBack();
  };
  const handleFox = () => {
    setAnimalChoice("fox");
    setLoadShoppe(false);

    setLoadFox(!loadFox);
    setLoadBadger(false);
    setLoadMoodBird(false);
  };

  const handleMoodBird = () => {
    setAnimalChoice("moodBird");
    setLoadShoppe(false);

    setLoadMoodBird(!loadMoodBird);
    setLoadBadger(false);
    setLoadFox(false);
  };
  const handleShoppe = () => {
    setLoadShoppe(!loadShoppe);
    setLoadBadger(false);
    goBack();
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

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <DragDropContext>
      <main 
      className="main">
        <div className="wrapper">
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
            <Animals
              shoppeArray={shoppeArray}
              handleFox={handleFox}
              handleBadger={handleBadger}
              handleMoodBird={handleMoodBird}
              handleMushCount={handleMushCount}
            />
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
            <Information mushCount={mushCount} />
          {/* </motion.section> */}
        </div>
      </main>
    </DragDropContext>
  );
}

export default App;
