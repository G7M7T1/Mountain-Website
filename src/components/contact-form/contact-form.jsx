import "./contact-form.scss"

const ContactForm = () => {
    return (
        <div className="section-contact">
            <div className="section-heading-line"></div>
            <div className="contact-wrapper">
                <div className="contact-details">
                    <div className="phone">
                        <i className="fas fa-mobile-alt"></i>
                        <h3>Phone</h3>
                        <p>+123 456 789</p>
                        <p>+987 654 321</p>
                    </div>
                    <div className="address">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Address</h3>
                        <p>street #123</p>
                        <p>street #123</p>
                    </div>
                    <div className="email">
                        <i className="far fa-envelope"></i>
                        <h3>Email</h3>
                        <p>123456@gmail.com</p>
                        <p>123456@gmail.com</p>
                    </div>
                </div>
                <h1>Get In Touch</h1>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
    )
}

export default ContactForm