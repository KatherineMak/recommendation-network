import * as reducers from '../reducers/items'

describe('itemsHasErrored reducer', () => {
    it('should return the initial state', () => {
        expect(reducers.itemsHasErrored(undefined, {})).toEqual(false)
    });

    it('should handle ITEMS_HAS_ERRORED', () => {
        expect(
            reducers.itemsHasErrored(false, {
                type: 'ITEMS_HAS_ERRORED',
                hasErrored: false
            })
        ).toEqual(false)
    })
});