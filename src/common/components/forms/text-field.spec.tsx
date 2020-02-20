import * as React from 'react';
import { render, queryByText } from '@testing-library/react';
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
    //******************HOW TO CALL IT********************************** */
    const { getByText, queryByText } = render(<TextField {...props} />);


    // Assert
    //******************HOW TO GET ITS TEXT********************************** */
    const element = queryByText('John');
    //expect(element).not.toBeNull();
    //expect(element.tagName).toEqual('TextFieldMui');
  });
});
