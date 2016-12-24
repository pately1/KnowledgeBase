/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .controller('EditArticleController', ['$scope','artService','catService','$routeParams','$location', function ($scope, artService,catService, $routeParams, $location) {
            artService.getArticleDetails($routeParams.id).then(function (data) {
                $scope.article = data;
            });
            catService.getCategories().then(function (data) {
                $scope.categories = data;
            });
            $scope.updateArticle = function () {
              var data = {
                  id: $routeParams.id,
                  title: $scope.article.title,
                  body: $scope.article.body,
                  category: $scope.article.category
              };
                artService.updateArticle(data).then(function (data) {

                });
                $location.path('/articles');
            };
        }]);
})();