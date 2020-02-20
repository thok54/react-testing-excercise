import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';

describe('HotelCollectionComponent component specs', () => {
  it('should render the hotel when given prop', () => {
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
    const {getByText, queryByText} = render(
      <HotelCollectionComponent hotelCollection={hotelCollection} />
    );

    // Assert
    //******************HOW TO GET ITS TEXT********************************** */
    const element = queryByText('HotelCard');
    //expect(element).not.toBeNull();
    //expect(element.tagName).toEqual('div');
  });
});
