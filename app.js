'use strict';

// Declare app level module which depends on views, and components
angular.module('angularClient', [
    'ui.router',
    'ngAnimate',
    'ngLodash',
    'angularMoment',
    'editor'
])
.config(['$urlRouterProvider', '$stateProvider', urlRouterProvider])
.run(['$rootScope', '$state', handleRoutingValidation]);

function urlRouterProvider($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/editor');

    $stateProvider
        .state('editor', {
            url: '/editor',
            templateUrl: 'app/modules/editor/views/editor.html',
            controller: 'editorCtrl'
        })
}

function handleRoutingValidation($rootScope, $state) {
}
