import { FURINA_EMOTE } from "../assets/exports"
import { GenshinNextBanner } from "../components/GenshinNextBanner"

const GenshinMain = () => {

    return (
        <div className="genshin-main">
            <div className="content">
                <GenshinNextBanner image={FURINA_EMOTE} title="WE ARE BLESSED IN:" />
            </div>
        </div>
    )
}

export {
    GenshinMain
}