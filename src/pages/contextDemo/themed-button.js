import React from 'react';
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.foreground}}
      >{props.children}</button>
    );
  }
}
// ThemedButton.contextType = ThemeContext;

export default ThemedButton;