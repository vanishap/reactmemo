import './App.css';
import { useState } from 'react';
import Todos from './Todos';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos]= useState(['Buy Groceries', 'School pick up']);
  console.log('rendered from app');

  const clickHandler = ()=>{
    setCount(count=>count +1);
  }
  const todoHandler=()=>{
    setTodos((todos)=>[...todos, 'laundry','do dishes']);
  }
  return (
    <div className="App">
      <Todos todos= {todos}/>
      <div>
        Count: {count}
        <button onClick = {clickHandler}>+</button>
        <button onClick={todoHandler}>Add todo</button>
      </div>
      
    </div>
  );
}

export default App;
