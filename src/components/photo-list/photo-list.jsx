import "./photo-list.scss"

const PhotoList = () => {
    return(
        <section className="section-4">
            <div className="section-4-list-1">
                <div className="section-4-list-photo photo-1-1" style={{backgroundImage: `url("photo-list-1.jpg")`}}></div>
                <div className="section-4-list-photo photo-1-2" style={{backgroundImage: `url("photo-list-2.jpg")`}}></div>
                <div className="section-4-list-photo photo-1-3" style={{backgroundImage: `url("photo-list-3.jpg")`}}></div>
            </div>
            <div className="section-4-list-2">
                <div className="section-4-list-photo photo-2-1" style={{backgroundImage: `url("photo-list-4.jpg")`}}></div>
                <div className="section-4-list-photo photo-2-2" style={{backgroundImage: `url("photo-list-5.jpg")`}}></div>
                <div className="section-4-list-photo photo-2-3" style={{backgroundImage: `url("photo-list-6.jpg")`}}></div>
            </div>
        </section>
    )
}

export default PhotoList