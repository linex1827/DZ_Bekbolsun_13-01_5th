import { useState } from 'react';
import './App.css';
import Mode from './components/Mode/Mode';
import TourList from './components/TourList';

function App() {

  const [mode, setMode] = useState({current: "day"})

  return (
    <div className="App">
        <Mode mode={mode} changeMode={setMode}/>
        <TourList mode={mode}/>
    </div>
  );
}

export default App;
