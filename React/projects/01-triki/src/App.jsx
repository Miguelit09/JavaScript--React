import { useEffect, useState } from "react"

import { Square } from "./components/Square.jsx"

import { WinnerModal } from "./components/WinnerModal.jsx"

import { TURNS } from "./constants.js"

import { checkWinner, checkEndGame } from "./board.js"

import { saveGameToStorage, resetGameStorage } from "./storage/index.js"


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  }) /* Inicializa el tablero */

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage) return turnFromStorage
    return TURNS.X
  }) /* Inicializa los turnos */

  const [winner, setWinner] = useState(null) /* Null = No hay ganador. False = Empate*/



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()

  }



  const updateBoard = (index) => {

    if (board[index] || winner) return /* No actualizamos la posición al hacer click si ya tiene algo */

    /* Actualizar tablero */
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    /* Actualizar turno */
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    /* Guardar la partida */
    saveGameToStorage({ board: newBoard, turn: newTurn })


    /* Revisar si hay ganador */
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    console.log('useEffect')
  })


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
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

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  )
}

export default App
