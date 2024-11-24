import React from 'react';
import './App.scss';
import { AreaSelector } from "./component/areaSelector";
import { Spectrum } from "./component/spectrum";

function App() {
    const [id, setId] = React.useState(1);
    const handleIdChange = React.useCallback((newId: number) => {
        setId(newId);
    }, []);

    return (
        <div className="App">
            <AreaSelector handleIdChange={handleIdChange} selectedId={id} />
            <Spectrum id={id} />
        </div>
    );
}

export default App;
