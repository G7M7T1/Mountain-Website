import "./services.scss"
import Button from "../Button/button";
import ServeCard from "../serve-card/serve-card";

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
                    <ServeCard key={id} title={title} imageUrl={imageUrl} />
                ))}
            </div>
            <div className="section-2-text">
                <div className="section-2-main-text">
                    <h3>Get Serviced Today</h3>
                </div>
                <div className="section-2-other-text">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur lore adipisicing elit. Totam
                        consectetur soluta odit lore optio, minima lore vero velit,
                        consectetur maiores placeat dolores lore minus!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <Button type='button' buttonType='google'>Check More</Button>
                </div>
            </div>
        </section>
    )
}

export default Services