import Animals from "./puppets/Animals";
import Fireflies from "./puppets/Fireflies";
import Mushroom from "./puppets/Mushroom";
// Speech Bubbles
import MoodBirdBubble from "./components/MoodBirdBubble";
import BadgerBubble from "./components/BadgerBubble";
import FoxBubble from "./components/FoxBubble";
// import { Configuration, OpenAIApi } from "openai";
import background from "./assets/transparentmini.png";
import { useMemo } from "react";
// Library Imports
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

const CenterStage = ({
  aiText,
  toggleAPI,
  userInput,
  setAiText,
  setUserInput,
  getReply,
}) => {
  const animalMemo = useMemo(() => {
    return <Animals />;
  }, []);

  const moodbirdValue = useSelector((state) => state.animal.moodbird);
  const badgerValue = useSelector((state) => state.animal.badger);
  const foxValue = useSelector((state) => state.animal.fox);

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
        }}
      />
      <Fireflies />
      <AnimatePresence exitBeforeEnter initial={false}>
        {foxValue || badgerValue || moodbirdValue ? (
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
