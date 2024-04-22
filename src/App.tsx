import './App.css'
import Game2048 from './components/game2048/Game2048'
import GameMemoryGame from './components/memory-game/GameMemoryGame'
import GameSudoku from './components/sudoku/GameSudoku'


function App() {

  return (
    <>
      <div className='wrapper'>
        <h1>Mini games</h1>
        <Game2048 />
        <GameMemoryGame />
        <GameSudoku />

      </div>
    </>
  )
}

export default App
