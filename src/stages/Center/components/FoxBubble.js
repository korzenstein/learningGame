import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import foxAI from "../data/foxAI";
import { useSelector } from "react-redux";


const FoxBubble = ({ toggleAPI,  userInput}) => {

  const foxPrompt = foxAI.prompt;
  const [concatPrompt, setConcatPrompt] = useState(foxPrompt);
  const [aiText, setAiText] = useState(undefined)
  const foxValue = useSelector((state) => state.animal.fox);
  const foxStringValue = useSelector((state) => state.animal.foxString);

  // console.log(foxPrompt)

  useEffect(() => {
    setConcatPrompt(foxPrompt.concat(userInput))
  }, [userInput])

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
        // stop: ["\n"],
      })
      setAiText(response.data.choices[0].text)
      console.log(setAiText)
    }; 

    if (toggleAPI === true) {
      call()
    }

  }, [foxStringValue]);

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {foxValue ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inner foxBubble"
          >

            {
              toggleAPI && aiText !== undefined  ?
              <p className="foxText">{aiText}</p>
              :

              <p className="foxText">
              Allo there! I am the Fox. Please enjoy my music. Please, ask me any questions you have.
            </p>
            }
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default FoxBubble;
