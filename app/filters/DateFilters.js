/**
 * Created by Dominika on 2016-11-11.
 */
angular.module('myApp')
.filter('monthName', [function(){
    return function (date) {
        var dateArr= date.split(" ");
        var monthNames = [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień'
        ];
        return dateArr[0] +  " " + monthNames[dateArr[1] - 1] + " " + dateArr[2];
    }
}]);
angular.module('myApp')
.filter('weekName', ['$filter', function ($filter) {
    return function (date) {
        var d = new Date();
        var weekDayName = [
            'niedziela',
            'poniedziałek',
            'wtorek',
            'środa',
            'czwartek',
            'piątek',
            'sobota'
        ];
        return "Dziś jest: " + weekDayName[d.getDay()] + ", za 2 dni będzie:  " + weekDayName[d.getDay()+2] ;
    }
}]);