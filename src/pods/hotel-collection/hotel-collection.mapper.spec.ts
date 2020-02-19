import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';
import * as mapper from './hotel-collection.mapper';
import { basePicturesUrl } from 'core';

describe('pod mapper specs', () => {
  it('should return one HotelEntityVm when given an HotelEntityApi', () => {
    // Arrange
    const hotel: apiModel.HotelEntityApi = {
      id: 'id',
      type: 'string',
      name: 'name',
      created: new Date(1111, 11, 11),
      modified: new Date(1111, 11, 11),
      address1: 'address',
      airportCode: 'string',
      amenityMask: 1,
      city: 'string',
      confidenceRating: 1,
      countryCode: 'string',
      deepLink: 'string',
      highRate: 1,
      hotelId: 1,
      hotelInDestination: false,
      hotelRating: 1,
      location: {
        latitude: 1,
        longitude: 1,
      },
      locationDescription: 'string',
      lowRate: 1,
      metadata: {
        path: 'string',
      },
      postalCode: 1,
      propertyCategory: 1,
      proximityDistance: 1,
      proximityUnit: 'string',
      rateCurrencyCode: 'string',
      shortDescription: 'description',
      stateProvinceCode: 'string',
      thumbNailUrl: 'string',
      tripAdvisorRating: 1,
      tripAdvisorRatingUrl: 'string',
    };

    // Act
    const result: viewModel.HotelEntityVm = mapper.mapFromApiToVm(hotel);

    // Assert
    const expectedResult: viewModel.HotelEntityVm = {
      id: 'id',
      picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
      name: 'name',
      description: 'description',
      rating: 1,
      address: 'address',
    };
    expect(result).toEqual(expectedResult);
  });
});
