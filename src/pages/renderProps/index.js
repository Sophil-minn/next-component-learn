import React from 'react';
import MouseTracker from './MouseTracker';
import MouseTracker2 from './MouseTracker2';
import MouseTracker3 from './MouseTracker3';

// 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。
const RenderProps = () => {
  return (
    <div>
      {/* <MouseTracker />
      <h4>MouseTracker2</h4>
      <MouseTracker2 /> */}
      <h4>MouseTracker3</h4>
      <MouseTracker3 />
    </div>
  );
}

export default RenderProps;
