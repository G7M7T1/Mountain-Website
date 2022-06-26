import "./banner.scss"
import Button from "../Button/button";
import {Link} from "react-router-dom";

const Banner = ({imgUrl, title, text, button, to}) => {
    return(
        <section className="section-banner" style={{backgroundImage: `url("${imgUrl}")`, backgroundAttachment: "fixed"}}>
            <div className="section-banner-bg">
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={to}><Button>{button}</Button></Link>
            </div>
        </section>
    )
}

export default Banner