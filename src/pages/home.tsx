

// Components
import Header from "../components/Header";


const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="content">
                <div className="wide-panel">
                    <div className="title">How things work here!</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt officia labore molestiae pariatur impedit repellendus, iure maiores quas voluptatum? Autem consequuntur, dolorum aperiam corporis rem inventore accusantium fugit exercitationem odio, molestias tempora quasi repellendus consequatur placeat ea, cupiditate obcaecati quia recusandae hic distinctio labore laudantium! Minus corporis fuga vero ullam reiciendis cupiditate quisquam nemo atque, animi iusto saepe laudantium!</div>
                </div>
                <div className="panel-grid">
                    <div className="half-panel">
                        <div className="panel-bg" />
                        <div className="title">Random Class Thursday</div>
                    </div>
                    <div className="half-panel">
                        <div className="title">Bingo! <i>(Coming soon™)</i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;