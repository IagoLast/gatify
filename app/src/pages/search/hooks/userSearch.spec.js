import { renderHook } from '@testing-library/react-hooks'
import useSearch from './useSearch';
import filterService from '../services/filter.service';
import apiService from 'services/api.service';


describe('useSearch', () => {
    it('..', async () => {
        const dummyHistory = {};
        const dummyLocationSearch = '';
        jest.spyOn(apiService, 'fetch').mockResolvedValueOnce(['dummy_item']);

        const { result, waitForNextUpdate } = renderHook(() => useSearch(dummyHistory, dummyLocationSearch));

        expect(result.current.state.isLoading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.state.items).toEqual(['dummy_item']);
        expect(result.current.state.isLoading).toBeFalsy();
        expect(false).toEqual(true);
    });
});