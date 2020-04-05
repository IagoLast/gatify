import React from 'react';
import IndexRoute from './index.route';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    useHistory: () => ({ push: mockHistoryPush }),
}));

describe('<IndexRoute/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<IndexRoute />, { wrapper: MemoryRouter });
    });

    it('should have the search button disabled by default', () => {
        const $searchButton = wrapper.queryByTestId('btn-search');
        expect($searchButton).toBeDisabled();
    });

    it('should enable the search button when a province is selected', () => {
        const $provinceSelect = wrapper.getByDisplayValue('Provincia');
        const $searchButton = wrapper.queryByTestId('btn-search');

        fireEvent.change($provinceSelect, { target: { value: "08" } });

        expect($searchButton).toBeEnabled();
    });

    it('should enable the search button when a province and a municipe are selected', () => {
        const $provinceSelect = wrapper.getByDisplayValue('Provincia');
        const $municipeSelect = wrapper.getByDisplayValue('Municipio');
        const $searchButton = wrapper.queryByTestId('btn-search');

        fireEvent.change($provinceSelect, { target: { value: "08" } });
        fireEvent.change($municipeSelect, { target: { value: "08019" } });

        expect($searchButton).toBeEnabled();
    });

    it('should redirect the user to <NewRoute/> when the publish add button is clicked', () => {
        const $newAddButton = wrapper.getByText('Publica tu anuncio gratis');
        fireEvent.click($newAddButton);

        expect(mockHistoryPush).toHaveBeenCalledWith('/new');
    });
});