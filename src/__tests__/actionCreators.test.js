import  * as actions  from '../actions/items'

describe('actions', () => {
    it('should create an action to set itemsHasErrored', () => {
        const expectedAction = {
            type: 'ITEMS_HAS_ERRORED',
            hasErrored: false
        };
        expect(actions.itemsHasErrored(false)).toEqual(expectedAction)
    })

    it('should create an action to set itemsIsLoading', () => {
        const expectedAction = {
            type: 'ITEMS_IS_LOADING',
            isLoading: true
        };
        expect(actions.itemsIsLoading(true)).toEqual(expectedAction)
    })
});