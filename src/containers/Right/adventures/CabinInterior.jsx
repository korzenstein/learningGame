import cabin from "../assets/loft.png";
import useRightStore from "../../../store/useRightStore";
import CloseButton from "../../../components/CloseButton/CloseButton";

const CabinInterior = () => {
  const { mapScene, toggleMapScene } = useRightStore();

  return (
    <div className="farm">
      <img src={cabin} alt="Cabin exterior" />
      <CloseButton exists={!mapScene} onClick={() => toggleMapScene()} />
    </div>
  );
};

export default CabinInterior;
