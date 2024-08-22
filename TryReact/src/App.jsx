import { useState } from 'react'
import { Counter } from './BygEnTæller/counter';
import  Hilsen  from './Hilsen/Hilsen';
import ToDo from './ToDoApp/ToDo';
import './App.css'

function App() {
  
  const [Count, setCount] = useState(0);
  const handleClick = () => {
    setCount(Count + 1); 
  };

  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value); 
  };


  
  return (
    <>
    <main>
       <Counter handleClick={handleClick} Count={Count} />
      <Hilsen handleChange={handleChange} text={text} /> 
      <ToDo />
      </main>
    </>
  )
}

export default App
