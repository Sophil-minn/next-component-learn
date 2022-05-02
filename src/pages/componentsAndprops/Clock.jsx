import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    console.log('设置一个计时器。');
    //  把计时器的 ID 保存在 this 之中（this.timerID
    //  尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，
    // 但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // 清除计时器：
    console.log('clearInterval(this.timerID);');
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;