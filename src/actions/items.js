import { v4 } from 'uuid'

// products loading actions

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

// comments loading actions

export function commentsHasErrored(bool) {
    return {
        type: 'COMMENTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function commentsIsLoading(bool) {
    return {
        type: 'COMMENTS_IS_LOADING',
        isLoading: bool
    };
}

export function productCommentsFetchSuccess(comments) {
    return {
        type: 'PRODUCT_COMMENTS_FETCH_SUCCESS',
        comments
    };
}

export function addComment(text, rate, product_id) {
    return {
        type: 'ADD_COMMENT',
        id: v4(),
        product: product_id,
        text: text,
        rate: rate,
        timestamp: new Date().toISOString().toString(),
        created_by: {
            id: 1,
            username: "user"
        },
    };
}

// id of the selected product

export function productActiveKey(activeKey) {
    return {
        type: 'PRODUCT_ACTIVE_KEY',
        activeKey
    };
}

//id of the selected menu tab

export function menuActiveTab(activeTab) {
    return {
        type: 'MENU_ACTIVE_TAB',
        activeTab
    };
}

// user authorization actions

export function userLoggedIn(status, message, token) {
    return {
        type: 'USER_LOGGED_IN',
        status,
        message,
        token
    };
}

export function userLogout() {
    return {
        type: 'USER_LOGOUT'
    };
}

//creator actions
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items));
                dispatch(productActiveKey(1));
                dispatch(productFetchComments('http://smktesting.herokuapp.com/api/reviews/1?format=json'));
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
//creator actions
export function productFetchComments(url) {
    return (dispatch) => {
        dispatch(commentsIsLoading(true));
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(commentsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((comments) => {
                dispatch(productCommentsFetchSuccess(comments));
            })
            .catch(() => dispatch(commentsHasErrored(true)));
    };
}