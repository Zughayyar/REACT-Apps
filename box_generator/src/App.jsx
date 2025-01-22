import BoxColorForm from "./components/BoxColorForm.jsx";
import BoxColorDisplay from "./components/BoxColorDisplay.jsx";
import React from "react";

const App = () => {
    const [boxes, setBoxes] = React.useState([]);
    const colors = ["green", "red", "orange", "yellow", "blue"];

    const addBox = (newColor) => {
        setBoxes([...boxes, newColor]);
    };

    return (
        <div>
            <h1>Box Generator</h1>
            <BoxColorForm colors={colors} onAddBox={addBox} />
            <br />
            <BoxColorDisplay boxes={boxes} />
        </div>
    );
};

export default App;