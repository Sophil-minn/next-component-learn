import React, { Component } from 'react';
import withUserData from './withUserData';

class UserView2 extends Component {
  render() {
      let { userInfo } = this.props;
      return (
        <div>
          <h1>{userInfo.name}</h1>
          <p>{userInfo.description}</p>
        </div>
      )
  }
}
const UserHoc = withUserData(UserView2);
export default UserHoc;