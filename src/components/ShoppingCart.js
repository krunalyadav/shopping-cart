import React, {Component} from 'react';
import axios from 'axios';
import AvailableItems from './AvailableItems';
import CartItems from './CartItems';

class ShoppingCart extends Component {

    /**
     * constructor
     * @param {object} props - props object passed from parent
     */
    constructor(props) {
        super(props);
        this.state = {
            availableItems: [],
            cartItems: []
        }
        this.addToCart = this
            .addToCart
            .bind(this);
        this.removeFromCart = this
            .removeFromCart
            .bind(this);
        this.availableItemsRow = this
            .availableItemsRow
            .bind(this);
        this.cartItemsRow = this
            .cartItemsRow
            .bind(this);
    }

    /**
     * Event called when component mount completes
     */
    componentDidMount() {
        axios
            .get('http://localhost:3001/items')
            .then(response => {
                this.setState({availableItems: response.data.items, cartItems: []});
            })
            .catch(err => {
                console.error(err);
            });
    }

    /**
     * Event called when item added to cart
     * @param {object} item - item object added to cart
     */
    addToCart(item) {
        var updatedItems = this
            .state
            .availableItems
            .filter(function (val) {
                return item !== val;
            });
        var updatedCart = this.state.cartItems;
        updatedCart.push(item);
        this.setState({availableItems: updatedItems, cartItems: updatedCart});
    }

    /**
     * Event called when item removed from cart
     * @param {object} item - item object remove from cart
     */
    removeFromCart(item) {
        var updatedCart = this
            .state
            .cartItems
            .filter(function (val) {
                return item !== val;
            });
        var updatedItems = this.state.availableItems;
        updatedItems.push(item);
        this.setState({availableItems: updatedItems, cartItems: updatedCart});
    }

    /**
     * Event used to render rows of available Items
     */
    availableItemsRow() {
        if (this.state.availableItems instanceof Array) {
            var that = this;
            return this
                .state
                .availableItems
                .map(function (item, index) {
                    return <AvailableItems key={index} item={item} addToCart={that.addToCart}/>;
                });
        }
    }

    /**
      * Event used to render rows of cart Items
     */
    cartItemsRow() {
        if (this.state.cartItems instanceof Array) {
            var that = this;
            return this
                .state
                .cartItems
                .map(function (item, index) {
                    return <CartItems key={index} item={item} removeFromCart={that.removeFromCart}/>;
                });
        }
    }

    /**
     * render method of component
     */
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h4>Welcome to PMC</h4>
                </div>
                <div className="row">
                    <h4>Available Items
                    </h4>
                </div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Item Price
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.availableItemsRow()}
                    </tbody>
                </table>
                <hr/>
                <div className="row">
                    <h4>Cart Items
                    </h4>
                </div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Item Price
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.cartItemsRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShoppingCart;