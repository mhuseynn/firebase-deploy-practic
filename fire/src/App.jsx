import { useState } from 'react'
import mylogo from "./assets/image1.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={mylogo} className="logo"/>
      </div>
      <h1>Huseyn Mehdiyev</h1>
      <p className="read-the-docs"><div id="root">
      
      </div>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
