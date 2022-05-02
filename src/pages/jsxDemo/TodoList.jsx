import React from 'react'

function Item(props) {
  return <li>{props.message}</li>;
}

export default function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}

