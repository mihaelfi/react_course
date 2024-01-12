import { useState } from "react";
import "./RandomGame.css";

function RandomGame(): JSX.Element {

    // const arr = useState<string>(""); // "" is the initial value.
    // const gameToDisplay = arr[0]; // Value to display 
    // const setGameToDisplay = arr[1]; // Function for changing the value + rerender the component

    const [gameToDisplay, setGameToDisplay] = useState<string>("");

    function showRandomGame() {
        const arr = ["Doll", "Car", "Doom", "Chess", "Zooma"];
        const index = Math.floor(Math.random() * arr.length);
        alert(arr[index]);
        setGameToDisplay(arr[index]);
    }

    return (
        <div className="RandomGame">
			<button onClick={showRandomGame}>Random Game</button>
            <span>{gameToDisplay}</span>
        </div>
    );
}

export default RandomGame;
