import React from 'react';
import CustomTextInput from './CustomTextInput';
import AutoFocusTextInput from './AutoFocusTextInput';
import TextInputFunc from './TextInputFunc';

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
      
    </div>
  );
}

export default RefsDemo;
