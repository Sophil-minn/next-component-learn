import React from 'react'

const Greeting = props => {
  return props.render(props);
};
const GreetingChildren = props => {
  return props.children(props);
};

function GreetingRender() {
  return (
    <div>
      <Greeting
        text="Hello 🌰！"
        emoji="😳"
        link="link here"
        render={(props) => (
          <div>
            <h1>{props.text}</h1>
            <p>{props.emoji}</p>
            <a href={props.link}>link here</a>
          </div>
        )} />
      {/* 把 render 属性名改成 children  */}
      <div>
        并不是只有在 render 属性中传入函数才能叫 Render Props，实际上任何属性只要它的值是函数，
        都可称之为 Render Props，比如上面这个例子把 render 属性名改成 children 的话使用上其实更为简便：
      </div>
      <GreetingChildren text="Hello 🐿️！" emoji="😄" link="link here tooo  ">
        {(props) => (
          <div>
            <h1>{props.text}</h1>
            <p>{props.emoji}</p>
            <a href={props.link}>{props.link}</a>
          </div>
        )}
      </GreetingChildren>

    </div>
  );
}
// how to use




export default GreetingRender;

