(function () {
    var mod_app = angular.module('toastApp', ['ngRoute', 'ngResource',
        'ngCookies', 'ngTable', 'Encrypt']);
    function toastCtr() {
        console.log("sssss")
    }

    mod_app.component('toastTemplate', {
        templateUrl: '/static/app/toast/index.html',
        controller: toastCtr,
        bindings: {
            toast: '='
        }
    });

})();