import "./main-banner.scss"
import {Link} from "react-router-dom"
import Button from "../Button/button";

const MainBanner = () => {
    return(
        <section className="section-welcome">
            <div className="bg">
                <div className="bgg">
                    <nav className="navbar">
                        <div className="logo">
                            <img src="mt.svg" alt="logo"/>
                        </div>
                        <div className="navLink">
                            <ul>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Services</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="welcomeText">
                        <h3>Mountain Ware</h3>
                        <h1>Better View Better Life</h1>
                        <p className="welcomeTextarea">
                            Do you want a better view? This will play a key role in
                            your life, we help customers see better scenery and help
                            customers go to more snow-capped mountains. If you want
                            to join our service, you can contact our customer service, 
                            we will bring you the best service and best experience
                        </p>
                        <div className="buttonArea">
                            <Button>Services</Button>
                            <Button>About Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner