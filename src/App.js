import './App.css';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="components-container">
        <div className="component-links"><h2>Buttons</h2></div>
        <div className="component-links"><h2>Cards</h2></div>
        <div className="component-links"><h2>Footers</h2></div>
        <div className="component-links"><h2>NavBars</h2></div>
      </div>
    </div>
  );
}

export default App;
