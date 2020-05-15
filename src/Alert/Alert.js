import React, { useContext } from 'react'
import { ViewPropTypes, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Color from 'color';
import { ThemeContext } from '../theme';

const propTypes = {
  /**
   * Message to be displayed in Alert
   */
  message: PropTypes.string.isRequired,
  /**
   * The Alert visual variant
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  /**
   * Style for the container which host the text message
   */
  containerStyle: ViewPropTypes.style,
  /**
   * Text style for message
   */
  messageStyle: Text.propTypes.style,
};

const defaultProps = {
  variant: 'primary',
  containerStyle: {},
  messageStyle: {},
}

const Alert = ({
  variant,
  message,
  containerStyle,
  messageStyle,
}) => {
  const { theme } = useContext(ThemeContext);
  const color = Color(theme.colors[variant]);

  return (
    <View style={[styles.container(color), containerStyle]}>
      <Text style={[styles.message(color), messageStyle]}>{message}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color.mix(Color('white'), 0.8),
    borderColor: color.mix(Color('white'), 0.72),
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
  }),
  message: color => ({
    color: color.mix(Color('black'), 0.48),
  }),
});

Alert.propTypes = propTypes;

Alert.defaultProps = defaultProps;

export default Alert;
