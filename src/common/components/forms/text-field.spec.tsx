import * as React from 'react';
import { render } from '@testing-library/react';
import { TextField } from './text-field';

describe('TextField component specs', () => {
  it('should display a text field with name when given prop with name', () => {
    // Arrange
    const props = {
      input: {
        name: 'John',
        onChange: jest.fn(),
        value: 'hello',
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: 'active',
    };

    // Act
    const { getByText } = render(<TextField {...props} />);

    ///////////////////////HOW TO GET ITS TEXT///////////////////////////////////
    const element = getByText(props.input.name);

    // Assert
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
  });
});
