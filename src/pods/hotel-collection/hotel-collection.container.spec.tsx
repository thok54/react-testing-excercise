import * as React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { HotelCollectionContainer } from './hotel-collection.container';
import * as hook from './hotel-collection.hook';

describe('HotelCollectionContainer ContainerHotelCollectionContainer specs', () => {
  it('should render the hotel with name when given prop hotel with name', async () => {
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

    //********************* HOW TO MOCK RESULT ****************************** */
    const getStub = jest
      .spyOn(hook, 'useHotelCollection')
      .mockResolvedValue(hotelCollection);

    // Act
    const { getByText } = render(<HotelCollectionContainer />);

    const element = await waitForElement(() => getByText('nameTest'));

    // Assert
    expect(getStub).toHaveBeenCalled();
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(true).toBeTruthy;
  });
});
