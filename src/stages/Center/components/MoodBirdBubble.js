import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useSelector, useDispatch } from "react-redux";

const MoodBirdBubble = ({ setAiText, aiText, toggleAPI,  userInput}) => {

  const moodbirdValue = useSelector((state) => state.animal.moodbird);
  const moodbirdStringValue = useSelector((state) => state.animal.moodbirdString);

  const [concatPrompt, setConcatPrompt] = useState("")
  
  useEffect(() => {
    setConcatPrompt(`The CSS code for a color ${userInput}:\nbackground-color: `)
  }, [userInput])

  // const [aiText, setAiText] = useState(undefined)

//   useEffect(() => {
//     setConcatPrompt(foxPrompt.concat(userInput))
//   }, [userInput])

  useEffect(() => {
    const moodBirdCall = async () => {   
      const configur = new Configuration({
        apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
      });
      const openai = new OpenAIApi(configur);
      const response = await openai.createCompletion({
        model: "text-curie-001",
        prompt: concatPrompt,
        temperature: 0.9,
        max_tokens: 7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: ["\n"],
      })
      const tempColor = response.data.choices[0].text
      const newColor = tempColor.replace(/[,;]$/,'');
      setAiText(newColor)
    }; 
    
    if (toggleAPI === true) {
      moodBirdCall()
    }
  }, [moodbirdStringValue])

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {moodbirdValue ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inner moodBirdBubble"
          >

            <p className="moodBirdText">
              Tell me how you feel...
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default MoodBirdBubble;
