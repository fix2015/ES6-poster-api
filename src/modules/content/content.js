/**
 * Created by semianchuk on 17.10.16.
 */
angular.module('content',[])
    .directive('content', ['contentFactory', 'domain', function(contentFactory, domain) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'src/modules/content/content.html',
            link: function(scope, element, attrs) {
                scope.domain  = domain;
                scope.filmData = contentFactory.getDetails();
                console.log(scope.filmData)
                

                scope.button = function(){
                    scope.filmData = contentFactory.getDetails();
                }
            }
        }
    }])