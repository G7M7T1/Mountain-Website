import "./about-price-card.scss"

const AboutPriceCard = ({cardType, title, price, text1, text2, text3, text4, text5}) => {
    return(
        <div className="pricing-card swiper-slide">
            <div className="pricing-card-front">
                <h1 className={`pricing-card-heading heading-${cardType}`}>{title}</h1>
                <h3 className="pricing-card-price">${price}</h3>
                <ul className={`pricing-card-list list-${cardType}`}>
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <span>{text1}</span>
                    </li>
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <span>{text2}</span>
                    </li>
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <span>{text3}</span>
                    </li>
                    <li>
                        <i className="fas fa-times-circle"></i>
                        <span>{text4}</span>
                    </li>
                    <li>
                        <i className="fas fa-times-circle"></i>
                        <span>{text5}</span>
                    </li>
                </ul>
                <button className={`pricing-card-btn btn-${cardType}`}>Choose Plan</button>
            </div>

        </div>
    )
}

export default AboutPriceCard