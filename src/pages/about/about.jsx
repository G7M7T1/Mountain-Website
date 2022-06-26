import AboutText from "../../components/about-text/about-text";
import Footer from "../../components/footer/footer";
import Banner from "../../components/Banner/banner";
import AboutPrice from "../../components/about-price/about-price";
import BannerTypeOne from "../../components/Banner-Type-1/BannerTypeOne";

const BannerOne = {
    imgUrl: 'serve-3.jpg',
    title: "Mountain Ware",
    text: "Are you still hesitating whether to subscribe to " +
        "our service? Contact us now and we can give you a discount. " +
        "It is our mission to open your new life and make you happy and " +
        "happy every day",
    button: "Back Home",
    to: "/"
}

const BannerFirst = {
    bgUrl: "https://images.unsplash.com/photo-1572491671313-e2bb1bf15e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    title: "About Us"
}

const About = () => {
    return (
        <div>
            <BannerTypeOne bgUrl={BannerFirst.bgUrl} title={BannerFirst.title} />
            <AboutText />
            <Banner imgUrl={BannerOne.imgUrl} title={BannerOne.title}
                    text={BannerOne.text} button={BannerOne.button} to={BannerOne.to} />
            <AboutPrice />
            <Footer />
        </div>
    )
}

export default About