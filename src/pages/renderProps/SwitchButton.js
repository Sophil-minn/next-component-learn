import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.initialState || false,
    };
  }
  toggle = () => {
    console.log(this.state.on, 'this.state.on');
    this.setState({
      on: !this.state.on,
    });
  }
  render() {
    return (
      <div>{this.props.children({
        on: this.state.on,
        toggle: this.toggle,
      })}</div>
    );
  }
}

class Modal extends Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRootEl.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modalRootEl.removeChild(this.el);
  }

  render() {
    console.log(this.props.visible, 'this.props.on');
    // Use a portal to render the children into the element
    return this.props.visible ? createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    ) : null;
  }
}
// how to use
const SwitchButton = () => {
  return (
    <div>
      <Switch initialState={true}>{({ on, toggle }) => (
        <>
          <button onClick={toggle}>Show Modal</button>
          {on}
          <Modal visible={on} onSure={toggle}>
            <div className="modal">
              <div>
                With a portal, we can render content into a different
                part of the DOM, as if it were any other React child.
              </div>
              This is being rendered inside the #modal-container div.
              <button onClick={toggle}>Hide modal</button>
            </div>
          </Modal>
        </>)
      }
      </Switch>

    </div>
  )
}


export default SwitchButton;