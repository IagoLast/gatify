import React from 'react';
import { render } from '@testing-library/react';
import EditRoute from './Edit.route';
import AuthContext from 'context/auth/auth.context';
import { BrowserRouter as Router } from 'react-router-dom';
import apiService from 'services/api.service';


describe('<EditRoute/>', () => {
    let wrapper, dummyAuthContext, dummyMatch, dummyLocation, dummyHistory;
    beforeEach(() => {
        dummyMatch = {
            params: {
                id: 'dummy_id',
            }
        }

        dummyLocation = {
            pathname: 'dummy_path_name',
        }

        dummyHistory = { goBack: jest.fn() };
    })
    describe('when the user is not autenticated', () => {
        beforeEach(() => {
            dummyAuthContext = {
                user: null,
                signIn: jest.fn(),
                signOut: jest.fn(),
                isLoggedIn: jest.fn().mockReturnValue(false),
                isLoading: jest.fn().mockReturnValue(false),
                deleteAccount: jest.fn(),
            }
        });

        it('should redirect to the login page', () => {

            wrapper = render(
                <AuthContext.Provider value={dummyAuthContext}>
                    <Router>
                        <EditRoute location={dummyLocation} match={dummyMatch} />
                    </Router>
                </AuthContext.Provider>
            );

            expect(wrapper.queryByTestId('page-edit')).toBeNull();
        });

        it('should save the redirect route in the localStorage', () => {
            window.localStorage.clear();
            wrapper = render(
                <AuthContext.Provider value={dummyAuthContext}>
                    <Router>
                        <EditRoute location={dummyLocation} match={dummyMatch} />
                    </Router>
                </AuthContext.Provider>
            );

            expect(window.localStorage.getItem('cat_finder_redirect')).toEqual('dummy_path_name');
        });
    });

    describe('when the user is autenticated', () => {
        beforeEach(() => {
            dummyAuthContext = {
                user: 'dummy_user',
                signIn: jest.fn(),
                signOut: jest.fn(),
                isLoggedIn: jest.fn().mockReturnValue(true),
                isLoading: jest.fn().mockReturnValue(true),
                deleteAccount: jest.fn(),
            }
        });

        it('should display a loader when the service is fetching data', () => {
            jest.spyOn(apiService, 'getByID').mockReturnValue(new Promise(jest.fn()));

            wrapper = render(
                <AuthContext.Provider value={dummyAuthContext}>
                    <Router>
                        <EditRoute history={dummyHistory} location={dummyLocation} match={dummyMatch} />
                    </Router>
                </AuthContext.Provider>
            );
            expect(wrapper.queryByText('Cargando')).toBeVisible();
        });

    });
});