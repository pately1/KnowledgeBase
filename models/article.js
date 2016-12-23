/**
 * Created by Yash on 12/16/2016.
 */
var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
   title: {
       type: String,
       index: true,
       required: true
   },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Article = module.exports = mongoose.model("Article", ArticleSchema);

module.exports.getAllArticles = function (callback) {
  Article.find(callback);
};

module.exports.getArticlebyId = function (id, callback) {
  Article.findById(id, callback);
};

module.exports.getArticleByCategory = function (category, callback) {
  var query =  {category: category};
    Article.find(query, callback);
};

module.exports.createArticle = function (article, callback) {
  article.save(callback);
};

module.exports.updateArticle = function (id, data, callback) {
  Article.findById(id, function (err, article) {
     if (!article) {
         return next(new Error('Could not load article'));
     } else {
         console.log(article);
         article.title = data.title;
         article.body = data.body;
         article.category = data.category;
         article.save(callback);
     }
  });
};

module.exports.removeArticle = function (id, callback) {
  Article.findById(id).remove(callback);
};