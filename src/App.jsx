import { useState } from 'react'
import './App.css'
import './index.css'; 
import {Square} from './components/Square.jsx'
import { TURNS } from './constants.jsx'
import SelectColumn from './components/SelectColumn.jsx';
import Modals from './components/Modals.jsx';
import checkWinner from './logic/checkWinner.js';

function App() {
  const [board, setBoard] = useState(Array(49).fill(null))
  const [turn, setTurn] = useState(TURNS.Player1)
  const [winner, setWinner] = useState()
  const [modalMessage, setModalMessage] = useState(null)

  const reseteGame = () => {
    setBoard(Array(49).fill(null))
    setTurn(TURNS.Player1)
    setWinner(null)
  }  

  const updateBoard = (col) => {
    for (let row = 5; row >= 0; row--){
      const index = row * 7 + col + 7; 
      if (!board[index]){
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        setTurn(turn === TURNS.Player1 ? TURNS.Player2 : TURNS.Player1)

        const result = checkWinner(newBoard)
        if (result){
          setWinner(result)
          setModalMessage(`¡GANADOR! ${result === TURNS.Player1 ? 'Amarillo' : 'Rojo'}`);
          setTimeout(() => {
            reseteGame()
          }, 2500);
        } else {
          setModalMessage('')
        }
        return;
      }
    }
    setModalMessage('¡Columna llena!')
  };

  const closeModal = () => { setModalMessage('') }

  return (
    <main className='text-center w-fit'>
      <h1 className='text-4xl font-bold mb-4'>Conecta 4</h1>
      <div className='flex'>
      <section className='border-2 pt-6 pb-4 px-4 bg-gray-800'>
      <div className='grid grid-cols-7 grid-rows-6 gap-2'>
        {
          board.map((_,index) => {
            if (index < 7) {
              return (
                <SelectColumn key={index} updateBoard={updateBoard} index={index}></SelectColumn>
              )
            }
            return(
              <Square key={index} index={index}>{board[index]}</Square>
            )
          })
        }

      </div>
      </section>
      <section className='ml-10 w-40 flex flex-col justify-center items-center bg-gray-900'>
        <Square isSelected={turn === TURNS.Player1}>{TURNS.Player1}</Square>
        <div className='py-4 border-2 border-slate-800'></div>
        <Square isSelected={turn === TURNS.Player2}>{TURNS.Player2}</Square>
        <button 
          onClick={reseteGame}
          className='p-2 my-8 bg-transparent border-2 rounded-2xl border-gray-200 text-gray-200 w-40 font-semibold transition duration-200 cursor-pointer'>
          Reiniciar
        </button>
        <Modals message={modalMessage} onClose={closeModal} />
      </section>
      </div>
      
      
    </main>
  )
}

export default App
