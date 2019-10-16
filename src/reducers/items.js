export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function commentsIsLoading(state = false, action) {
    switch (action.type) {
        case 'COMMENTS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function commentsHasErrored(state = false, action) {
    switch (action.type) {
        case 'COMMENTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}


export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case 'PRODUCT_COMMENTS_FETCH_SUCCESS':
            return action.comments;
            // return [...state, action.comments];
        case 'ADD_COMMENT' :
            return [
                ...state,
                comment({}, action)
            ]
        default:
            return state;
    }
}

export function comment(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                id: action.id,
                product: action.product,
                text: action.text,
                rate: action.rate,
                created_at: action.timestamp,
                created_by: action.created_by
            }
        default :
            return state
    }
}


export function activeKey(state = null, action) {
    switch (action.type) {
        case 'PRODUCT_ACTIVE_KEY':
            return action.activeKey;

        default:
            return state;
    }
}

export function userStatus(state = {}, action) {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                status: action.status,
                message: action.message,
                token: action.token
            };

        case 'USER_LOGOUT':
            return {
                status: false,
                message: "logout",
                token: ""
            };

        default:
            return state;
    }
}