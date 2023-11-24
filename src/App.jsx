import './styling/App.css'
import Board from './components/Board'


function App() {

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>TIC-TAC-TOE</h1>
        </div>
        <div className='gameBoard'>
          <Board/>
        </div>
         
      </div>
      
    </>
  )
}

export default App
