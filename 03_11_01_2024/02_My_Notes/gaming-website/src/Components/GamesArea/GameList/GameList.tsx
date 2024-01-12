import { SyntheticEvent } from "react";
import "./GameList.css";

function GameList(): JSX.Element {

    //Demo for values from backend.

    const gamesFromBackend = [
        { id: 1, name: "Chess", price: 30 },
        { id: 2, name: "Monopoly", price: 40 },
        { id: 3, name: "Taki", price: 50 },
        { id: 4, name: "Risk", price: 60 },
    ]

    function showTopGame(){
        alert("Chess");
    }

    function showTopSeller(args: SyntheticEvent){
        console.log(args);
        alert("Exotic games")
    }

    function showMessage(message:string){
        console.log("Message:" + message);
        
    }

    return (
        <div className="GameList">
            <h2>Games List:</h2>
            <ul>
                {gamesFromBackend.map(x => <li key={x.id}>{x.name}, Price:{x.price}$</li>)}
            </ul>

            <br/>
            <button onClick={showTopGame}>Top Game</button>
            <button onClick={showTopSeller}>Top Seller</button>
            <button onClick={ () => showMessage("Say Hi")}>Say Hi</button>
        </div>
    );
}

export default GameList;
