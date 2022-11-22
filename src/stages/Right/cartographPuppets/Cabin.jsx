import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { mapSceneOff, chooseAdventure } from "../../../features/rightSlice.js";

const Cabin = () => {
  const dispatch = useDispatch();

  const handleImageChoice = (option) => {
    dispatch(chooseAdventure(option));
    dispatch(mapSceneOff());
  };

  return (
    <motion.g
      className="church inner"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => handleImageChoice("cabinInterior")}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        fill="#543629"
        d="M303.966 296.074c6.656 2.32 13.815 3.164 20.021 6.811-.739 1.248-2.013.972-3.143 1.102-5.73-.789-10.824-4.298-16.824-3.937l-2.173-1.352c.751-.84 2.459-.905 2.119-2.624z"
      ></path>
      <path
        fill="#452F1C"
        d="M288.945 315.958c-1.791-.775-2.318-1.623-1.188-3.672 2.18-3.95 4.974-7.331 8.132-10.474l1.146 1.209c-1.931 3.031-7.214 5.023-3.077 9.933 2.305.271 4.059-1.12 5.987-1.983-.001 4.164-3.393 3.377-5.826 3.993-.789-1.183-1.853-1.492-3.169-.992-.006-.223-.014-.444-.021-.667l-.587.2.622.456-.214.994-1.805 1.003z"
      ></path>
      <path
        fill="#1D1714"
        d="M320.845 303.987c1.13-.13 2.403.146 3.143-1.102 4.378 4.601 4.309 5.217-1.436 12.753l-.872-.877-.931-.792c-.127-1.041 2.2-2.74-.808-3.007a1.278 1.278 0 01-.207-.927l1.094-1.021c.059-.848.003-1.645-.913-2.061.609-.894 1.528-1.692.93-2.966z"
      ></path>
      <path
        fill="#2E281B"
        d="M294.118 314.963c2.434-.615 5.825.171 5.826-3.993l2.038-.003-.011 1.988-.996 3.031c-5.483 4.741-5.483 4.741-12.03-.027l1.805-1.004c1.121.905 2.237 3.393 3.368.008z"
      ></path>
      <path
        fill="#4B3F32"
        d="M300.976 315.986l.996-3.031c.842-.042 1.655-.141 2.048-1.056.957.382 1.914.765 2.872 1.146.747.85 1.463 1.086 2.108-.104.927.118 1.667-.119 2.033-1.068l1.099.514.045.045c.06 1.215.906 1.449 1.889 1.514l.446-.01.445.023 1.216 1.221c.009.244-.036.478-.135.702l-1.019 1.293a.824.824 0 01.006.55c-4.624-1.065-9.012-4.027-14.049-1.739z"
      ></path>
      <path
        fill="#271609"
        d="M297.034 303.02l-1.146-1.209c2.604-2.036 3.659-6.254 8.077-5.737.34 1.719-1.368 1.784-2.118 2.625l-4.813 4.321z"
      ></path>
      <path
        fill="#1D1714"
        d="M315.025 317.724a.82.82 0 00-.006-.553c.339-.432.679-.861 1.019-1.29a1.56 1.56 0 00.134-.704c1.886.533 3.729.494 5.508-.417l.872.877c-1.3 5.062-4.907 1.792-7.527 2.087z"
      ></path>
      <path
        fill="#8F614A"
        d="M297.034 303.02l4.813-4.321c.725.449 1.449.9 2.173 1.351.041.521.082 1.042.121 1.564.136 2.224-2.174 2.106-3.136 3.277-4.35.938-5.318 4.833-7.049 8.062-4.136-4.91 1.148-6.902 3.078-9.933z"
      ></path>
      <path
        fill="#DAAD76"
        d="M304.143 301.613l-.122-1.562c6-.361 11.094 3.148 16.824 3.937.599 1.273-.32 2.071-.93 2.966-1.862-.805-3.724-1.61-5.588-2.412-1.155-.641-2.344-1.608-3.208.358l-1.791.053c.144-4.021-3.719-1.82-5.185-3.34z"
      ></path>
      <path
        fill="#452820"
        d="M293.957 312.953c1.73-3.229 2.699-7.123 7.049-8.061l-.029 2.014c-1.21 2.216.775 2.371 1.961 3.042l-.021 1.024a3.84 3.84 0 00-.934-.006l-2.038.003c-1.929.864-3.683 2.255-5.988 1.984z"
      ></path>
      <path
        fill="#F1ECE1"
        d="M294.118 314.963c-1.131 3.385-2.247.897-3.368-.009l.214-.994-.015.011c1.317-.5 2.38-.191 3.169.992z"
      ></path>
      <path
        fill="#F1ECE1"
        d="M290.964 313.96l-.622-.456.587-.2c.007.223.015.444.021.667l.014-.011z"
      ></path>
      <path
        fill="#D4A87E"
        d="M319.734 310.035c-.05.336.02.645.207.927a2.904 2.904 0 00-.106.835l-3.688-.004-1.147.046c-.574-.093-1.148-.186-1.729-.271.156-.296.114-.565-.133-.801l-.318-1.703c.307-1.059 1.125-.976 1.953-.875l1.943.986c.831.9 1.889 1.001 3.018.86z"
      ></path>
      <path
        fill="#65370F"
        d="M314.328 304.538l5.587 2.415c.916.416.972 1.213.913 2.061a4.15 4.15 0 00-.788-.046c-1.682-1.704-3.784-2.562-6.079-3.037-.008-.322-.01-.644-.004-.966.127-.139.251-.281.371-.427z"
      ></path>
      <path
        fill="#5E3D27"
        d="M321.68 314.761c-1.778.911-3.622.95-5.508.417l-1.215-1.219 1.514-.079 3.349-.039c.312.026.622.069.93.128l.93.792z"
      ></path>
      <path
        fill="#865B30"
        d="M320.04 308.968c.265-.01.527.006.788.046l-1.094 1.021c-1.129.142-2.188.04-3.018-.86.142-.211.216-.443.222-.697l3.102.49z"
      ></path>
      <path
        fill="#674C35"
        d="M320.749 313.969a8.568 8.568 0 00-.929-.127l.015-2.046c-.005-.283.03-.562.106-.834 3.008.267.681 1.966.808 3.007z"
      ></path>
      <path
        fill="#1F0C06"
        d="M301.982 310.967c.312-.036.623-.034.935.006l1.192.79-.09.137c-.393.915-1.206 1.014-2.048 1.056.005-.664.008-1.327.011-1.989z"
      ></path>
      <path
        fill="#B19677"
        d="M312.133 312.388l-1.1-.515c-.201-1.181-.682-2.057-2.092-1.922a1.636 1.636 0 00-.713-.039c-.031-.554-.062-1.107-.095-1.66l-.048.029c1.374-.195 2.688-.067 3.876.728l-.043-.031.54 2.198c-.107.403-.217.807-.325 1.212z"
      ></path>
      <path
        fill="#271609"
        d="M308.941 309.951c1.41-.135 1.891.741 2.092 1.922-.366.949-1.106 1.187-2.033 1.068a962.3 962.3 0 00-1.002-1.013l.038-.028.905-1.949z"
      ></path>
      <path
        fill="#B9A696"
        d="M306.892 313.046l-2.872-1.146.09-.137.904-.871 1.929.429 1.094.579-.038.028-1.107 1.118z"
      ></path>
      <path
        fill="#3D1C07"
        d="M316.471 313.88l-1.514.079-.445-.023-.447.01c-.383-.512-.765-1.022-1.146-1.534.052-.312.172-.596.359-.851l1.722.278 1.089 1.002.382 1.039z"
      ></path>
      <path
        fill="#8B7F75"
        d="M306.892 313.046l1.106-1.117 1.002 1.013c-.646 1.19-1.361.954-2.108.104z"
      ></path>
      <path
        fill="#674C35"
        d="M312.919 312.411c.381.512.763 1.022 1.146 1.534-.981-.064-1.828-.299-1.889-1.511-.002.003.373.078.373.078l.37-.101z"
      ></path>
      <path
        fill="#271609"
        d="M312.919 312.411l-.37.102s-.375-.075-.373-.078a.418.418 0 00-.044-.048c.109-.403.219-.808.326-1.213a.997.997 0 00.681-.409c.247.237.289.506.133.801a1.983 1.983 0 00-.353.845z"
      ></path>
      <path
        fill="#5E3D27"
        d="M316.038 315.881c-.34.429-.68.858-1.019 1.29.34-.428.679-.859 1.019-1.29z"
      ></path>
      <path
        fill="#976745"
        d="M300.977 306.906l.029-2.014c.962-1.172 3.271-1.054 3.136-3.278 1.468 1.519 5.33-.683 5.185 3.337l-.352 1.059.057-.043c-1.175.136-2.581-.43-3.299 1.09-1.048-.062-2.157-.312-2.784.913l-.072.077c-.635-.38-1.268-.76-1.9-1.141z"
      ></path>
      <path
        fill="#D4A87E"
        d="M308.975 306.011l.352-1.059 1.793-.053 1.649.277-1.932.999-1.862-.164z"
      ></path>
      <path
        fill="#65370F"
        d="M312.769 305.177c-.55-.093-1.1-.186-1.649-.277.864-1.966 2.053-.999 3.208-.358-.119.143-.243.285-.37.425-.397.069-.794.139-1.189.21z"
      ></path>
      <path
        fill="#876C5F"
        d="M305.014 310.892l-.904.871-1.192-.79.021-1.024-.062-1.901.072-.077c2.215-.106 1.916 1.566 2.065 2.921z"
      ></path>
      <path
        fill="#1F0C06"
        d="M302.876 308.047l.062 1.901c-1.186-.672-3.171-.826-1.961-3.042.632.381 1.265.761 1.899 1.141z"
      ></path>
      <path
        fill="#8F614A"
        d="M316.471 313.88c-.127-.346-.254-.692-.383-1.038l.06-1.049 3.688.004-.015 2.045-3.35.038z"
      ></path>
      <path
        fill="#A4784D"
        d="M312.769 305.177l1.188-.211c-.006.322-.004.644.004.966l1.233 1.737c-.141.175-.281.349-.423.521-.826-.103-1.645-.186-1.95.873a3.75 3.75 0 00-.902-.086l.043.031-1.125-2.833 1.932-.998z"
      ></path>
      <path
        fill="#674C35"
        d="M311.919 308.977c.305-.008.604.021.902.086l.317 1.703c-.171.23-.398.366-.681.408-.178-.732-.358-1.465-.538-2.197z"
      ></path>
      <path
        fill="#A4784D"
        d="M316.717 309.174l-1.943-.986c.14-.171.28-.345.418-.517.581.271 1.164.538 1.747.806a1.285 1.285 0 01-.222.697z"
      ></path>
      <path
        fill="#5E3D27"
        d="M316.147 311.793l-.06 1.049-1.088-1.003 1.148-.046z"
      ></path>
      <path
        fill="#D4A87E"
        d="M316.938 308.477c-.583-.268-1.166-.535-1.747-.806-.408-.582-.819-1.161-1.23-1.74 2.295.475 4.397 1.333 6.079 3.037l-3.102-.491z"
      ></path>
      <path
        fill="#6F4B2A"
        d="M305.014 310.892c-.148-1.355.15-3.027-2.065-2.922.627-1.224 1.736-.975 2.786-.914 1.005-.011 1.096 1.81 2.4 1.195l.092 1.66-1.284 1.41c-.643-.143-1.287-.285-1.929-.429z"
      ></path>
      <path
        fill="#65411B"
        d="M310.837 306.176l1.125 2.833c-1.188-.795-2.502-.923-3.875-.728l.944-2.313-.057.043 1.863.165z"
      ></path>
      <path
        fill="#C3986D"
        d="M309.031 305.968l-.944 2.313.047-.029c-1.304.615-1.395-1.206-2.399-1.195.715-1.519 2.121-.953 3.296-1.089z"
      ></path>
      <path
        fill="#876C5F"
        d="M306.942 311.321l1.284-1.41c.242-.04.48-.026.715.039l-.905 1.95-1.094-.579z"
      ></path>
    </motion.g>
  );
};
export default Cabin;