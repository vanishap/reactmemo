import React,{memo} from 'react';

const Todos = ({todos}) => {
  console.log('rendered from todo');
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index)=>{
        return <p key={index}>{todo}</p>
      })}
    </div>
  )
}

export default memo(Todos);

//memo() is a higher order component, re-renders only when there props are updated.
// memo keeps the component needlessly re-rendering.
