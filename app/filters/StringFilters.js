/**
 * Created by Dominika on 2016-11-14.
 */
angular.module('myApp')
    .filter('reverseString', [function(){
        return function (word) {
            var result = '';

            for(var i = word.length; i > 0; i--){
                result += word.charAt(i-1);
            }
            return result;
        }
    }]);