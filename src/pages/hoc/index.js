import React from 'react';
import UserView from './UserView';
import UserHoc from './UserView2';
import UserHoc3 from './UserView3';


localStorage.setItem("userInfo", JSON.stringify({ name: "minn", description: "生活如此多娇" }))

const HocDemo = () => {
  return (
    <div>
      <UserView />
      <UserHoc />
      <UserHoc3 />
    </div>
  );
}

export default HocDemo;
