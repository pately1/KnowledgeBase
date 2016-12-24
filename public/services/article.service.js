/**
 * Created by pately1 on 12/23/16.
 */
(function () {
    'use strict';

    angular
        .module('Knowledgebase')
        .service('artService', ['$http','$q', function ($http, $q) {
            this.getArticles = function () {
                return  $http.get('/articles').then(function (response) {
                    return $q.resolve(response.data);
                }, function (err) {
                    return $q.reject(err);
                })
            };
            this.getArticleByCategory = function (category) {
                return $http.get('/articles/category/'+category).then(function (response) {
                    return $q.resolve(response.data);
                }, function (err) {
                    return $q.reject(err);
                })
            };
            this.getArticleDetails = function (id) {
                return $http.get('/articles/'+id).then(function (response) {
                    return $q.resolve(response.data);
                }, function (err) {
                    return $q.reject(err);
                })
            };
            this.postArticle = function (data) {
              return $http.post('/articles', data).then(function (response) {
                  return $q.resolve(response);
              }, function (err) {
                  return $q.reject(err);
              })
            };
            this.updateArticle = function (article) {
                return $http.put('/articles', article).then(function (response) {
                    console.log(response);
                    return $q.resolve(response);
                }, function (err) {
                    return $q.reject(err);
                })
            };
            this.removeArticle = function (id) {
              return $http.delete('/articles/'+id).then(function (response) {
                  return $q.resolve(response);
              }, function (err) {
                  return $q.reject(err);
              })
            };
        }]);
})();