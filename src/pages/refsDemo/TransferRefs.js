import React, { Component } from 'react';


function CustomTextInput(props) {

  const clickChild = () => {
    console.log(props.inputRef, 'props.inputRef.current');
  }

  return (
    <div>
      <input ref={props.inputRef} />
      <button onClick={clickChild}>ChildButton</button>
    </div>
  );
}

class TransferRefs extends Component {

  clickParent = () => {
    console.log(this.inputElement.value, 'this.inputElement', this.inputElement);
  }

  render() {
    return (
      <div>
        <CustomTextInput
          inputRef={el => this.inputElement = el}
        />
        <button onClick={this.clickParent}>ParentButton</button>
      </div>
    );
  }
}

export default TransferRefs;