import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((sum, course) => sum + course.price , 0)
    return (
        <div>
            <h1>Coursed Enrolled {cart.length}</h1>
    <h4>Total Price= {total}</h4>
        </div>
    );
};

export default Cart;