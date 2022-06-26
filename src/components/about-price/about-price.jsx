import "./about-price.scss"
import AboutPriceCard from "../about-price-card/about-price-card"

const Card_Data = [
    {
        id: 20001,
        cardType: "free",
        title: "Basic",
        price: 2000,
        text1: "2 Day time",
        text2: "3 Star Hotel",
        text3: "Michelin 1 star",
        text4: "24H Food",
        text5: "24H Service"
    },

    {
        id: 20002,
        cardType: "free",
        title: "Standard",
        price: 6000,
        text1: "6 Day time",
        text2: "4 Star Hotel",
        text3: "Michelin 2 star",
        text4: "24H Food",
        text5: "24H Service"
    },

    {
        id: 20003,
        cardType: "free",
        title: "Premium",
        price: 9999,
        text1: "12 Day time",
        text2: "5 Star Hotel",
        text3: "Michelin 3 star",
        text4: "24H Food",
        text5: "24H Service"
    }
]

const AboutPrice = () => {
    return (
        <div className="pricing-section">
            <h1 className="section-heading-section">Server <span>Pricing</span></h1>
            <div>
                <div className="pricing-cards-wrapper">
                    {Card_Data.map(({
                                        id, cardType, title,
                                        price, text1, text2,
                                        text3, text4, text5
                                    }) => (
                        <AboutPriceCard key={id} cardType={cardType} title={title}
                                        price={price} text1={text1} text2={text2}
                                        text3={text3} text4={text4} text5={text5}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutPrice