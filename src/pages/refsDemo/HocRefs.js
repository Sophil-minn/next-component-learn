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
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
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