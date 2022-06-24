import "./serve-card.scss"

const ServeCard = ({title, imageUrl}) => {
    return(
        <div className="photo">
            <p>{title}</p>
            <img src={imageUrl} alt="serve-IG"/>
        </div>
    )
}

export default ServeCard