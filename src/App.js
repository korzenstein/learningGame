// import "./App.css";
import "./style/sass/App.scss";
import Animals from "./components/Animals";
import RacoonText from "./components/RacoonText";
import Firelies from "./components/Fireflies"

import background from "./assets/back2.png";

function App() {
  return (
    <main className="main">
      <div className="wrapper">
        <section className="sectionContainer">
          <img className="inner backImg" src={background} alt="background" />
          <Animals />
          <RacoonText/>
          <Firelies/>
        </section>
        

        {/* <RacoonText/> */}
        
      </div>
    </main>
  );
}

export default App;
