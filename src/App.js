// import "./App.css";
import "./style/sass/App.scss";
import Animals from "./components/Animals";
import RacoonText from "./components/RacoonText";
import Firelies from "./components/Fireflies"
import Alt from "./components/Alt"
import background from "./assets/back2.png";
import {useState} from 'react'

function App() {
  const [loadRacoon, setLoadRacoon] = useState(false)

  const handleRacoon = () => {
    setLoadRacoon(!loadRacoon)
  }

  return (
    <main className="main">
      <div className="wrapper">
        <section className="sectionContainer">
          <img className="inner backImg" src={background} alt="background" />
          <Animals
          handleRacoon={handleRacoon}
           />
          {/* <RacoonText/> */}
          <Alt
          loadRacoon={loadRacoon}
          
          />
          <Firelies/>
        </section>
        

        {/* <RacoonText/> */}
        
      </div>
    </main>
  );
}

export default App;
