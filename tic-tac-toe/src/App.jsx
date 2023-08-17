import './App.css'
import Squares from './components/Squares'

function App() {
  return (
    <>
    <div className= "game-title">
      <h3> Tic Tac Toe</h3>
    </div>
    <div className="board-row">
        <Squares />
        <Squares />
        <Squares />
    </div>
    <div className="board-row">
        <Squares />
        <Squares />
        <Squares />
    </div>
    <div className="board-row">
        <Squares />
        <Squares />
        <Squares />
    </div>
  </>
  )
}

export default App