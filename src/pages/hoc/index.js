import React from 'react';
import UserView from './UserView';
import UserHoc from './UserView2';
import UserHoc3 from './UserView3';
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter';
import WithCounterClick from './WithCounterClick';
import WithCounterHover from './WithCounterHover';


localStorage.setItem("userInfo", JSON.stringify({ name: "minn", description: "生活如此多娇" }))

const HocDemo = () => {
  return (
    <div>
      <UserView />
      <UserHoc />
      <UserHoc3 />
      <ClickCounter />
      <HoverCounter />
      <p>WithCounterClick</p>
      <WithCounterClick name="WithCounterClick" />
      <p>WithCounterHover</p>
      <WithCounterHover />
    </div>
  );
}

export default HocDemo;
