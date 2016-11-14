/**
 * Created by Dominika on 2016-11-14.
 */
angular.module('myApp')
    .directive('yWidget', [function(){
            return {
                restrict: 'E',
                template:"<b>Hello Angular </b>"
        };
    }])
    .directive('withElem', [function(){
        return {
            restrict: 'E',
            scope: {
                myWidget : "=myWidget"
            },
            link: function(scope, el, attr){
                el.text("Value : " + attr.myWidget);
            }
        };
    }])
    .directive('repeatXtimes', [function(){
        return {
            restrict: 'E',
            scope: {
                times : "=",
                value: "@"
            },
            link: function(scope, el, attr){
                var printedValue = "";
                for(var i = 0; i < attr.times; i++){
                    printedValue += attr.value + " | ";
                }
                el.text("Value : " + printedValue);
            }
        };
    }]);