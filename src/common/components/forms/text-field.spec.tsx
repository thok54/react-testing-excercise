import * as React from "react";
import { render, fireEvent, getByText, queryByText } from "@testing-library/react";
import { TextField } from "./text-field";

describe("TextField component specs", () => {
  it("text field should contain the given props", () => {
    // Arrange
    const props = {
      input: {
        name: "John",
        onChange: jest.fn(),
        value: "hello",
        onBlur: jest.fn(),
        onFocus: jest.fn()
      },
      meta: {
        touched: true,
        error: 'Test error',
      },
      "data-testid": "test"
    };

    // Act
    const { getByTestId } = render(<TextField {...props} />);

    const element = getByTestId("test") as HTMLInputElement;
    const errorMessage = getByTestId(props.meta.error);

    // Assert
    expect(errorMessage).toBeInTheDocument();
    expect(element.textContent).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual("");
    expect(element.hasAttribute(`name`)).toBeTruthy;
    expect(element.name).toEqual("John");
  });
});
