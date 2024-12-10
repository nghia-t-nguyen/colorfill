import { useState } from 'react'
import colorfillLogo from './assets/colorfill_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cont--max-width'>
        <img src={colorfillLogo} height='80px' width='480px' />
        <div className='cont--file-drop'>

        </div>
        <button>Color Me!</button>
      </div>
    </>
  )
}

export default App
