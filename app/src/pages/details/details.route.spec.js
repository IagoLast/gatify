import { act, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import apiService from 'services/api.service';
import DetailsRoute from './details.route';


describe('<DetailsRoute/>', () => {
    let dummyLocation, wrapper, dummyMatch, dummyHistory;
    beforeEach(() => {
        dummyLocation = { search: '' };
        dummyMatch = { params: { id: 'dummy_id' } };
        dummyHistory = { goBack: jest.fn() };
    });

    describe('when is downloading data', () => {
        beforeEach(async () => {
            apiService.getByID = jest.fn().mockReturnValue(new Promise(jest.fn())); // Keep response pending
            await act(async () => {
                wrapper = render(<Router> <DetailsRoute history={dummyHistory} match={dummyMatch} location={dummyLocation} /></Router>);
            })
        });

        it('should display a loading spinner', () => {
            expect(wrapper.container.querySelector('.Loader')).toBeVisible();
        });
    });

    describe('when has finished loading', () => {
        it('should display the item images', () => { });
        it('should display the item description', () => { });
        it('should display the item contact', () => { });
    });
});