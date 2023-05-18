import './App.css';
import { useState } from 'react';
import Todos from './Todos';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos]= useState(['Buy Groceries', 'School pick up']);
  console.log('rendered from app');
  return (
    <div className="App">
      <Todos todos= {todos}/>
      <div>
        Count: {count}
        <button onClick = {()=>setCount(count =>count + 1)}>+</button>
      </div>
      
    </div>
  );
}

export default App;
