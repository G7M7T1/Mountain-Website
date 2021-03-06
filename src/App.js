import './App.scss';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
    return (
        <Routes>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
        </Routes>
    )
}

export default App
