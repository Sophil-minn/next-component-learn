import React from 'react';

export default function withUserData(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { userInfo: {} }
    }
    componentDidMount() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"))
      this.setState({ userInfo })
    }
    render() {
      // ...this.props 传递给当前组件的属性继续向下传递
      return <WrappedComponent userInfo={this.state.userInfo} {...this.props} />
    }
  }
}