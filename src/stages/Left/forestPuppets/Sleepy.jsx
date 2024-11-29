import {useDispatch} from "react-redux";
import { toggleSleepy } from "../../../features/forestSlice.js";

const Sleepy = () => {
  const dispatch = useDispatch();
const handleSleepy = () => {
    dispatch(toggleSleepy());
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
