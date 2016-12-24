/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .service('catService', ['$http','$q', function ($http, $q) {
            this.getCategories = function () {
              return  $http.get('/categories').then(function (response) {
                   return $q.resolve(response.data);
              }, function (err) {
                  return $q.reject(err);
              })
            };
        }]);
})();