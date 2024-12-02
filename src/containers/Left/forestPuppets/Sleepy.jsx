import useForestStore from "store/useForestStore";

const Sleepy = () => {
  const { toggleSleepy } = useForestStore();

  const handleSleepy = () => {
    toggleSleepy();
    console.log('sleep')
  };

  const zDivs = [0, 1, 2]

  return (
    <div className="sleepyContainer inner">
      {zDivs.map(i => (
        <div 
        onClick={handleSleepy}
        class="zzz">z</div>
      ) ) }
    </div>
  );
};
export default Sleepy;
