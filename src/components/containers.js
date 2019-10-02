/**
 * Created by User on 19.08.2019.
 */
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import ProductList from './ui/ProductList';

//Redux state mapping
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
//mapping the dispatch of our actions creator to component properties
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export const Products = connect(mapStateToProps, mapDispatchToProps)(ProductList);
