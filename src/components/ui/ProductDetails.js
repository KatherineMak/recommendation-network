import React, { Component }  from 'react';
import PropTypes from 'prop-types'

const ProductDetails = ({ title, img, text, history, location }) =>
        <div
             onClick={() => history.goBack()}>
            <h1>{title}</h1>
            <h1>{text}</h1>
        </div>

ProductDetails.propTypes = {
    title: PropTypes.string.isRequired,
    texts: PropTypes.string.isRequired
}

export default ProductDetails