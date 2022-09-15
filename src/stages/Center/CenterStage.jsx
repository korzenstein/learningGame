import Animals from "./puppets/Animals";
import Fireflies from "./puppets/Fireflies";
import Mushroom from "./puppets/Mushroom";

// User Interaces / UI

// Speech Bubbles
import MoodBirdBubble from "./components/MoodBirdBubble";
import BadgerBubble from "./components/BadgerBubble";
import FoxBubble from "./components/FoxBubble";
// import { Configuration, OpenAIApi } from "openai";
import background from "./assets/transparentmini.png";
import { useMemo } from "react";
// Library Imports

import { motion, AnimatePresence } from "framer-motion";

const CenterStage = ({
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
}) => {
  const animalMemo = useMemo(() => {
    return (
      <Animals
        handleMap={handleMap}
        handleFox={handleFox}
        handleBadger={handleBadger}
        handleMoodBird={handleMoodBird}
        handleMushCount={handleMushCount}
        handleForestBird={handleForestBird}
      />
    );
  }, []);
  return (
    <section style={{ backgroundColor: aiText }} className="stage">
      <img
        className="inner backImg"
        src={background}
        alt="Illustrated forest setting"
      />
      {animalMemo}
      <BadgerBubble
        {...{
          loadShoppe,
          userInput,
          toggleAPI,
          badgerConvo,
          loadBadger,
          handleShoppe,
        }}
      />
      <FoxBubble
        {...{
          userInput,
          toggleAPI,
          foxConvo,
          loadFox,
        }}
      />
      <MoodBirdBubble
        {...{
          aiText,
          setAiText,
          userInput,
          toggleAPI,
          moodBirdConvo,
          loadMoodBird,
        }}
      />
      <Fireflies />
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadFox || loadBadger || loadMoodBird ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={getReply}
            onChange={(event) => setUserInput(event.target.value)}
            className="inner userBubble"
          >
            <input className="userText" type="text" />
          </motion.form>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default CenterStage;
