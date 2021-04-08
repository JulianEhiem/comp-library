import './App.css';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="components-container">
        <div className="component-links">Buttons</div>
        <div className="component-links">Cards</div>
        <div className="component-links">Footers</div>
        <div className="component-links">NavBars</div>
      </div>
    </div>
  );
}

export default App;
