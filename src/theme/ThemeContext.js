import React from 'react';
import theme from './theme';

const ThemeContext = React.createContext({
  /**
   * This will be used when, top level component
   * is not wrapped in ThemeProvider
   */
  theme,
});

export default ThemeContext;
