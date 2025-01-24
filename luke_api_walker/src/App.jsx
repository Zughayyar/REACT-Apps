import SearchForm from "./SearchForm.jsx";
import {Route, Routes} from "react-router-dom";
import Details from "./Details.jsx";


const App = () => {


    return (
        <div>
            <SearchForm/>
            <Routes>
                <Route path="/" element={<h1>Welcome, API </h1>}/>
                <Route path="/:resource/:id" element={<Details />} />
            </Routes>
        </div>
    )
}

export default App