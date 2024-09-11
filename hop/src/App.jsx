import React from "react";
import './style/App.css';
import {Navbar} from './components/Navbar.jsx'
import { InfoPatient } from "./pages/InfoPatient.jsx";
import { InfoDoctor } from "./pages/infoDoctor.jsx";
import AOS from 'aos'; // Importer les styles d'animation
AOS.init();
function App() {
  return (
    
    
    <div className="container">
        <div className="logo">
              <p>+</p>
        </div>
        <Navbar/>
        <main>
          <InfoDoctor/>
        </main>
      </div>
  )
}

export default App;







// const taskList = props.tasks.map((task) => (
//   <Todo
//     id={task.id}
//     name={task.name}
//     completed={task.completed}
//     key={task.id}
//   />
// ));            