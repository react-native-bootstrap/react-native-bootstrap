import React from 'react';
import { render } from 'react-native-testing-library';
import Alert from './Alert';

describe('Alert Component', () => {
  test('should render without error', () => {
    // Setup
    const message = 'This is an Alert';
    const { getByText, getByA11yRole } = render(<Alert message={message} />);

    // Exercise
    const container = getByA11yRole('alert');
    const textElement = getByText(message);

    // Verify
    expect(container).toBeDefined();
    expect(textElement).toBeDefined();
  });
});
