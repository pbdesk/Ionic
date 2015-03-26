(function () {
    'use strict';
 
    angular
        .module('starter.controllers')
        .controller('aboutController', aboutController);
 
    aboutController.$inject = ['$location']; 
 
    function aboutController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'aboutController';
 
        init();
 
        function init() { }
    }
})();