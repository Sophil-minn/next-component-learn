import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';

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

export default Modal2;