/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .controller('ArticleDetailController', ['$scope','artService','$routeParams','$location', function ($scope, artService, $routeParams, $location) {
            console.log("in");
            artService.getArticleDetails($routeParams.id).then(function (data) {
                $scope.article = data;
            });
            $scope.removeArticle = function () {
                artService.removeArticle($routeParams.id).then(function () {

                });
                $location.path('/articles');
            };
        }]);
})();