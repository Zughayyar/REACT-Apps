import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Word from "./Word.jsx";
import ColorWord from "./ColorWord.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/:word" element={<Word/>} />
                <Route path="/:word/:color/:backgroundColor" element={<ColorWord />} />
            </Routes>
        </div>
    )
}

export default App