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