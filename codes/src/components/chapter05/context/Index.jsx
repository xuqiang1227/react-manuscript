import React, {PureComponent} from 'react';
import ThemeContext from './ThemeContext';
import ThemeButton from './ThemedButton';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {theme: 'dark'};
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ThemeButton>
          <div onClick={() => {
            this.setState({theme: this.state.theme === 'dark' ? 'light' : 'dark'})
          }}>Themed Button</div>
        </ThemeButton>
      </ThemeContext.Provider>
    );
  }
}