import React from 'react';
import CustomTextInput from './CustomTextInput';
import AutoFocusTextInput from './AutoFocusTextInput';
import TextInputFunc from './TextInputFunc';
import CallBackRefs from './CallBackRefs';
import TransferRefs from './TransferRefs';
import ForwardRef from './ForwardRef';

const RefsDemo = () => {
  return (
    <div>
      <CustomTextInput />
      <p>
        如果我们想包装上面的 CustomTextInput，来模拟它挂载之后立即被点击的操作，
      </p>
      <p>
        我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 focusTextInput 方法：
      </p>
      <AutoFocusTextInput />
      <div>不管怎样，你可以在函数组件内部使用 ref 属性，只要它指向一个 DOM 元素或 class 组件：</div>
      <TextInputFunc />
      <p>使用 ref 回调函数，在实例的属性中存储对 DOM 节点的引用。</p>
      <CallBackRefs />

      <p>在组件间传递回调形式的 refs，就像你可以传递通过 React.createRef() 创建的对象 refs 一样。</p>
      <TransferRefs />
      <p>将 refs自动地通过组件传递到其一子组件的技巧</p>
      <ForwardRef />
      
    </div>
  );
}

export default RefsDemo;
