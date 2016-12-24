/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .controller('CategoryArticleController', ['$scope','artService','$routeParams', function ($scope, artService, $routeParams) {
            console.log("in");
            artService.getArticleByCategory($routeParams.category).then(function (data) {
                $scope.cat_articles = data;
                $scope.categoty = $routeParams.category;
            })
        }]);
})();