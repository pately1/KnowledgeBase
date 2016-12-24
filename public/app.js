/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when("/articles", {
                    templateUrl: "views/article.view.html",
                    controller: 'ArticleController'
                })
                .when("/categories", {
                    templateUrl: "views/category.view.html",
                    controller: 'CategoryController'
                })
                .when("/articles/details/:id", {
                    templateUrl: "views/article_detail.view.html",
                    controller: 'ArticleDetailController'
                })
                .when("/articles/category/:category", {
                    templateUrl: "views/cat_articles.view.html",
                    controller: 'CategoryArticleController'
                })
                .when("/articles/add", {
                    templateUrl: "views/add_article.view.html",
                    controller: 'AddArticleController'
                })
                .when("/articles/edit/:id", {
                    templateUrl: "views/edit_article.view.html",
                    controller: 'EditArticleController'
                })
                .otherwise({redirectTo: '/categories'});
        }]);
})();