import { useNavigate } from "react-router-dom"
import { Timer } from "./Timer"

interface GenshinNextBanner {
    image: string,
    title: string,
    link: string,
    timestamp: number
}

const GenshinNextBanner = (props: GenshinNextBanner) => {
    const navigate = useNavigate()
    
    return (
        <div onClick={() => navigate(props.link)} className="genshin-next-banner">
            <div className="splash-cell">
                <img src={props.image} alt="" className="banner-splash" />
            </div>
            <div className="banner-content">
                <div className="title">{props.title}</div>
                
                <div className="timer-container">
                    <Timer timestamp={props.timestamp} />
                </div>
            </div>
        </div>
    )
}

export {
    GenshinNextBanner
}