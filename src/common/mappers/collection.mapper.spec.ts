import * as viewModel from '../../pods/hotel-collection/hotel-collection.vm';
import * as mapper from './collection.mapper';

describe('mapper specs', () => {
  it('should return empty array when it feeds undefined', () => {
    // Arrange
    const hotels: viewModel.HotelEntityVm[] = undefined;

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => null
    );

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when it feeds null', () => {
    // Arrange
    const hotels: viewModel.HotelEntityVm[] = null;

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => null
    );

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when it feeds empty array', () => {
    const hotels: viewModel.HotelEntityVm[] = [];

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => null
    );

    // Assert
    expect(result).toEqual([]);
  });

  it('should return array one mapped item when it feed array with one item', () => {
    // Arrange
    const hotel: viewModel.HotelEntityVm = {
      id: 'idTest',
      picture: 'pictureTest',
      name: 'nameTest',
      description: 'descriptionTest',
      rating: 1,
      address: 'adressTest',
    };

    const hotels: viewModel.HotelEntityVm[] = [hotel];

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => hotel
    );

    // Assert
    const expectedResult: viewModel.HotelEntityVm[] = [
      {
        id: 'idTest',
        picture: 'pictureTest',
        name: 'nameTest',
        description: 'descriptionTest',
        rating: 1,
        address: 'adressTest',
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
