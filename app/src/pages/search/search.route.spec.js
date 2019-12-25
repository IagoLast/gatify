import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SearchRoute from './search.route';
import apiService from 'services/api.service';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from 'context/auth/auth.context';



describe('<SearchRoute/>', () => {
    let dummyLocation, wrapper, dummyAuthContext;
    beforeEach(() => {
        dummyLocation = { search: '' };
        dummyAuthContext = {
            user: 'dummy_user',
            signIn: jest.fn(),
            signOut: jest.fn(),
            isLoggedIn: jest.fn(),
            isLoading: jest.fn(),
            deleteAccount: jest.fn(),
        }
    });

    describe('when is fetching items', () => {
        beforeEach(async () => {
            apiService.fetch = jest.fn().mockReturnValue(new Promise(jest.fn())); // Keep response pending
            await act(async () => {
                wrapper = render(
                    <AuthContext.Provider value={dummyAuthContext}>
                        <Router>
                            <SearchRoute location={dummyLocation} />
                        </Router>
                    </AuthContext.Provider>
                );
            })
        });

        it('should display a loading spinner by default', () => {
            expect(wrapper.container.querySelector('main.LoadingScreen')).toBeVisible();
        });

        it('should not display any results', () => {
            expect(wrapper.container.querySelector('main.Search')).toBeNull();
        });
    });

    describe('when it has 2 items', () => {
        beforeEach(async () => {
            apiService.fetch = jest.fn().mockResolvedValue([{ id: 0, images: ['image_0'] }, { id: 1, images: ['image_1'] }]);
            await act(async () => {
                wrapper = wrapper = render(
                    <AuthContext.Provider value={dummyAuthContext}>
                        <Router>
                            <SearchRoute location={dummyLocation} />
                        </Router>
                    </AuthContext.Provider>
                );
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

        it('should display a list of 2 Items', () => {
            expect(wrapper.container.querySelectorAll('.Item').length).toBe(2);
        });

        it('should show the drawer when the filters button is clicked', async () => {
            act(() => {
                fireEvent.click(wrapper.getByTitle('Filtrar'));
            });
            expect(wrapper.container.querySelector('.Drawer.visible')).toBeVisible();
        });

        it('should redirect to /details/<id> when an item is clicked', async () => {
            const dummyHistory = { push: jest.fn() };
            apiService.fetch = jest.fn().mockResolvedValue([{ id: 0, images: ['image_0'] }, { id: 1, images: ['image_1'] }]);
            await act(async () => {
                wrapper = render(
                    <AuthContext.Provider value={dummyAuthContext}>
                        <Router>
                            <SearchRoute history={dummyHistory} location={dummyLocation} />
                        </Router>
                    </AuthContext.Provider>
                );
            });
            expect(dummyHistory.push).not.toHaveBeenCalled();
            fireEvent.click(wrapper.container.querySelector('.Item__Inner'));
            expect(dummyHistory.push).toHaveBeenCalledWith('/details/0');
        });

    });

    describe('when there are no items', () => {
        beforeEach(async () => {
            apiService.fetch = jest.fn().mockResolvedValue([]);
            await act(async () => {
                wrapper = wrapper = render(
                    <AuthContext.Provider value={dummyAuthContext}>
                        <Router>
                            <SearchRoute location={dummyLocation} />
                        </Router>
                    </AuthContext.Provider>
                );
            })
        });

        it('should display a no items found message', () => {
            expect(wrapper.getByText('No se han encontrado resultados')).toBeVisible();
        });
    });
});