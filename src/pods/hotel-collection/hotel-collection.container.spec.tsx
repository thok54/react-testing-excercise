import * as React from "react";
import { render, waitForElement } from "@testing-library/react";
import { HotelCollectionContainer } from "./hotel-collection.container";
import * as hook from "./hotel-collection.hook";

describe("HotelCollectionContainer ContainerHotelCollectionContainer specs", () => {
  it("should render the hotel with name when given prop hotel with name", async () => {
    // Arrange
    const hotelCollection = [
      {
        id: "idTest",
        picture: "pictureTest",
        name: "nameTest",
        description: "descriptionTest",
        rating: 1,
        address: "adressTest"
      }
    ];

    const result = {
      hotelCollection,
      loadHotelCollection: jest.fn()
    };

    const getStub = jest
      .spyOn(hook, "useHotelCollection")
      .mockReturnValue(result);

    // Act
    const { getByText } = render(<HotelCollectionContainer />);
    const element = await waitForElement(() => getByText("nameTest"));

    // Assert
    expect(getStub).toHaveBeenCalled();
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.hasAttribute(`name`)).toBeTruthy;
    expect(element.textContent).toEqual("nameTest");
  });
});
