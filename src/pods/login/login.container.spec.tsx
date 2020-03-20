import { renderHook, act } from "@testing-library/react-hooks";
import { LoginComponent } from './login.component';
import { useHistory } from 'react-router-dom';
import { LoginContainer} from "./login.container";

describe("hook specs", () => {
  it("should return empty collection and a function at first", () => {

    //Arrange

    // Act
    const { result } = renderHook(() => LoginContainer());


    // Assert
    expect(result).toBeInTheDocument();
  });
});
