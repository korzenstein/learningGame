import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { mapSceneOff, chooseAdventure } from "../../../features/rightSlice.js";

const Church = () => {
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
      onClick={() => handleImageChoice("churchInterior")}
      id="church"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        fill="#2A2024"
        d="M396.963 442.728c-8.279 3.726-16.496 7.599-24.869 11.1-3.171 1.325-6.524 1.285-8.177-2.781-.422-.677-.709-1.413-.976-2.159-.363-1.548-.307-3.059.414-4.503 2.37.385 2.996-.501 1.887-2.628-.323-.862-.662-1.724-.464-2.678.351-.882.927-1.616 1.521-2.342.31-.362.661-.678 1.042-.964 4.529-1.029 8.156-4.799 13.172-4.366 1.193.911.531 1.742-.253 2.345-1.334 1.023-2.387 2.206-2.909 3.822-.28.345-.633.586-1.063.716-.22-.001-.44-.007-.659-.002-1.63-.381-2.36.437-2.572 1.94-.152.657-.396 1.271-.825 1.803a3.297 3.297 0 01-1.21.539c-1.001.168-1.729.665-1.872 1.73-.193 1.436.485.436.87.272 1.108-.465 2.112-.188 3.089.353.955.954 1.854 2.082 3.417 1.001a49.725 49.725 0 012.626-.544c.454-.084.911-.127 1.37-.153 4.581-.782 8.397-3.882 13.043-4.344 1.303-.13 3.958-1.824 3.398 1.843z"
      ></path>
      <path
        fill="#1A1716"
        d="M396.963 442.728c-4.222-2.212-7.53.892-11.145 2.008-1.924.595-3.478 2.589-5.82 1.318-.418-1.961 3.662-1.709 2.076-4.249-.045-2.485-.915-5.452 3.206-5.497 2.136 4.707 2.136 4.707 4.883 1.679a2.728 2.728 0 011.797-.684c.415.047.813.172 1.186.354.766.389 1.517.29 2.256-.114 1.696-1.858 1.836-3.863.622-5.997-.229-.335-.439-.689-.65-1.034-.336-.486-.665-.984-1.126-1.364-1.478-.343-2.402.352-3.05 1.573a8 8 0 01-.665 1.111c-.272.34-.597.622-.96.861a8.812 8.812 0 01-1.756.857 4.324 4.324 0 01-1.31.156 3.093 3.093 0 01-1.225-.457c-1.13-2.475 2.347-2.795 2.236-4.799.851-1.704 2.619-2.205 4.07-3.124 1.191-.59 2.011-1.546 2.645-2.69.434-.556.938-.943 1.701-.716 1.182.735 1.924 1.849 2.609 3.012.434.933.767 1.953 1.973 2.207.431.098.83.256 1.217.46.992.756 1.251 1.797 1.167 2.964.009.452-.248.925.073 1.369-.023-.337-.052-.668.079-1 .326-.824.92-1.319 1.777-1.518.467.014.872.179 1.216.492 3.969 2.189 3.758 4.77.316 7.084-3.037 2.043-5.821 4.56-9.398 5.738z"
      ></path>
      <path
        fill="#34241A"
        d="M395.914 421.931l-1.163 1.28c-1.071.113-1.805-.449-2.439-1.211-1.601-3.712-4.081-4.731-7.726-2.658-1.257.716-2.72 1.049-3.963 1.836-1.323.998-2.713 1.852-4.406 2.046-3.255.692-6.521.896-9.805.195a80.685 80.685 0 01-.502-.51c.016-1.494-.16-3.021.09-4.476.429-2.497 1.745-1.751 3.031-.604-.001 1.321-.635 3.19 1.962 2.27 3.514-1.065 7.215-1.749 9.444-5.203.568-.881 1.728-1.396 2.643-.926 5.478 2.812 5.217-1.171 4.857-4.341-.486-4.288 1.574-8.85-1.466-12.957-.431-.581 1.58-.381 2.388-.761 1.604-.609 2.062.449 2.424 1.654-.703 1.901-.795 3.896-.84 5.895-1.712 5.858 1.709 10.308 4.135 15.023.472.971 1.278 1.763 1.565 2.838-.075.203-.152.407-.229.61z"
      ></path>
      <path
        fill="#644133"
        d="M398.994 370.902c2.718 1.844 1.322 4.708 1.766 7.117.012 3.842-.961 6.99-5.416 7.685-.676.09-1.283-.084-1.829-.493.997.811 2.289 1.286 2.909 2.53.504.977.794 2.027 1.033 3.096.065.435.051.868-.016 1.302-.373 1.242-.641 2.559-2.023 3.156-1.494.192-3.008.497-4.339-.577-3.992-1.252-.625-4.637-1.937-6.672-.222-.891-.256-1.718.747-2.192 1.604-2.011 2.562-4.229 2.199-6.868-.194-.646.146-.935.715-1.069a7.385 7.385 0 011.06-.721c.598-.204 1.224-.295 1.828-.445 2.103-1.39.778-4.715 3.303-5.849z"
      ></path>
      <path
        fill="#221411"
        d="M389.143 388.045c.053 1.22 3.364 1.302.896 3.647-1.562 1.482 1.985.984 1.946 2.425.314 2.672 1.751 1.398 2.982.849l1.965-2.98c.907-.993 2.018-1.117 3.238-.765.427.182.757.482 1.001.876-.09 1.197-.94 1.591-1.94 1.85-.388.1-.833-.008-1.162.309.479.116.939.271 1.347.562 2.168 2.453 4.419-1.051 6.601.091 1.299.461 4.6.15.973 2.513-1.739 1.135-.627 3.035-1.22 4.475-1.229-.197-2.396-.021-3.491.594-1.518.352-2.805 1.423-4.437 1.419a4.813 4.813 0 01-2.046-.439c-1.996-1.608-4.324-2.946-4.812-5.807l-2.123-1.751c-.774-2.654-1.236-5.297.282-7.868z"
      ></path>
      <path
        fill="#412518"
        d="M406.016 394.908c-1.106.629-2.283 1.161-3.305 1.906-2.487 1.812-3.402.609-3.771-1.828-1.133-2.17 3.216-.797 1.966-3.042l.029.05c-.836-1.144-.183-2.896-1.478-3.868-1.423.559 1.117 4.269-2.46 2.93-1.356-.718-1.006-2.033-1.116-3.188-.451-.931-1.46-1.65-1.097-2.892 4.292-.344 4.166-4.482 5.975-6.958a67327.13 67327.13 0 015.257 16.89z"
      ></path>
      <path
        fill="#302B21"
        d="M363.819 448.651l.098 2.395c-8.183-3.193-7.386-10.897-8.676-17.506-.08-.412 1.088-1.068 1.675-1.611 1.858-.321 1.782 1.245 2.25 2.285.117 2.422 2.711 3.137 3.528 5.08 1.341 3.004-.87 6.432 1.125 9.357z"
      ></path>
      <path
        fill="#232228"
        d="M402.161 431.255c-.308-1.226-.038-2.698-1.47-3.444-.09-.36-.373-.679-.627-.542-.188.102-.122.583-.093.902-3.785.936-1.212-2.204-2.031-3.169 1.218-2.26 3.064-4.165 3.561-6.876-.743-.296-1.816.649-2.739-.099-.418-.631-.458-1.296-.183-1.992 1.321-1.476 3.234-1.747 4.948-2.431.482-.076.913.038 1.281.366.438 5.31-.437 10.722 1.237 15.936l-1.098.04c-1.636-1.071-1.482 1.67-2.786 1.309z"
      ></path>
      <path
        fill="#46341F"
        d="M358.055 435.134c-.13-1.156.104-2.442-1.139-3.205 3.047-2.958 3.208-8.793 8.994-9.02l.082.042c1.075.87 4.944.184 1.845 3.38-1.563 1.611-.726 3.452-.13 5.118.729 2.04.698 3.852-.763 5.53l-.255.093c-3.086-1.226-2.507-4.737-4.35-6.931-1.684.561-1.642 2.137-1.963 3.469-.303 1.256-.742 2.242-2.321 1.524z"
      ></path>
      <path
        fill="#3D2A19"
        d="M394.009 377.956l-1.205-.041c.22-3.719 2.806-6.898 2.369-10.808-.144-1.283 1.005-2.066 2.262-2.136 1.984-.111 1.252 1.487 1.365 2.478.131 1.144.135 2.302.194 3.453-.422 2.021-1.375 3.923-1.117 6.098.199 1.683-.862 1.279-1.809.893-.777-2.902-1.388-.462-2.059.063z"
      ></path>
      <path
        fill="#3F3A46"
        d="M404.809 413.971l-.389-.012-.389.019c-1.944-1.514-.8-3.799-1.444-5.607-.627-.104-1.249.003-1.843-.171a2.756 2.756 0 01-1.289-1.435 2.97 2.97 0 01.014-1.3c.262-.623.741-1.047 1.268-1.454.696-.54 2.83-.199 1.363-2.129 1.227-.849 2.454-2.188 3.669.014-1.081 3.964-.764 8.04-.96 12.075z"
      ></path>
      <path
        fill="#422713"
        d="M392.089 378.984c1.762 2.815-.645 4.845-1.379 7.187-.016.052-.32.067-.456.014-.143-.057-.244-.217-.364-.332.733-2.29 1.465-4.58 2.199-6.869z"
      ></path>
      <path
        fill="#60624E"
        d="M370.993 420.099c-1.245.838-2.767 2.167-3.896.444-1.016-1.549.501-2.342 1.934-2.714l1.962 2.27z"
      ></path>
      <path
        fill="#87503D"
        d="M366.944 436.979c.642-1.991-.136-3.747-.609-5.659-.497-2.013-2.529-4.697 1.104-6.225.726-.305.558-.673-1.446-2.145l9.99-1.015c2.158 1.142 2.892 3.462 4.292 5.798 1.92-3.059-1.383-5.316-.282-7.76 1.658-.688 3.412-1.206 4.954-2.095 4.427-2.553 6.968-1.191 8.054 3.59.927 1.824.646 3.396-.98 4.687l-4.398 2.762c-1.647 2.242-3.871 3.171-6.619 2.904l-14.06 5.158z"
      ></path>
      <path
        fill="#C5B9A0"
        d="M358.055 435.134c1.623-2.571 1.706-5.981 4.657-8.274l3.978 10.213c.19 1.381-.501 1.903-1.792 1.842-.207-.038-.413-.076-.616-.107-.503-.179-.994-.441-1.55-.299a2.728 2.728 0 01-.831.502c-1.238-1.337-4.419-.744-3.846-3.877z"
      ></path>
      <path
        fill="#42393E"
        d="M381.002 431.822l6.622-2.904c1.525.756 1.274 1.372-.005 2.244-.627.428-2.507.198-1.496 1.961-2.012 3.252-5.354 4.223-8.75 5.102a94.345 94.345 0 01-.575-.427c-1.585-4.093 2.979-3.86 4.204-5.976z"
      ></path>
      <path
        fill="#E3DDDC"
        d="M361.9 439.01l.066-1.349c1.283-.189 2.066.734 2.988 1.347l-.058-.094 1.228 1.872c1.409 2.39-2.074 1.781-2.04 3.329a6893.84 6893.84 0 01-.266 4.536c-3.373-2.67-.854-6.511-1.918-9.641z"
      ></path>
      <path
        fill="#0F0E18"
        d="M377.098 446.925c-1.443.231-2.983.859-3.921-.964-.71-.461-.873-1.23-1.108-1.959-.045-1.291.242-2.469 1.188-3.415 2.056-.777 3.109.172 3.222 2.134.08 1.434.731 2.759.619 4.204z"
      ></path>
      <path
        fill="#97909C"
        d="M364.085 444.115c-1.046-2.167 1.883-1.898 2.04-3.328 1.784 2.635.509 5.384 1.152 8.848-2.997-1.673-1.652-4.305-3.192-5.52z"
      ></path>
      <path
        fill="#9B9AAF"
        d="M370.155 445.031c-.612 1.17.504 2.972-1.616 4.011-1.072-2.155-.716-4.3-.578-6.287.151-2.201 1.337-2.499 2.855-.818.322 1.146.038 2.165-.661 3.094z"
      ></path>
      <path
        fill="#42393E"
        d="M377.098 446.925c-2.969-1.05.222-5.381-3.275-6.149-.063-1.413.875-2.072 1.967-2.616.337-.12.674-.239 1.01-.36l.209.188c1.687 1.685.856 4.037 1.598 5.972.182.431.303.878.379 1.338.006.232.007.465.008.697-.385.816-1.119.915-1.896.93z"
      ></path>
      <path
        fill="#8C8C9F"
        d="M375.789 438.159c.57 1.794-1.286 1.763-1.967 2.616-1.142.682-.752 1.935-1.092 2.917-1.709.104-1.265-.915-.969-1.856.065-.641.131-1.281.195-1.922 1.006-1.199 1.581-3.332 3.857-1.78l-.024.025z"
      ></path>
      <path
        fill="#42393E"
        d="M375.814 438.134c-1.568-.019-2.656 1.005-3.857 1.78-.121-1.563.241-2.864 1.957-3.317 1.279-.339 1.625.58 1.9 1.537z"
      ></path>
      <path
        fill="#474759"
        d="M371.762 441.836c.322.619.646 1.237.969 1.856l.444 2.269-3.02-.93c-.152-1.111-.392-2.241.661-3.095.314-.042.629-.076.946-.1z"
      ></path>
      <path
        fill="#42393E"
        d="M382.682 442.892c1.218 2.849-1.992 1.936-2.684 3.161l-1.006-.06-.104-.173c-.339-2.029 1.256-2.461 2.574-3.127a1.507 1.507 0 011.22.199z"
      ></path>
      <path
        fill="#8F91A2"
        d="M382.682 442.892l-.421-.029-.386.17c-2.425-1.944-2.857.862-4.106 1.722-1.673-2.097-.482-4.514-.761-6.767l9.115-4.865c.181.034.357.024.533-.028 1.422.972 1.604 2.398 1.299 3.906-.186.914-.502 2.062-1.742 1.838-.862-.156-.708-1.363-1.223-1.973-3.44.985-1.287 4.113-2.308 6.026z"
      ></path>
      <path
        fill="#9793B5"
        d="M398.972 417.913c1.455-.105 2.853-1.871 4.372-.152-2.487 1.324-.371 4.734-2.743 6.079-.837.475-1.77.779-2.659 1.162-1.221-.664-1.916-1.676-2.027-3.071l.222.08c.483-1.686-1.343-4.969 2.835-4.098z"
      ></path>
      <path
        fill="#242129"
        d="M395.154 428.933l.803 1.001c-.467.458-.867.953-.918 1.535.117-.544.445-1.081.925-1.529 3.275 3.021 3.212 6.003-.106 8.946-.737-.918-2.089.1-2.803-.892l-.151-.166c-.797-.869-1.148-1.915-1.231-3.071-.115-1.433-.086-2.858.241-4.27.599-1.515 1.403-2.618 3.24-1.554z"
      ></path>
      <path
        fill="#242128"
        d="M384.99 436.865c.609-.563 1.388 2.764 1.819-.045.186-1.206-.088-2.482-.153-3.727l1.148-.178c1.066.599 1.138 1.732 1.481 2.718.24 1.027 1.319 1.467 1.703 2.396-.236.439-.59.854-.688 1.323-.376 1.798-1.322 3.364-3.201 3.132-1.755-.215-1.321-2.398-1.965-3.651-.276-.539-.109-1.306-.144-1.968z"
      ></path>
      <path
        fill="#9291A2"
        d="M392.863 431.042l-.013 3.761c-.666 1.074-1.247 2.959-2.779 1.966-1.846-1.196-1.161-3.185-.28-4.888a84.9 84.9 0 00.259-.813c.929-.947 1.867-.933 2.813-.026z"
      ></path>
      <path
        fill="#413C46"
        d="M389.791 431.881c.061.648.072 1.307.191 1.944.164.876-.626 2.241.607 2.497.622.129 1.499-.974 2.261-1.52l.054 3.027c-.64.064-1.277.132-1.915.199-1.104-.128-2.41.191-2.897-1.306.892-1.438-.131-3.183.739-4.625.316-.086.637-.159.96-.216z"
      ></path>
      <path
        fill="#42393E"
        d="M392.863 431.042l-2.813.025c-.108-3.449 2.85-3.14 4.866-3.73.662-.194.195 1.022.235 1.596-1.41-.002-2.214.656-2.288 2.109z"
      ></path>
      <path
        fill="#A39DA2"
        d="M402.161 431.255c.989-.307-.007-4.842 2.787-1.309-1.005.275-.973 2.757-2.787 1.309z"
      ></path>
      <path
        fill="#877164"
        d="M392.02 426.156c.327-1.561.654-3.12.98-4.684.584.577 1.169 1.156 1.752 1.737.446 2.243-1.129 2.608-2.732 2.947z"
      ></path>
      <path
        fill="#9D9AAF"
        d="M399.972 428.171c-1.518-.677-1.222-1.645-.324-2.571.257-.265 1.021-.442 1.243-.268 1.077.853-.071 1.644-.199 2.479a.962.962 0 00-.72.36z"
      ></path>
      <path
        fill="#474040"
        d="M393.055 437.994c.987.133 2.165-.334 2.803.893-.657-1.175-3.072 3.185-2.803-.893z"
      ></path>
      <path
        fill="#6A6977"
        d="M388.831 432.099c-.005 1.582.682 3.273-.739 4.627l-.286-3.81 1.025-.817z"
      ></path>
      <path
        fill="#C8BAAC"
        d="M394.092 419.765c-2.079-4.744-6.798-8.575-5.089-14.624.212-.749.658-1.433.996-2.146.162.16.325.321.49.479.153.647.04-.221.221.417.381 1.35-.146 3.817 2.701 2.309 1.131 2.291.917 5.03 2.441 7.188.18 2.339 1.577 5.017-1.76 6.377z"
      ></path>
      <path
        fill="#CBBCA9"
        d="M390.982 397.662c1.498 1.952 3.985 2.948 5.097 5.273.875 1.323 1.265 2.776-.161 3.835-1.202.894-1.967-.422-2.787-1.096-1.714-.181-2.386-1.573-3.219-2.777l.087.098c.207-1.8-2.908-4.213.983-5.333z"
      ></path>
      <path
        fill="#6D3927"
        d="M379.992 419.975c.857 1.778 1.708 3.56 2.574 5.333.926 1.894-.602 2.88-1.698 3.593-1.63 1.061-1.721-.859-2.196-1.688-.981-1.71-1.804-3.512-2.69-5.275 1.864.421 2.799-1.053 4.01-1.963z"
      ></path>
      <path
        fill="#535562"
        d="M394.092 419.765c1.78-2.088.435-4.562.841-6.82-.709-2.075-2.588-4.604 1.815-4.71 1.056.809 1.383 2.021 1.759 3.203a6.23 6.23 0 01.209 2.001c-.031.821.012 1.645.184 2.458l.072 2.017c-2.831.061-1.536 2.977-2.836 4.098l-2.044-2.247z"
      ></path>
      <path
        fill="#7B4E3E"
        d="M396.998 391.056c.299-.13.866-.29.855-.386-.169-1.508-2.072-3.125.204-4.447.837-.486 2.024-.562 2.668.369 1.178 1.701 1.652 3.545.21 5.402l-4.003-.009c.008-.31.031-.621.066-.929z"
      ></path>
      <path
        fill="#7B625A"
        d="M394.967 394.966c-.354.745-.103 2.332-1.586 1.646-1.012-.468-2.572-.605-2.645-2.241-.003-.067.812-.171 1.248-.256.6 1.67 2.311-.565 2.983.851z"
      ></path>
      <path
        fill="#5E483C"
        d="M394.009 377.956l1.363-4.732c1.811 1.683-.058 3.336.694 4.668l-2.057.064z"
      ></path>
      <path
        fill="#895F58"
        d="M394.785 384.977c.557.893 1.291 1.717 1.098 2.892-.744-.82-3.305-.952-1.098-2.892z"
      ></path>
      <path
        fill="#343134"
        d="M396.779 408.854c-3.663-.013-1.043 2.812-1.847 4.09-3.916-1.492-1.232-4.784-1.949-7.149l-.041-.589c3.076 2.049 3.052-.187 3.137-2.271l2.141.209c.317.959 1.038 1.642 1.651 2.398l.05 1.211c-.357 1.734-1.552 2.213-3.142 2.101z"
      ></path>
      <path
        fill="#A2A4B6"
        d="M399.871 405.543c-.887-.021-1.987.714-2.582-.376-.469-.86.482-1.401.93-2.022 1.636.628 2.21-2.002 3.881-1.263 3.577 3.849-2.26 1.97-2.229 3.661z"
      ></path>
      <path
        fill="#825C54"
        d="M400.906 391.944c1.226.218 2.014.647.593 1.711-.765.572-2.02.269-2.559 1.331-1.562-.235-2.214-.755-.494-1.832.771-.482 1.637-.811 2.46-1.21z"
      ></path>
      <path
        fill="#918C9E"
        d="M396.779 408.854l3.142-2.101 1.373 1.239c.658.818.549 1.83.694 2.778-.145-1.313.182-2.532.731-3.707.865-1.096 1.299-.692 1.323.451.046 2.153-.003 4.308-.012 6.462-1.333 1.648-3.096 2.15-5.132 1.92-1.545.052-2.686-.124-1.054-1.866.955-.769 2.195-1.546-.074-2.206-1.044-.75-.697-1.967-.991-2.97z"
      ></path>
      <path
        fill="#1A1525"
        d="M402.72 407.064c.104 2.166.948 4.452-.95 6.833-1.742-2.219-.641-4.097-.476-5.904l1.426-.929z"
      ></path>
      <path
        fill="#5A5644"
        d="M364.955 439.008c-.996-.448-1.992-.896-2.988-1.346-.23-.417-.683-.858-.641-1.245.076-.698.785-.483 1.065-.229.942.852 2.372 1.287 2.564 2.82z"
      ></path>
      <path
        fill="#15141F"
        d="M377.769 444.754c.401-2.071.167-4.398 2.041-5.972 1.904 1.114.296 3.426 2.065 4.25l-2.985 2.79-1.121-1.068z"
      ></path>
      <path
        fill="#9B98A6"
        d="M395.964 429.939c-.094 1.885.435 3.849-1.102 5.552-.19-1.921-3.3-4.206 1.095-5.558l.007.006z"
      ></path>
      <path
        fill="#34241A"
        d="M392.942 405.206c-.021.198-.007.396.041.589-2.199 1.227-.009 3.763-1.629 5.256-2.752-2.327-.792-5.486-1.442-8.153l3.03 2.308z"
      ></path>
      <path
        fill="#1C1729"
        d="M397.771 411.825c.569-.858-.395-2.716 1.338-2.672 1.259.032 1.247 1.696.939 2.37-.435.951 1.082 4.036-2.203 2.508-.024-.735-.048-1.47-.074-2.206z"
      ></path>
    </motion.g>
  );
};

export default Church;
