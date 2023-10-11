import React, { useEffect, useState } from 'react'
import './cart.scss'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem} from '../../feature/Cart/cartSlice';

function SingleProduct({ item, decreaseItem, increaseItem }) {

    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        const fun = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/icecream/ice/${item.icecream._id}`);
                setProduct(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fun();
    })

    const handleIncrease = async (prop) => {
        increaseItem(prop);
        dispatch(increase(prop));
    }
    
    const handleDeacrease = async (prop) => {
        decreaseItem(prop);
        if (item.quantity === 1)
            dispatch(removeItem(prop));
        else
            dispatch(decrease(prop));
    }

    return (

        <div className="item">
            <div className="det">
                <img src={product.image} alt="" />
                <div className="details">
                    <h1>{product.name}</h1>
                    <div className="price">
                        Quantity : {item.quantity}
                    </div>
                    <div className="price">
                        ${product.price}
                    </div>
                </div>
            </div>
            <div className='but'>
                <div className='button' onClick={() => handleIncrease(product._id)}>+</div>
                <div className='button' onClick={() => handleDeacrease(product._id)}>-</div>
            </div>
        </div>
    )
}

export default SingleProduct


