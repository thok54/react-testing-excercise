import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';

describe('HotelCollectionComponent component specs', () => {
  it('should render the hotel with name when given prop hotel with name', () => {
    // Arrange
    const hotelCollection = [
      {
        id: 'idTest',
        picture: 'pictureTest',
        name: 'nameTest',
        description: 'descriptionTest',
        rating: 1,
        address: 'adressTest',
      },
    ];

    // Act
    const { getByText } = render(
      <HotelCollectionComponent hotelCollection={hotelCollection} />
    );
    const element = getByText('nameTest');

    // Assert
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('SPAN');
    expect(element).toBeInTheDocument();
  });
});
