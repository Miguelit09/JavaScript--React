/* Lógica */
import { WINNER_COMBOS } from "./constants.js"


export const checkWinner = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
    /* Revisamos si hay un empate, si no hay más espacios vacíos en el tablero */
    return newBoard.every((square) => square !== null)
}