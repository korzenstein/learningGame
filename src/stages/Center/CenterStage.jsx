import Animals from "./puppets/Animals";
import Fireflies from "./puppets/Fireflies";
// Speech Bubbles
import MoodBirdBubble from "./components/MoodBirdBubble";
import BadgerBubble from "./components/BadgerBubble";
import FoxBubble from "./components/FoxBubble";
import background from "./assets/transparentmini.png";
import { useMemo } from "react";
// Library Imports
import { motion, AnimatePresence } from "framer-motion";
import useAnimalStore from "../../store/useAnimalStore";

const CenterStage = ({
  aiText,
  toggleAPI,
  userInput,
  setAiText,
  setUserInput,
  getReply,
  setToggleAPI,
}) => {
  const animalMemo = useMemo(() => {
    return <Animals />;
  }, []);

  // Zustand state
  const { moodbird, badger, fox } = useAnimalStore();

  return (
    <motion.section
      style={{ backgroundColor: aiText }}
      className="stage"
    >
      <img
        className="inner backImg"
        src={background}
        alt="Illustrated forest setting"
      />
      {animalMemo}
      <BadgerBubble
        {...{
          userInput,
          toggleAPI,
        }}
      />
      <FoxBubble
        {...{
          userInput,
          toggleAPI,
        }}
      />
      <MoodBirdBubble
        {...{
          aiText,
          setAiText,
          userInput,
          toggleAPI,
          setToggleAPI,
          setUserInput
        }}
      />
      <Fireflies />
      <AnimatePresence>
        {fox || badger || moodbird ? (
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
    </motion.section>
  );
};

export default CenterStage;
