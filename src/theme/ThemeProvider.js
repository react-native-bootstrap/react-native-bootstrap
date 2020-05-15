import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deepmerge from 'deepmerge';

import colors from './colors';

const ThemeContext = React.createContext({
  theme: {
    colors,
  }
});

const ThemeProvider = ({ theme: initalTheme, children }) => {
  const [theme, replaceTheme] = useState(deepmerge({ colors }, initalTheme));

  return (
    <ThemeContext.Provider value={{ theme, replaceTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO: Replace it with correct type for colors value
const ColorType = PropTypes.string;

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    primary: ColorType,
    secondary: ColorType,
    success: ColorType,
    info: ColorType,
    warning: ColorType,
    danger: ColorType,
    light: ColorType,
    dark: ColorType,
  }),
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
export { ThemeContext };