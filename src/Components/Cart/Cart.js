import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { name, price } = props.cart
    const cart = props.cart
    const total = cart.reduce((sum, course) => sum + course.price, 0)
    return (
        <div>
            <h4 className="bg-primary">Select Course: {cart.length}</h4>
            <ol>
                {
                    cart.map(course => <li>{course.name} Price: ${course.price}</li>)
                }
            </ol>

            <h5 className="bg-success">Total Price: ${total}</h5>
        </div>
    );
};

export default Cart;