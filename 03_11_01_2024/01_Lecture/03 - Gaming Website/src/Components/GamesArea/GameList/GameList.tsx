import { SyntheticEvent } from "react";
import "./GameList.css";

function GameList(): JSX.Element {

    // Demo for getting values from backend:
    const games = [
        { id: 1, name: "Chess", price: 30 },
        { id: 2, name: "Darts", price: 40 },
        { id: 3, name: "Doom", price: 20 },
        { id: 4, name: "Dolls", price: 50 },
    ];

    function showTopGame() {
        alert("Chess");
    }
    function showTopSeller(args: SyntheticEvent) {
        console.log(args); // Event information.
        alert("Exotic Games");
    }
    function showMessage(message: string) {
        alert(message);
    }

    return (
        <div className="GameList">
            <h2>Common Games:</h2>
            <ul>
                {games.map(g => <li key={g.id}>Name: {g.name}, Price: {g.price}</li>)}
            </ul>
            <br />

            <button onClick={showTopGame}>Top Game</button>
            <button onClick={showTopSeller}>Top Seller</button>
            <button onClick={() => showMessage("Hi")}>Say Hi</button>

        </div>
    );
}

export default GameList;
