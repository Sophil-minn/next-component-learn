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
  // 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。
  function handleClick(e) {
    // 在这里，e 是一个合成事件。React 根据 W3C 规范来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题
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