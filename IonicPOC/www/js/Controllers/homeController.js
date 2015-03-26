(function () {
    'use strict';
 
    angular
        .module('starter.controllers')
        .controller('homeController', homeController);
 
    homeController.$inject = ['$location']; 
 
    function homeController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'homeController';
 
        init();
 
        function init() { }
    }
})();