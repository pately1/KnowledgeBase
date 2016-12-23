/**
 * Created by Yash on 12/16/2016.
 */
var express = require('express');
var router = express.Router();
var Category = require('../models/category');
/* GET users listing. */
router.get('/', function(req, res, next) {
    Category.getAllCategories(function (err, categories) {
        if (err) {
            console.log(err);
        }
        res.json(categories);
    });
});

router.get('/:id', function(req, res, next) {
    Category.getCategorybyId(req.params.id, function (err, category) {
        if (err) {
            console.log(err);
        }
        res.json(category);
    });
});

router.get('/category/:category', function(req, res, next) {
    Category.getCategoryByCategory(req.params.category, function (err, article) {
        if (err) {
            console.log(err);
        }
        res.json(article);
    });
});

module.exports = router;
