'use strict';

angular.module('portfolioApp')
.service('dataService', function($http) {

  this.getProjects = function(callback){
    $http.get('mock/projects.json')
    .then(callback)
  };
  
});