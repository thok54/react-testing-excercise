import { renderHook, act } from "@testing-library/react-hooks";
import { HotelEntityVm } from "./hotel-collection.vm";
import { useHotelCollection } from "./hotel-collection.hook";

describe("hook specs", () => {
  it("should return empty collection and a function at first", () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useHotelCollection());

    // Assert
    expect(result.current.hotelCollection).toEqual([]);
    expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
  });

  it("should be able to act on it", () => {
    // Arrange
    const hotels: HotelEntityVm[] = [
      {
        id: "idTest",
        picture: "pictureTest",
        name: "nameTest",
        description: "descriptionTest",
        rating: 1,
        address: "adressTest"
      }
    ];
    // Act
    const { result } = renderHook(() => useHotelCollection());

    act(() => {
      result.current.loadHotelCollection();
    });

    // Assert
    expect(result.current.hotelCollection).toEqual([]);
    expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
  });
});
