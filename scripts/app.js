/**
 * Created by juan_arillo on 11/6/16.
 */

// Application setter
angular.module("whatapop", ["ngComponentRouter"]);

// Provider '$locationProvider' configuration. Setting
// HTML5 navigation mode for Single Page Application
angular.module("whatapop").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});
