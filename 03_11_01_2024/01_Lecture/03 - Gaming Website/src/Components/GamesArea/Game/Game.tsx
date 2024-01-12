import "./Game.css";
import imgSource from "../../../Assets/Images/game.jpg";

function Game(): JSX.Element {

    const price = Math.floor(Math.random() * 200) + 30;

    return (
        <div className="Game">
            <h2>Game</h2>
            <p>Cool game ever!</p>
            <p>
                Price: {price}
                { price <= 100 ? <span>🎲</span> : <span>🎮</span> }
                { price > 100 && <span>💳</span> }
            </p>
            <img src={imgSource} />
            
        </div>
    );
}

export default Game;