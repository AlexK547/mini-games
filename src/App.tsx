import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Game2048 from './components/game2048/Game2048'
import GameMemoryGame from './components/memory-game/GameMemoryGame'
import GameSudoku from './components/sudoku/GameSudoku'


function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className='wrapper'>
        <h1>Mini games</h1>
        <Game2048 />
        <GameMemoryGame />
        <GameSudoku />
      </div>
    </BrowserRouter>
  )
}

export default App
