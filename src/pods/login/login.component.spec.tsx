import * as React from "react";
import { render } from "@testing-library/react";
import { LoginComponent } from "./login.component";

describe("LoginComponent component specs", () => {
  it("should render the hotel with name when given prop hotel with name", () => {
    // Arrange
    const props = {
      initialLogin: {
        login: "name",
        password: "1234"
      },
      onLogin: jest.fn()
    };

    // Act
    const { getByText } = render(<LoginComponent {...props} />);
    const element = getByText(props.initialLogin.login);

    // Assert
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
  });
});
