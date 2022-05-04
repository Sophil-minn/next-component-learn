import React, { Component } from 'react';

class UserView extends Component {
  constructor(props) {
    super(props)
    this.state = { userInfo: {} }

  }
  componentDidMount() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"))
      this.setState({ userInfo })
  }

  // 获取 userInfo的逻辑要在好多地方使用
  // 在使用的地方都需要重写 constructor componentDidMount ,显然这是冗余操作
  // 这个时候需要代码 重用,所以可以选择高阶组件
  render() {
      let { userInfo } = this.state
      return (
        <div>
          <h1>{userInfo.name}</h1>
          <p>{userInfo.description}</p>
        </div>
      )
  }
}

export default UserView;