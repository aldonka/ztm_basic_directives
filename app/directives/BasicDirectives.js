/**
 * Created by Dominika on 2016-11-14.
 */
angular.module('myApp')
    .directive('yWidget', function($timeout){
            return {
                restrict: 'E',
                template:"<b>Hello Angular </b>"
        };
        }
    )
    .directive('xWidget', function($timeout){
            return {
                restrict: 'E',
                scope: {my: "="},
                link: function(scope, el, attr){
                    el.text("New wal" + attr.my);
                    console.log("print attributes value: " + attr.my );
                }
            };
        }
    );