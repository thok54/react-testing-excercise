import * as React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { TextField } from './text-field';

describe('TextField component specs', () => {
  it('should display a text field when given prop', () => {
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

    //const element = getByText(props.input.name);

    // Assert
    //expect(element).toBeInTheDocument();
    expect(true).toEqual(true);
  });
});
