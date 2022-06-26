import "./about-text.scss"

const AboutText = () => {
    return (
        <div className="about-text">
            <div className="about-container">
                <section className="grid info">
                    <div className="column-xs-12 column-md-1">
                        <div className="about">
                            <h1 className="section-heading">About Us</h1>
                        </div>
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <img src="https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                    </div>
                    <div className="column-xs-12 column-md-7">
                        <div className="about-intro">
                            <h2 className="about-title">Better View Better Life</h2>

                            <p>
                                Since 2006, Tufeng has served 4,000,000 global users
                                According to customer preferences, we provide a wealth of itineraries
                                You can choose directly or customize your own personalized itinerary
                            </p>

                            <p>
                                You don't have to wait in line with the group, you don't have to worry
                                about doing strategy research, and you don't have to worry about language
                                barriers and poor communication. 12 years of focus on overseas travel,
                                3V1 professional service team, just to give you and your relatives and
                                friends a better travel experience
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutText