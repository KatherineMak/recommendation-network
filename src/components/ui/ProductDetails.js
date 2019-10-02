import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import Whoops404 from './Whoops404'

const ProductDetails = ({ title, img, text, history, location }) =>
    (!product) ?
        <Whoops404 location={location}/> :
        <div
             {/*style={{backgroundColor: color}}*/}
             onClick={() => history.goBack()}>
            <h1>{title}</h1>
            <h1>{text}</h1>
        </div>

ColorDetails.propTypes = {
    title: PropTypes.string.isRequired,
    texts: PropTypes.string.isRequired
}

export default ProductDetails