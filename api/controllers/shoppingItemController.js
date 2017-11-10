'use strict';

/**
 * API to get all shopping items
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.getAllItems = function (req, res) {
    var shoppingItemData = require('../data/shoppingItem.json');
    res.json(shoppingItemData);
}