import { RandomReveal } from "react-random-reveal";
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate()
    return (
        <div className="header">
            <div onClick={() => navigate('/')} className="title">
                <RandomReveal 
                    isPlaying
                    duration={2}
                    revealDuration={.8}
                    revealEasing="easeInQuad"
                    ignoreCharacterSet={[' ']}
                    characters={`Taktische Toolbox`}
                    onComplete={() => {
                        document.getElementsByClassName('underscore')[0].setAttribute("style", "width: 100%");
                    }}
                />
            </div>
            <div className="link-container">
                <div className="link">Randomizer</div>
                <div className="link">Bingo!</div>
            </div>
            <div className="underscore"></div>
        </div>
    )
}

export { 
    Header
}