const Sleepy = () => {

  const zDivs = [0, 1, 2]

  return (
    <div className="sleepyContainer inner">
      {zDivs.map(i => (
        <div class="zzz">z</div>
      ) ) }
    </div>
  );
};
export default Sleepy;
