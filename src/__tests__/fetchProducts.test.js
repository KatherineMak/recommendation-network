import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { productFetchComments } from '../actions/items.js'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('creates PRODUCT_COMMENTS_FETCH_SUCCESS when fetching products has been done', () => {
        fetchMock.getOnce('/comments', {
            body: { comments: ['comment1 comment2'] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: 'COMMENTS_IS_LOADING', isLoading: true },
            { type: 'COMMENTS_IS_LOADING', isLoading: false },
            // { type: 'PRODUCT_COMMENTS_FETCH_SUCCESS', comments: ['comment1 comment2'] }
            { type: 'PRODUCT_COMMENTS_FETCH_SUCCESS', comments: { comments: ['comment1 comment2'] } }
        ];
        const store = mockStore({ comments: [] });

        return store.dispatch(productFetchComments('/comments')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});