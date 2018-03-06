angular.module('portfolioApp')
 .directive('projects', function() {
   return {
    templateUrl: 'templates/projects.html',
    controller: 'mainCtrl',
    replace: true // remove directive tags
    };
});