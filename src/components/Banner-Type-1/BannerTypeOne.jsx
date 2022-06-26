import "./BannerTypeOne.scss"

const BannerTypeOne = ({bgUrl, title}) => {
    return(
        <header className="banner-type-one">
            <span className="banner-type-one-bg" style={{
                background: `url(${bgUrl})`}}></span>
            <h1>{title}</h1>
        </header>
    )
}

export default BannerTypeOne