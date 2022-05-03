import React, { Component } from 'react';

const MyButton = React.forwardRef((props, ref) => (
  <button ref={ref} >
    {props.children || '普通按钮' }
  </button>
));

class ForwardRef extends Component {
  constructor(props) {
    super(props);
    // 你可以直接获取 DOM button 的 ref：
    this.ref = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.ref.current.innerText = "Refs 转发";
    }, 2000);
    console.log(this.ref.current);
  }

  clickMyBtn = () => {
    console.log(this.ref.current);
    this.ref.current.innerText = "点击了" + new Date();
  }

  render() {
    return (
      <div>
        <MyButton ref={this.ref} />
        <div onClick={this.clickMyBtn}>Click me!</div>
      </div>
    );
  }
}

export default ForwardRef;

/* 
 1.我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量
 2.我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>。
 3.React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数
 4.我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
 5.当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。
 注意
    第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。
    常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。
    Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。
*/