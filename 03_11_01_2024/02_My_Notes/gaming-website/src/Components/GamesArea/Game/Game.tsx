import "./Game.css";
import bg3ImageSrc from "../../../Assets/Images/Games/bg3.jpg";
import Sale from "../Sale/Sale";


//JSX.Element is an html element
function Game(): JSX.Element {

    const randomPrice = Math.floor(Math.random() * 200) + 10;

    return (
        <div className="Game">
            <h2>Game</h2>
            <p>
                This game is somewhat Good somewhat Good.
            </p>
            <p>
                Price: {randomPrice} 
                {randomPrice <= 100 ? <span>🎲</span> : <span>🎮</span> }
                {randomPrice > 100 && <span> credit card: 💳</span> }
            </p>
            <img src={bg3ImageSrc} alt="bg3" />
            <Sale/>
        </div>
    );
}

export default Game;