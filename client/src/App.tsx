import React from 'react';
import './App.scss';
import { AreaSelector } from "./component/areaSelector/areaSelector";
import { Spectrum } from "./component/spectrum/spectrum"

function App() {
    const [id, setId] = React.useState(1);
    const handleIdChange = React.useCallback(newId => {
        setId(newId);
    }, []);

  return (
    <div className="App">
        <AreaSelector handleIdChange={handleIdChange} defaultId={id}/>
        <Spectrum id={id}/>
    </div>
  );
}

export default App;
