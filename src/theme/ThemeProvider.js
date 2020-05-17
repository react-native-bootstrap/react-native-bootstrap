import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deepmerge from 'deepmerge';
import ThemeContext from './ThemeContext';
import baseTheme from './theme';

const ThemeProvider = ({ theme: initalTheme, children }) => {
  const [theme, replaceTheme] = useState(deepmerge(baseTheme, initalTheme));

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
    colors: PropTypes.shape({
      primary: ColorType,
      secondary: ColorType,
      success: ColorType,
      info: ColorType,
      warning: ColorType,
      danger: ColorType,
      light: ColorType,
      dark: ColorType,
    }),
    spacing: PropTypes.shape({
      tiny: PropTypes.number,
      small: PropTypes.number,
      medium: PropTypes.number,
      large: PropTypes.number,
    }),
    dimensions: PropTypes.shape({
      borderRadius: PropTypes.number,
      borderWidth: PropTypes.number,
      alertIconSize: PropTypes.number,
    }),
  }),
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
export { ThemeContext };
