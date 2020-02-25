import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
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
      meta: "",
      "data-testid": "test"
    };

    // Act
    const { getByTestId } = render(<TextField {...props} />);

    const element = getByTestId("test") as HTMLInputElement;

    // Assert
    expect(element.textContent).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual("");
    expect(element.hasAttribute(`name`)).toBeTruthy;
    expect(element.name).toEqual("John");
  });
});
