/**
 * Created by beiwp on 2016/5/25.
 */

var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName,['ngResource','ngRoute','ngFileUpload']);


//搜索引擎爬虫 优化
mainApplicationModule.config(['$locationProvider','$routeProvider',
    function($locationProvider,$routeProvider){

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
        //$locationProvider.html5Mode(true);//去除url中总是默认带有"#"

        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/user/list',{
                templateUrl: '../client/user/list.html',
                controller: 'userController'
            })
            .when('/user/add',{
                templateUrl: '../client/user/add.html',
                controller: 'userController'
            })
            .when('/user/:userId/view',{
                templateUrl: '../client/user/view.html',
                controller: 'userController'
            })
            .when('/user/:userId/edit',{
                templateUrl: '../client/user/edit.html',
                controller: 'userController'
            })

            .when('/user/viewMe',{
                templateUrl: '../client/user/viewMe.html',
                controller: 'userController'
            })
            .when('/user/viewMe/:userId/edit',{
                templateUrl: '../client/user/editMe.html',
                controller: 'userController'
            })


            .when('/file/list',{
                templateUrl: '../client/file/list.html',
                controller: 'fileController'
            })
            .when('/file/add',{
                templateUrl: '../client/file/add.html',
                controller: 'fileController'
            })

            .when('/role/list',{
                templateUrl: '../client/role/list.html',
                controller: 'roleController'
            })
            .when('/role/add',{
                templateUrl: '../client/role/add.html',
                controller: 'roleController'
            })
            .when('/role/:roleId/view',{
                templateUrl: '../client/role/view.html',
                controller: 'roleController'
            })
            .when('/role/:roleId/edit',{
                templateUrl: '../client/role/edit.html',
                controller: 'roleController'
            })

            .otherwise({
                templateUrl:'../client/index.html'
            })
    }
]);


//facebook 身份验证后 再 OAuth回调中 会在URL的#加 修饰符
if(window.location.hash == '#_=_') window.location.hash = '#!';

angular.element(document).ready(function(){
    angular.bootstrap(document,[mainApplicationModuleName]);
});