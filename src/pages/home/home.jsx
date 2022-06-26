import MainBanner from "../../components/main-banner/main-banner";
import Services from "../../components/services/services";
import Banner from "../../components/Banner/banner";
import PhotoList from "../../components/photo-list/photo-list";
import Footer from "../../components/footer/footer";

const BannerOne = {
        imgUrl: 'banner-one.jpg',
        title: "Mountain Ware",
        text: "Are you still hesitating whether to subscribe to " +
            "our service? Contact us now and we can give you a discount. " +
            "It is our mission to open your new life and make you happy and " +
            "happy every day",
        button: "Contact Us",
        to: "contact"
}

const Home = () => {
    return (
        <>
            <MainBanner />
            <Services />
            <Banner imgUrl={BannerOne.imgUrl} title={BannerOne.title}
                    text={BannerOne.text} button={BannerOne.button} to={BannerOne.to} />
            <PhotoList />
            <Footer />
        </>
    )
}

export default Home