import * as React from 'react';
import { render, queryByText } from '@testing-library/react';
import { TextField } from './text-field';

describe('TextField component specs', () => {
  it('should display a text field with name when given prop with name', () => {
    // Arrange
     //******************HOW TO CREATE PROP********************************** */
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
    
    //******************HOW TO GET ITS TEXT********************************** */
    const element = getByText('John');

    // Assert
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('input');
    expect(element).toBeInTheDocument();
  });
});
