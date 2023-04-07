import { RandomReveal } from "react-random-reveal";


const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <RandomReveal 
                    isPlaying
                    duration={2}
                    revealDuration={.8}
                    revealEasing="easeInQuad"
                    ignoreCharacterSet={[' ']}
                    characters={`Taktische Toolbox`}
                    onComplete={() => {
                        console.log(document.getElementsByClassName('underscore')[0])
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

export default Header;