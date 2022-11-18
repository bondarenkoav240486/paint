import './App.css';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import toolState from "./store/toolState";
import Tool from "./tools/Tool";
import canvasState from "./store/canvasState";

function App() {

  return (
    <div className="App">
        <header>
            <Toolbar/>
            <SettingBar/>
        </header>
        <Canvas/>
    </div>
  );
}

export default App;
