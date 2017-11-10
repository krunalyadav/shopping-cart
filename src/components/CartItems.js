import React, {Component} from 'react';

class CartItems extends Component {

    /**
     * constructor
     * @param {object} props - object passed from parent
     */
    constructor(props) {
        super(props);
        this.removeFromCart = this
            .removeFromCart
            .bind(this);
    }

    /**
     * Event called on button click
     */
    removeFromCart() {
        this
            .props
            .removeFromCart(this.props.item);
    }

    /**
     * render method of component
     */
    render() {
        return (
            <tr>
                <td className="col-md-4">{this.props.item.name}</td>
                <td className="col-md-4">{this.props.item.price}</td>
                <td className="col-md-4">
                    <button className="btn btn-primary" onClick={this.removeFromCart}>Remove From Cart</button>
                </td>
            </tr>
        );
    }
}

export default CartItems;