'use strict';

module.exports = function (app) {
    var shoppingItems = require('../controllers/shoppingItemController');

    //shopping item route to get all items
    app
        .route('/items')
        .get(shoppingItems.getAllItems);
}