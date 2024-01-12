import './App.css';
import Game from './Components/GamesArea/Game/Game';
import GameList from './Components/GamesArea/GameList/GameList';
import RandomGame from './Components/GamesArea/RandomGame/RandomGame';
import Slogan from './Components/GamesArea/Slogan/Slogan';
import Clock from './Components/SharedArea/Clock/Clock';


// alt+shift+O -> removes unused imports and sorts them.
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Clock/>
      <Slogan/>
      <RandomGame/>
      <GameList/>
      <Game/>
      <Game/>
      <Game/>
    </div>
  );
}

export default App;
