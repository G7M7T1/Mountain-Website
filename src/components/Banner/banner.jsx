import "./banner.scss"
import Button from "../Button/button";

const Banner = ({imgUrl, title, text, button}) => {
    return(
        <section className="section-banner" style={{backgroundImage: `url("${imgUrl}")`, backgroundAttachment: "fixed"}}>
            <div className="section-banner-bg">
                <h3>{title}</h3>
                <p>{text}</p>
                <Button>{button}</Button>
            </div>
        </section>
    )
}

export default Banner