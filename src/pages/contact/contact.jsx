import ContactForm from "../../components/contact-form/contact-form"
import BannerTypeOne from "../../components/Banner-Type-1/BannerTypeOne"

const BannerFirst = {
    bgUrl: "https://images.unsplash.com/photo-1572491671313-e2bb1bf15e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    title: "Contact Us"
}

const Contact = () => {
    return(
        <div>
            <BannerTypeOne bgUrl={BannerFirst.bgUrl} title={BannerFirst.title} />
            <ContactForm />
        </div>
    )
}

export default Contact