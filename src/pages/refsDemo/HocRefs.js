import React, { Component } from 'react';

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidMount() {
      console.log('componentDidMount:', );
      console.log('new props:', this.props);
    }
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest}/>;
    }
  }

  function forwardRefMinn(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = Component.displayName || Component.name;
  console.log(name, 'name', Component.displayName, 'Component.displayName', Component.name);
  forwardRefMinn.displayName = `minn(Hui)`;
  console.log(forwardRefMinn.displayName, 'forwardRefMinn.displayName');
  // 使用 React.forwardRef API 明确地将 refs 转发到内部的 FancyButton 组件。
  // React.forwardRef 接受一个渲染函数，其接收 props 和 ref 参数并返回一个 React 节点
  return React.forwardRef(forwardRefMinn);
}


class FancyButton extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  focus = () => {
    this.textInput.current.focus();
  }
  sayHi(){
    alert("Hello React")
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button onClick={this.props.onClick}>FancyButton:{this.props.title}</button>
        <button onClick={this.focus}> 聚焦输入框:{this.props.title}</button>
      </div>
    );
    
  }
}
const NewFancyButton = logProps(FancyButton);

class HocRefs extends Component {
  constructor(){
    super()
    this.state={
      title:"ABC"
    }
    this.fancyButtonRef= React.createRef()
  }
  handleClickFancyButton=()=>{
    this.setState({
      title:123
    })
    //注意：此处打印出来的Ref是logProps组件，而不是我们想要的FancyButton组件
    console.log("this.fancyButtonRef->",this.fancyButtonRef)
  }
  render(){
    return (
      <div>
        {/* refs 将不会透传下去。这是因为 ref 不是 prop 属性。就像 key 一样，其被 React 进行了特殊处理。
        如果你对 HOC 添加 ref，该 ref 将引用最外层的容器组件，而不是被包裹的组件。
        // 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
        // 尽管渲染结果将是一样的，
        // 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
        // 这意味着我们不能调用例如 ref.current.focus() 这样的方法
        */}
        <NewFancyButton 
          title={this.state.title} 
          onClick={this.handleClickFancyButton}
          ref={this.fancyButtonRef}
        />
      </div>
    );
  }
}

export default HocRefs;