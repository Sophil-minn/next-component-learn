
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom'

// These two containers are siblings in the DOM
const appRootEl = document.getElementById('app-root');
const modalRootEl = document.getElementById('modal-root');

// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
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
    // Use a portal to render the children into the element
    return createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      appRootEl,
    );
  }
}

class Modal2 extends PureComponent {
  constructor(props) {
    super(props)
    const doc = window.document
    console.log('window.document', window.document)
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node)
  }
  render() {
      //  React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
    return createPortal(
      <div className="mask">
        <div className="modal">
          <h3>Modal</h3>
          {this.props.children}
        </div>
      </div>,
      this.node
    )
  }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
        <Modal2 />
      </div>
    );
  }
}



export default Portal;