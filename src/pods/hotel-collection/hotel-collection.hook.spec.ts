import { renderHook, act } from '@testing-library/react-hooks';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { HotelEntityVm } from './hotel-collection.vm';
import { useHotelCollection } from './hotel-collection.hook';

it('should use hotelCollection', () => {
  // Arrange
  const hotel: HotelEntityVm = {
    id: 'idTest',
    picture: 'pictureTest',
    name: 'nameTest',
    description: 'descriptionTest',
    rating: 1,
    address: 'adressTest',
  };
  // Act
  const { result } = renderHook(() => useHotelCollection());

  act(() => {
    result.current.loadHotelCollection();
  });

  // Assert
  expect(result.current.hotelCollection).toBeTruthy;
  expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
});
