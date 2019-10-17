import { connect } from 'react-redux';
import {
    itemsFetchData,
    productFetchComments,
    productActiveKey,
    addComment,
    userLoggedIn,
    userLogout,
    menuActiveTab
} from '../actions/items';
import ProductList from './ui/ProductList';
import ProductComments from './ui/ProductComments';
import AddComment from './ui/AddComment';
import LoginForm from './ui/LoginForm';
import RegisterForm from './ui/RegisterForm';
import Menu from './ui/Menu';

export const Products = connect(
    (state, {match}) =>
        ({
            items: state.items,
            hasErrored: state.itemsHasErrored,
            isLoading: state.itemsIsLoading,
            commentsHasErrored: state.commentsHasErrored,
            commentsIsLoading: state.commentsIsLoading,
            activeKey: state.activeKey,
            comments: state.comments
        }),
    dispatch =>
        ({
            fetchData: (url) => dispatch(itemsFetchData(url)),
            fetchComments: (url) => dispatch(productFetchComments(url)),
            setActiveKey: (activeKey) => dispatch(productActiveKey(activeKey))
        })
)(ProductList);

export const Comments = connect(
    (state, {match}) =>
        ({
            commentsHasErrored: state.commentsHasErrored,
            commentsIsLoading: state.commentsIsLoading,
            comments: state.comments
        }),
    null
)(ProductComments);

export const AddCommentForm = connect(
    (state) =>
        ({
            activeKey: state.activeKey,
            userStatus: state.userStatus,
        }),
    dispatch =>
        ({
            addComment: (text, rate, productId) => dispatch(addComment(text, rate, productId)),
        })
)(AddComment);

export const UserLogin = connect(
    (state) =>
        ({
            userStatus: state.userStatus,
        }),
    dispatch =>
        ({
            addUserStatus: (status, message, token) => dispatch(userLoggedIn(status, message, token)),
            logout: () => dispatch(userLogout()),
        })
)(LoginForm);

export const UserRegister = connect(
    (state) =>
        ({
            userStatus: state.userStatus,
        }),
    dispatch =>
        ({
            addUserStatus: (status, message, token) => dispatch(userLoggedIn(status, message, token)),
        })
)(RegisterForm);

export const AppMenu = connect(
    (state) =>
        ({
            userStatus: state.userStatus,
            activeTab: state.activeTab,
        }),
    dispatch =>
        ({
            changeActiveTab: (activeTab) => dispatch(menuActiveTab(activeTab)),
        })
)(Menu);