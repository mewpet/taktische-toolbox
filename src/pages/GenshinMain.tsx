import { FURINA_EMOTE } from "../assets/exports"
import { GenshinNextBanner } from "../components/GenshinNextBanner"
import { URLS } from "../utils/consts"

const GenshinMain = () => {

    return (
        <div className="genshin-main">
            <div className="content">
                <GenshinNextBanner 
                link={URLS.GENSHIN_MAIN + '/furina'}
                image={FURINA_EMOTE}
                title="WE ARE BLESSED IN:"
                timestamp={1699459200}
            />
            </div>
        </div>
    )
}

export {
    GenshinMain
}