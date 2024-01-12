import './App.css';
import Game from './Components/GamesArea/Game/Game';
import GameList from './Components/GamesArea/GameList/GameList';
import RandomGame from './Components/GamesArea/RandomGame/RandomGame';
import Slogan from './Components/GamesArea/Slogan/Slogan';

// Alt + Shift + O

function App() {
    return (
        <div>
            <Slogan />
            <GameList />
            <RandomGame />
            <hr />
            
            <Game />
            <Game />
            <Game />

        </div>
    );
}

export default App;
