import { renderHook, act } from "@testing-library/react-hooks";
import { HotelEntityVm } from "./hotel-collection.vm";
import { useHotelCollection } from "./hotel-collection.hook";
import * as api from './hotel-collection.api';
import { HotelEntityApi } from "./hotel-collection.api";

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
    const hotels: HotelEntityApi[] = [
      {
        id: "idTest",
        thumbNailUrl: 'test-url',
        name: "nameTest",
        address1: "adressTest"
      } as HotelEntityApi
    ];

   
    jest.spyOn(api, 'getHotelCollection').
    mockResolvedValue(hotels);

    // Act
    const { result, waitForValueToChange } = renderHook(() => useHotelCollection());

    act(() => {
      result.current.loadHotelCollection();
    });

    // Assert
    expect(result.current.hotelCollection).toEqual([]);
    expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
  });
});
