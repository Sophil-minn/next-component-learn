import React, { Component } from 'react';
import CustomTextInput from './CustomTextInput';

class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props);
    
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  manulFocus = () => {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <div>
        请注意，这仅在 CustomTextInput 声明为 class 时才有效：
        <CustomTextInput ref={this.textInput} />
        <div onClick={this.manulFocus}>click me手动聚焦输入框</div>
      </div>
    );
  }
}
export default AutoFocusTextInput;