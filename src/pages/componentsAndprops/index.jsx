import React from 'react';
import Comment from "./Comment";
import Clock from "./Clock";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}


const ComponentsAndprops = () => {
  return (
    <div>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock />
      <ActionLink />
    </div>
  );
}



export { ComponentsAndprops };