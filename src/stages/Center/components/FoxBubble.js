import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import foxAI from "../data/foxAI";
import useAnimalStore from "../../../store/useAnimalStore"; 


const FoxBubble = ({ toggleAPI, userInput }) => {
  const foxPrompt = foxAI.prompt;
  const [concatPrompt, setConcatPrompt] = useState(foxPrompt);
  const [aiText, setAiText] = useState(undefined);

  const { fox, foxString } = useAnimalStore();

  useEffect(() => {
    setConcatPrompt(foxPrompt.concat(userInput));
  }, [userInput, foxPrompt]);

  useEffect(() => {
    const call = async () => {
      const configur = new Configuration({
        apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
      });
      const openai = new OpenAIApi(configur);
      const response = await openai.createCompletion({
        model: "text-curie-001",
        prompt: concatPrompt,
        temperature: 0.9,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setAiText(response.data.choices[0].text);
    };

    if (toggleAPI) {
      call();
    }
  }, [concatPrompt, toggleAPI, foxString]);

  return (
    <>
      <AnimatePresence>
        {fox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inner foxBubble"
          >
            {toggleAPI && aiText !== undefined ? (
              <p className="foxText">{aiText}</p>
            ) : (
              <p className="foxText">
                Allo there! I am the Fox. Please enjoy my music. Please, ask me
                any questions you have.
              </p>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default FoxBubble;