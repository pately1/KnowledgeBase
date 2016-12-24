/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .controller('CategoryController', ['$scope','catService', function ($scope, catService) {
            console.log("in");
            catService.getCategories().then(function (data) {
                $scope.category = data;
            })
        }]);
})();