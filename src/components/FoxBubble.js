import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
// import axios from "axios";
import foxAI from "../textData/foxAI";


const FoxBubble = ({ loadFox }) => {
  useEffect(() => {
    const presetPrompt = foxAI.prompt;

    const call = async () => {
      const configur = new Configuration({
        apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
      });
      const openai = new OpenAIApi(configur);
      const response = await openai.createCompletion({
        model: "text-curie-001",
        prompt: presetPrompt,
        temperature: 0.9,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: ["\n"],
      });
      console.log(response.data)
      console.log(response.data.choices[0].text)
    };

    // call();
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadFox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inner foxBubble"
          >
            <p onClick={() => console.log("words")} className="foxText">
              Allo there! I am the Fox. Please enjoy my music. How may I be of service to ye?
              
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default FoxBubble;
