import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cartItems from "../../data/shop/shop.json";
import { handleDeleteFromCart } from "../../helper/shopHelper";

class Topcart extends Component {
    render() {
        return (
            <Fragment>
                {cartItems.slice(0, 5).map((item, i) => (
                    <li key={i}>
                        <Link to={"/product-details/" + item.id} className="media p-2">
                            <div className="mr-2 align-self-center hm-cart-img">
                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} className="rounded-circle" />
                            </div>
                            <div className="media-body">
                                <span>{item.title}</span>
                                <span className="hm-cart-price hm-text-primary">${new Intl.NumberFormat().format((item.newPrice * (100 - item.discount) / 100 * item.rating).toFixed(2))}</span>
                                <i className="fas fa-times hm-remove-cart" onClick={handleDeleteFromCart} />
                            </div>
                        </Link>
                    </li>
                ))}
                <li className="px-2 pt-2">
                    <Link to="/cart" className="btn btn-secondary w-100 text-white"> Đến giỏ hàng </Link>
                </li>
            </Fragment>
        );
    }
}

export default Topcart;