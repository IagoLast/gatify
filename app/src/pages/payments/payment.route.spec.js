import React from 'react';
import PaymentRoute from './payment.route';
import { render, fireEvent, act } from '@testing-library/react';

describe('<PaymentRoute/>', () => {
    let wrapper, dummyLocation;

    describe('when it has the ok parameter', () => {
        beforeEach(async () => {
            dummyLocation = { search: '?status=success' };
            await act(async () => {
                wrapper = render(<PaymentRoute location={dummyLocation} />);
            });
        });

        it('should notify the user about the sucessfull payment', () => {
            expect(wrapper.queryByText('Pago realizado con éxito')).toBeVisible();
        });
    });

    describe('when it has the ok parameter', () => {
        beforeEach(async () => {
            dummyLocation = { search: '&status=error' };
            await act(async () => {
                wrapper = render(<PaymentRoute location={dummyLocation} />);
            });
        });

        it('should notify the user about the failed payment', () => {
            expect(wrapper.queryByText('El pago ha fallado')).toBeVisible();
        });
    });
});