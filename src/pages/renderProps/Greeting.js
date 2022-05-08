import React from 'react'

const GreetingRender = props => (
  <div>
    <h1>{props.text}</h1>
    <p>{props.emoji}</p>
  </div>
);

const sumOf = (array, done) => {
  const sum = array.reduce((prev, current) => {
    prev += current;
    return prev;
  }, 0);
  done(sum);
}

function Greeting() {
  return (
    <div>
      <h4>Greeting</h4>
      {/* <GreetingRender text="Hello world" /> */}
      {/*  how to use */}
      {/* <GreetingRender text="Hello 🌰！" emoji="😳" />
       */}
      <p>对数组求和并打印它。但是如果需要把 sum 通过 alert 显示出来</p>
      {sumOf([1, 2, 3], sum => {
        console.log(sum);
        // or
        alert(sum);
      })}
    </div>
  );
}
export default Greeting;