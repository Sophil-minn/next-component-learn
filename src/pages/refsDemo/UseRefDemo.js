import React, { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';

const TestRef = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    open() {
      console.log("open", props.children)
    },
    close() {
      console.log('closeclose');
    },
    getData() {
      return 1111;
    }
  }))

  return (
    <button ref={ref} name="testName">
      {props.children || 'TestRef普通按钮' }
    </button>
  );
})


function UseRefDemo() {
  const inputEl = useRef(null);
  const ref = useRef();
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };

  useEffect(() => {
    ref.current.open();
    ref.current.close();
    const data = ref.current.getData();
    console.log(data, 'data');
  },[])

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <TestRef ref={ref}>useImperativeHandle</TestRef>
    </>
  );
}

export default  UseRefDemo;