'use strict';

angular.module('portfolioApp')
.controller('mainCtrl', function($scope, dataService, $location, $anchorScroll) {
	
  dataService.getProjects(function(response) { 
    console.log(response.data);  
    $scope.projects = response.data;
  });
  
  $scope.gotoBottom = function() {
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('footer');
    // call $anchorScroll()
    $anchorScroll();
  };
  
})