import React, {Component} from 'react';

class AvailableItems extends Component {

    /**
     * constructor
     * @param {object} props - object passed from parent
     */
    constructor(props) {
        super(props);
        this.addToCart = this
            .addToCart
            .bind(this);
    }

    /**
     * Event called on button click
     */
    addToCart() {
        this
            .props
            .addToCart(this.props.item);
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
                    <button className="btn btn-primary" onClick={this.addToCart}>Add To Cart</button>
                </td>
            </tr>
        );
    }
}

export default AvailableItems;