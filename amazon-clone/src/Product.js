import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, price, rating, image}){
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        });
    }

    return (
        <div className="product">
            <div className="product_info">
                {/* title */}
                <p>{title}</p>

                {/* price */}
                <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                {/* rating */}
                <div className="product_rating">
                    {Array(rating).fill().map((_, id) => (
                        <p>🌟</p>
                    ))}
                </div>

            </div>

            {/* product image */}
            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;