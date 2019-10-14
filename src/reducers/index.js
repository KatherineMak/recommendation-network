import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, activeKey, commentsHasErrored, commentsIsLoading, comments, comment, userStatus} from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    commentsHasErrored,
    commentsIsLoading,
    comment,
    comments,
    activeKey,
    userStatus
});
