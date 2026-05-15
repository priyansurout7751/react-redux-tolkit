import React, { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "./redux/slice";
import { fetchdata } from "./redux/apislice";

function Product() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
    }, [dispatch]);

    const cartItems = useSelector(
        (state) => state.cart.item
    ) || [];

    const products = useSelector(
        (state) => state.productitem.item
    ) || [];

    

    return (
        <div className="main-content">
            {products.map((e) => (
                <div key={e.id} className="card">

                    <img
                        src={e.thumbnail}
                        alt={e.title}
                    />

                    <p>{e.title}</p>
                    <p>{e.brand}</p>
                    <p>{e.price}</p>

                    {Array.isArray(cartItems) &&
                    cartItems.find(
                        (ele) => ele.id === e.id
                    ) ? (
                        <button
                            className="btn"
                            onClick={() =>
                                dispatch(removeItem(e))
                            }
                        >
                            remove from cart
                        </button>
                    ) : (
                        <button
                            className="btn"
                            onClick={() =>
                                dispatch(addItem(e))
                            }
                        >
                            add to cart
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Product;