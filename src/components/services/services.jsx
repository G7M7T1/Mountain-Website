import "./services.scss"
import Button from "../Button/button";
import ServeCard from "../serve-card/serve-card";
import {Link} from "react-router-dom";

const Service_Data = [
    {
        id: 10001,
        title: "Vision",
        imageUrl: "serve-1.jpg",
    },

    {
        id: 10002,
        title: "Career",
        imageUrl: "serve-2.jpg",
    },

    {
        id: 10003,
        title: "Relation",
        imageUrl: "serve-3.jpg",
    }
]

const Services = () => {
    return (
        <section className="section-2">
            <div className="photo-list">
                {Service_Data.map(({id, title, imageUrl}) => (
                    <ServeCard key={id} title={title} imageUrl={imageUrl}/>
                ))}
            </div>
            <div className="section-2-text">
                <div className="section-2-main-text">
                    <h3>Get Serviced Today</h3>
                </div>
                <div className="section-2-other-text">
                    <p>
                        We will take you to the most beautiful cities, take you to travel,
                        take you to taste the best restaurants, and take you to meet the
                        people you want to know. We are committed to making customers' lives
                        more exciting, choose our services and start your new life
                    </p>
                    <Link to="/about"><Button type='button' buttonType='google'>Check More</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default Services