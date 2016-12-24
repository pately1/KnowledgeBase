/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .controller('ArticleController', ['$scope','artService', function ($scope, artService) {
            console.log("in");
            artService.getArticles().then(function (data) {
                $scope.articles = data;
            })
        }]);
})();