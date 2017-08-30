// Feedback Card App
var pretotypingApp = angular.module('pretotypingApp', ['pretotypingApp.controllers', 'pretotypingApp.services', 'ngRoute', 'ngAnimate']);

pretotypingApp.config(function ($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
        when('/step1', {
            templateUrl: 'views/step1.html',
            controller: 'Step1Ctrl'
        }).
        when('/step2', {
            templateUrl: 'views/step2.html',
            controller: 'Step2Ctrl'
        }).
        when('/step3', {
            templateUrl: 'views/step3.html',
            controller: 'Step3Ctrl'
        }).
        when('/step4', {
            templateUrl: 'views/step4.html',
            controller: 'Step4Ctrl'
        }).
        when('/step5', {
            templateUrl: 'views/step5.html',
            controller: 'Step5Ctrl'
        }).
        when('/info', {
            templateUrl: 'views/info.html',
            controller: 'InfoCtrl'
        }).
        when('/receiver', {
            templateUrl: 'views/receiver.html',
            controller: 'ReceiverCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});
