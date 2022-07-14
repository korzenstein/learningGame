import './App.css';
import Racoon from './components/Racoon'
import background from './assets/back.png'

function App() {
  return (
    <main className="main">
      <div className="backImgContainer">
        <img 
      className="backImg"
      src={background} alt="background" />
      </div>
      
      <Racoon/>
    </main>
  );
}

export default App;
