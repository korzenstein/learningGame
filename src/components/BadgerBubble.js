import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
// import axios from "axios";
import badgerAI from "../textData/badgerAI";

const BadgerBubble = ({ loadBadger, toggleAPI, handleShoppe, badgerConvo, userInput}) => {



  const badgerPrompt = badgerAI.prompt;
  const [concatPrompt, setConcatPrompt] = useState(badgerPrompt);
  const [aiText, setAiText] = useState(undefined)


  useEffect(() => {
    setConcatPrompt(badgerPrompt.concat(userInput))
  }, [userInput])

  useEffect(() => {
    // setConcatPrompt(badgerPrompt.concat(badgerConvo))
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
    }; 

    if (toggleAPI === false) {
      call()
    }
    
      
    

  }, [badgerConvo]);

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadBadger ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inner badgerBubble"
          >
            {
              toggleAPI ?
              <p className="badgerText">{aiText}</p>
              :

              <p className="badgerText">
              Why hello there! Welcome to my shoppe in the woods. How may I be of service? 
              {/* <button className="testButton" onClick={handleShoppe}>
                Shoppe Here!
              </button> */}
            </p>
            }
              
              
               
              
            
            
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default BadgerBubble;
