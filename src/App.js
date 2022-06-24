import './App.scss';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/home";
import About from "./pages/about/about";

function App() {
    return (
        <Routes>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
        </Routes>
    )
}

export default App
