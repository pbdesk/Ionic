(function () {
    'use strict';
 
    angular.module('PercyApp')
    
   

    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider

          .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
          })
        
        .state('app.home', {
              url: "/home",
              views: {
                'menuContent': {
                  templateUrl: "templates/home.html",
                  controller: 'homeController as vm'
                }
              }
            })
        
        .state('app.about', {
              url: "/about",
              views: {
                'menuContent': {
                  templateUrl: "templates/about.html",
                  controller: 'aboutController as vm'
                }
              }
            })

          .state('app.profile', {
            url: "/profile",
            views: {
              'menuContent': {
                templateUrl: "templates/profile.html"
              }
            }
          })
        
        .state('app.inspiration', {
            url: "/inspiration",
            views: {
              'menuContent': {
                templateUrl: "templates/inspiration.html"
              }
            }
          })

          .state('app.browse', {
            url: "/browse",
            views: {
              'menuContent': {
                templateUrl: "templates/browse.html"
              }
            }
          })
            .state('app.playlists', {
              url: "/playlists",
              views: {
                'menuContent': {
                  templateUrl: "templates/playlists.html",
                  controller: 'PlaylistsCtrl'
                }
              }
            })

          .state('app.single', {
            url: "/playlists/:playlistId",
            views: {
              'menuContent': {
                templateUrl: "templates/playlist.html",
                controller: 'PlaylistCtrl'
              }
            }
          });
          // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/app/home');
        });
})();