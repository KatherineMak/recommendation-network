import { connect } from 'react-redux';
import { itemsFetchData, productFetchComments, productActiveKey, addComment, userLoggedIn, userLogout } from '../actions/items';
import ProductList from './ui/ProductList';
import ProductComments from './ui/ProductComments';
import AddComment from './ui/AddComment';
import LoginForm from './ui/LoginForm';
import RegisterForm from './ui/RegisterForm';
import Menu from './ui/Menu';

//Redux state mapping
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        commentsHasErrored: state.commentsHasErrored,
        commentsIsLoading: state.commentsIsLoading,
        activeKey: state.activeKey,
        comments: state.comments
    };
};
//mapping the dispatch of our actions creator to component properties
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        fetchComments: (url) => dispatch(productFetchComments(url)),
        setActiveKey: (activeKey) => dispatch(productActiveKey(activeKey))
    };
};
export const Products = connect(mapStateToProps, mapDispatchToProps)(ProductList);
// export const Comments = connect(mapStateToProps, mapDispatchToProps)(ProductComments);
export const Comments = connect(
    (state, {match}) =>
        ({
            commentsHasErrored: state.commentsHasErrored,
            commentsIsLoading: state.commentsIsLoading,
            comments: state.comments
        }),
    dispatch =>
        ({
            //fetchComments: (url) => dispatch(productFetchComments(url)),
        })
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
        }),
    dispatch =>
        ({
        })
)(Menu);

// export const Logout = connect(
//     null,
//     dispatch =>
//         ({
//             logout: () => dispatch(userLogout()),
//         })
// )(LogoutPage);