import { render, act } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import apiService from 'services/api.service';
import DetailsRoute from './details.route';


describe('<DetailsRoute/>', () => {
    let wrapper;

    describe('when is downloading data', () => {
        beforeEach(() => {
            apiService.getByID = jest.fn().mockResolvedValue(null); // Null means promise is still loading
            wrapper = render(<DetailsRoute />, { wrapper: MemoryRouter });
        });

        it('should display a loading spinner', () => {
            expect(wrapper.container.querySelector('.Loader')).toBeVisible();
        });
    });

    describe('when has finished loading', () => {
        beforeEach(async () => {
            apiService.getByID = jest.fn().mockResolvedValue(dummyItem);
            await act(async () => {
                wrapper = render(<DetailsRoute />, { wrapper: MemoryRouter });
            });
        });

        it('should display the item images', () => {
            expect(wrapper.container.querySelectorAll('img').length).toBe(2);
        });

        it('should display the item description', () => {
            expect(wrapper.queryByTestId('text-description')).toHaveTextContent('dummy_description');
        });

        it('should display the item contact', () => {
            expect(wrapper.queryByTestId('link-contact')).toHaveTextContent('dummy_phone');
        });
    });
});


const dummyItem = {
    breed: 'dummy_breed',
    description: 'dummy_description',
    gender: 'dummy_gender',
    highlight: false,
    provincia: 'dummy_provincia',
    title: 'dummy_title',
    images: [
        'dummy_image_0',
        'dummy_image_1',
    ],
    phone: 'dummy_phone',
};