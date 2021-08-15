import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { addItemWithCount } from '../../redux/cart/cart.actions';

import Button from '../../components/button/button.component';

import './item-page.styles.scss';

const ItemPage = ({ match, collection, addItemWithCount, uid, cartItems }) => {
    const [count, setCount] = useState(1);

    //extracting itemID from url
    const itemID = parseInt(match.params.itemID);

    //Find an item in a collection array using itemID
    const product = collection && collection.items.find(item => item.id === itemID);
    const { title, price, type, imgUrl, detail } = product;

    const addToCart = () => {
        addItemWithCount({
            product,
            count: count,
            uid,
            cartItems
        })
    }

    return (
        <div className="item-page" >
            <div className="item-page__left">
                <img src={imgUrl} alt="product-img" className="product__img" />
            </div>
            <div className="item-page__right" >
                <Link to={`/shop/${type}s`} className="router-link">
                    <span className="product__type" >{type}</span>
                </Link>
                <h3 className="product__title">{title}</h3>
                <span className="product__price">$ {price}</span>
                <p className="product__detail">{detail}</p>
                <div className="product__quantity" >
                    <span
                        className="product__btn"
                        onClick={() => {
                            if (count > 1) {
                                setCount(count - 1)
                            }
                        }}
                    >&#8722;</span>
                    <span className="product__count" >{count}</span>
                    <span
                        className="product__btn"
                        onClick={() => setCount(count + 1)}
                    >&#43;</span>
                </div>
                <Button onClick={() => addToCart()} >Add to Cart</Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionID)(state),
    uid: state.user.currentUser && state.user.currentUser.id,
    cartItems: state.cart.cartItems
})

const mapDispatchToProps = (dispatch) => ({
    addItemWithCount: (item) => dispatch(addItemWithCount(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);