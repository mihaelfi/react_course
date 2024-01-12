import "./RandomGame.css";
import { useState } from "react";

function RandomGame(): JSX.Element {

    const gamesFromBackend = [
        { id: 1, name: "Chess", price: 30 },
        { id: 2, name: "Monopoly", price: 40 },
        { id: 3, name: "Taki", price: 50 },
        { id: 4, name: "Risk", price: 60 },
        { id: 5, name: "Football", price: 60 },
        { id: 6, name: "Golf", price: 60 },
    ];

    // let chosenGame = "test";
    const [chosenGame,setChosenGame] = useState<string>("InitialValue");


    function getRandomGame() {

        const randomChoice = Math.floor(Math.random() * gamesFromBackend.length);
        console.log(`Random Choice index:${randomChoice}`);
        setChosenGame(gamesFromBackend[randomChoice].name);

        return;
    }


    return (
        <div className="RandomGame">
            <button onClick={getRandomGame}>Random Game</button>
            <span>{chosenGame}</span>
        </div>
    );
}

export default RandomGame;
