import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o',
}



const Square = ({ children, isSelected, updateBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) /* Inicializa el tablero */

  const [turn, setTurn] = useState(TURNS.X) /* Inicializa los turnos */

  const [winner, setWinner] = useState(null) /* Null = No hay ganador. False = Empate*/

  const checkWinner = (boardToCheck) => {
    /* Revisamos todas las combinaciones ganadoras con el for */
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        /* Si se cumplen los 3 campos iguales, retorna al ganador */
        return boardToCheck[a]
      }
    }
    /* Si no hay ganador, retorna null */
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    
    if(board[index] || winner) return /* No actualizamos la posición al hacer click si ya tiene algo */

    /* Actualizar tablero */
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    /* Actualizar turno */
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    /* Revisar si hay ganador */
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganó:'
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  ) 
}

export default App
