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