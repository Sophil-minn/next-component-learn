import React, { Component } from 'react';
import withUserData from './withUserData';

class UserView3 extends Component {
  render() {
      let { userInfo } = this.props;
      return (
        <div>
          <h1>相似3: {userInfo.name}</h1>
          <p>相似3描述： {userInfo.description}</p>
        </div>
      )
  }
}
const UserHoc3 = withUserData(UserView3);
export default UserHoc3;