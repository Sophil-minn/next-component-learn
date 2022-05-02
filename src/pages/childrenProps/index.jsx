import React from 'react'


function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
      {props.children}
    </FancyBorder>
  );
}

function Contacts() {
  return <div className="Contacts">Contacts</div>;
}

function Chat() {
  return <div className="Chat">Chat</div>;
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}


// 少数情况下，你可能需要在一个组件中预留出几个“洞”。这种情况下，我们可以不使用 children，
// 而是自行约定：将所需内容传入 props，并使用相应的 prop

//  有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）
// 和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况
export default function ChildrenProps() {
  return (
    <div>
      <WelcomeDialog>WelcomeDialog-children</WelcomeDialog>
      <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
      <SignUpDialog />
    </div>
    
  )
}


