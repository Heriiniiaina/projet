import { useState } from 'react'
import './App.css'
import CanvasComponent from './CanvasComponent'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <CanvasComponent/>
    <div className="container">
      <div className="choisir">
          <div className="brand">
            <h1>+Symptoscan</h1>
          </div>

          <h2>GET STARTED</h2>
          <p>what is your account type?</p>
          <div className="cards">
            <div class="card">
                <div class="first-content Doc">
                  <span>Doctor</span>
                </div>
                <div class="second-content Doc2">
                  <span>Doctor</span>
                </div>
            </div>

            <div class="card">
                <div class="first-content p1">
                  <span>Patient</span>
                </div>
                <div class="second-content p2">
                  <span>Patient</span>
                </div>
            </div>


          </div>
          <div> <code>@alright reserved</code> </div>
         
        
      </div>
      <div className="carou">
      </div>
    </div>
    </>
  )
}

export default App
