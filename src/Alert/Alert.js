import React, { useContext } from 'react';
import {
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Color from 'color';
import { ThemeContext } from '../theme';

const CLOSE_IMG = require('../assets/images/cancel.png');

const propTypes = {
  /**
   * Title to be displayed in Alert
   */
  title: PropTypes.string,
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
   * Renders a properly aligned dismiss button, as well as
   * adding extra horizontal padding to the Alert.
   */
  dismissible: PropTypes.bool,
  /**
   * Callback fired when alert is closed.
   */
  onClose: PropTypes.func,
  /**
   * Style for the container which host the text message
   */
  containerStyle: ViewPropTypes.style,
  /**
   * Text style for title
   */
  titleStyle: Text.propTypes.style,
  /**
   * Text style for message
   */
  messageStyle: Text.propTypes.style,
};

const defaultProps = {
  variant: 'primary',
  containerStyle: {},
  messageStyle: {},
  titleStyle: {},
  title: null,
  dismissible: false,
  onClose: () => {},
};

// Constants
const BACKGROUND_FACOTR = 0.8;
const BORDER_FACTOR = 0.72;
const TEXT_FACTOR = 0.48;
const WHITE_COLOR = Color('white');
const BLACK_COLOR = Color('black');

const Alert = ({
  title,
  message,
  variant,
  dismissible,
  onClose,
  containerStyle,
  titleStyle,
  messageStyle,
}) => {
  const { theme } = useContext(ThemeContext);
  const color = Color(theme.colors[variant] || theme.colors.primary);

  const backgroundColor = color.mix(WHITE_COLOR, BACKGROUND_FACOTR);
  const borderColor = color.mix(WHITE_COLOR, BORDER_FACTOR);
  const textColor = color.mix(BLACK_COLOR, TEXT_FACTOR);

  const combinedContainerStyle = [
    styles.container(backgroundColor, borderColor, theme),
    dismissible ? styles.row : null,
    containerStyle,
  ];

  const combinedTitleStyle = [styles.title(textColor, theme), titleStyle];

  const combinedMessageStyle = [styles.message(textColor), messageStyle];

  return (
    <View accessible accessibilityRole="alert" style={combinedContainerStyle}>
      <View style={dismissible ? styles.spread : null}>
        {title && <Text style={combinedTitleStyle}>{title}</Text>}
        <Text style={combinedMessageStyle}>{message}</Text>
      </View>
      {dismissible && (
        <TouchableOpacity onPress={onClose}>
          <Image source={CLOSE_IMG} style={styles.image(textColor, theme)} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  spread: {
    flex: 1,
  },
  container: (backgroundColor, borderColor, theme) => ({
    backgroundColor,
    borderColor,
    borderWidth: theme.dimensions.borderWidth,
    borderRadius: theme.dimensions.borderRadius,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
  }),
  title: (color, theme) => ({
    color,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
  }),
  message: color => ({
    color,
  }),
  image: (color, theme) => ({
    width: theme.dimensions.alertIconSize,
    height: theme.dimensions.alertIconSize,
    tintColor: color,
  }),
});

Alert.propTypes = propTypes;

Alert.defaultProps = defaultProps;

export default Alert;
