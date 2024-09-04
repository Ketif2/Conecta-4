import React from 'react'

const Modals = ({message, onClose}) => {
    if(!message) return null;
  return (
    <div className='fixed inset-0 grid place-items-center bg-black bg-opacity-70'>
      <div className='bg-gray-900 h-52 w-80 border-2 border-gray-200 rounded-lg flex flex-col justify-center items-center gap-5 p-4'>
        <p className='text-white'>{message}</p>
        <button 
          onClick={onClose}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200'
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default Modals