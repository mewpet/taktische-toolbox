import { Timer } from "./Timer"

interface GenshinNextBanner {
    image: string,
    title: string
}

const GenshinNextBanner = (props: GenshinNextBanner) => {
    
    return (
        <div className="genshin-next-banner">
            <div className="splash-cell">
                <img src={props.image} alt="" className="banner-splash" />
            </div>
            <div className="banner-content">
                <div className="title">{props.title}</div>
                
                <div className="timer-container">
                    <Timer timestamp={1699459200} />
                </div>
            </div>
        </div>
    )
}

export {
    GenshinNextBanner
}