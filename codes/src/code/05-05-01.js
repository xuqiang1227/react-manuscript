export default `
//index.js
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

//ThemeButton.jsx
import React from 'react';
import ThemeContext, {themes} from './ThemeContext';

export default ({children}) => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <button style={{
            color: themes[theme].foreground,
            backgroundColor: themes[theme].background
          }}>{children}</button>
        )
      }}
    </ThemeContext.Consumer>
  );
}

//ThemeContext.jsx
import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export default React.createContext(
  themes.dark // default value
);
`;