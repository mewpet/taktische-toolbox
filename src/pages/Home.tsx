import { URLS } from "../utils/consts";

// Components
import { NavButton } from "../components/NavButton";


const Home = () => {

    return (
        <div className="home">
            <div className="content">
                <div className="wide-panel">
                    <div className="title">How things work here!</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt officia labore molestiae pariatur impedit repellendus, iure maiores quas voluptatum? Autem consequuntur, dolorum aperiam corporis rem inventore accusantium fugit exercitationem odio, molestias tempora quasi repellendus consequatur placeat ea, cupiditate obcaecati quia recusandae hic distinctio labore laudantium! Minus corporis fuga vero ullam reiciendis cupiditate quisquam nemo atque, animi iusto saepe laudantium!</div>
                </div>
                <div className="panel-grid">
                    <NavButton text="Random Class Thursday" link={URLS.RANDOM_CLASS_THURSDAY}>
                        <div className="rct-custom-button" />
                    </NavButton>
                    <NavButton text="Bingo! (Coming soon™)" />
                    <NavButton text="Genshin" link={URLS.GENSHIN_MAIN}>
                        <div className="genshin-button" />
                    </NavButton>
                </div>
            </div>
        </div>
    )
}

export {
    Home
}