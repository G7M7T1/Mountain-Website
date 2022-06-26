import AboutText from "../../components/about-text/about-text";
import Footer from "../../components/footer/footer";
import Banner from "../../components/Banner/banner";
import AboutPrice from "../../components/about-price/about-price";

const BannerOne = {
    imgUrl: 'serve-3.jpg',
    title: "Mountain Ware",
    text: "Are you still hesitating whether to subscribe to " +
        "our service? Contact us now and we can give you a discount. " +
        "It is our mission to open your new life and make you happy and " +
        "happy every day",
    button: "Back Home"
}

const About = () => {
    return (
        <div>
            <AboutText />
            <Banner imgUrl={BannerOne.imgUrl} title={BannerOne.title}
                    text={BannerOne.text} button={BannerOne.button} />
            <AboutPrice />
            <Footer />
        </div>
    )
}

export default About