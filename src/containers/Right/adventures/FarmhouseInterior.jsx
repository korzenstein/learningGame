import farmexterior from "../assets/farmexterior.png";
import useRightStore from "../../../store/useRightStore";
import CloseButton from "../../../components/CloseButton/CloseButton";

const FarmInterior = () => {
  const { mapScene, toggleMapScene } = useRightStore();

  return (
    <div className="farm">
      <img src={farmexterior} alt="Farm exterior" />
       <CloseButton exists={!mapScene} onClick={() => toggleMapScene()} />
    </div>
  );
};

export default FarmInterior;
