import filterService from './filter.service';

describe('filterService', () => {
    describe('getURLParameters(locationSearch)', () => {
        it('should return an object with the parsed elements from the query string', () => {
            const actual = filterService.getURLParameters('?provincia=36&breed=Europeo&gender=0');
            expect(actual).toEqual({
                breed: 'Europeo',
                provincia: '36',
                gender: '0',
            });
        });
    });
});