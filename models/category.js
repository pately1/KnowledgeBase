/**
 * Created by Yash on 12/16/2016.
 */
var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String
    }
});

var Category = module.exports = mongoose.model("Category", CategorySchema);

module.exports.getAllCategories = function (callback) {
    Category.find(callback);
};

module.exports.getCategorybyId = function (id, callback) {
    Category.findById(id, callback);
};

module.exports.getCategoryByCategory = function (category, callback) {
    var query =  {category: category};
    Category.find(query, callback);
};

module.exports.createCategory = function (category, callback) {
    category.save(callback);
};