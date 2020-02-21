import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from './text-field';
import TextFieldMui from '@material-ui/core/TextField';

describe('TextField component specs', () => {
  it('text field should be initially empty', () => {
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
    const { getByText, getByTestId } = render(<TextField {...props} />);

    const element = getByTestId('nameResult');

    // Assert
    expect(element.textContent).not.toBeNull();
    expect(element.tagName).toEqual('DIV');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual('');
  });

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
    const { getByText, getByTestId } = render(<TextField {...props} />);

    ///////////////////////HOW TO USE getByTestId///////////////////////////////////
    const element = getByTestId('nameResult');

    fireEvent.change(element, { target: { name: 'John' } });

    // Assert
    expect(element.textContent).not.toBeNull();
    expect(element.tagName).toEqual('DIV');
    expect(element).toBeInTheDocument();
    expect(element.name).toEqual('John');
  });
});
