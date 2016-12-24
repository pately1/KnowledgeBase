/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .controller('AddArticleController', ['$scope','artService','catService','$routeParams','$location', function ($scope, artService,catService, $routeParams, $location) {
            catService.getCategories().then(function (data) {
                $scope.categories = data;
            });
            $scope.addArticle = function () {
              var data = {
                  title: $scope.title,
                  body: $scope.body,
                  category: $scope.category
              };
            artService.postArticle(data).then(function () {
                $location.path('/articles');
            });
            };
        }]);
})();