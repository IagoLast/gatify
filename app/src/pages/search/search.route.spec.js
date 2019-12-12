import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SearchRoute from './search.route';
import apiService from 'services/api.service';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('hooks/useAuth', () => {
    return () => [{}, jest.fn(), jest.fn(), jest.fn().mockReturnValue(true), jest.fn().mockReturnValue(false), jest.fn()];
});

describe('<SearchRoute/>', () => {
    let dummyLocation, wrapper;
    beforeEach(() => {
        dummyLocation = { search: '' };
    });

    describe('when is fetching items', () => {
        beforeEach(async () => {
            apiService.fetch = jest.fn().mockReturnValue(new Promise(jest.fn())); // Keep response pending
            await act(async () => {
                wrapper = render(<Router> <SearchRoute location={dummyLocation} /></Router>);
            })
        });

        it('should display a loading spinner by default', () => {
            expect(wrapper.container.querySelector('main.LoadingScreen')).toBeVisible();
        });

        it('should not display any results', () => {
            expect(wrapper.container.querySelector('main.Search')).toBeNull();
        });
    });

    describe('when it has items', () => {
        beforeEach(async () => {
            apiService.fetch = jest.fn().mockResolvedValue([{ id: 0, images: ['image_0'] }]);
            await act(async () => {
                wrapper = render(<Router> <SearchRoute location={dummyLocation} /></Router>);
            })
        });

        it('should not display the loader spinner', () => {
            expect(wrapper.container.querySelector('main.LoadingScreen')).toBeNull();
        });

        it('should display the results', () => {
            expect(wrapper.container.querySelector('main.Search')).toBeVisible();
        });

        it('should not display the drawe by default', () => {
            expect(wrapper.container.querySelector('.Drawer.visible')).toBeNull();
        });

        it('should show the drawer when the filters button is clicked', async () => {
            act(() => {
                fireEvent.click(wrapper.getByTitle('Filtrar'));
            });
            expect(wrapper.container.querySelector('.Drawer.visible')).toBeVisible();
        });

    })
});