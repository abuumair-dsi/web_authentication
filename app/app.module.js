/**
 * Created by jihan on 6/14/16.
 */

var app = angular.module('authentication', ['ui.bootstrap', 'ui.router', 'ngStorage','ngAnimate']);

app.run(['$rootScope', '$state', 'appConfigFactory', 'eventsFactory', 'authService', 'constantsFactory', '$location',
    function($rootScope, $state, appConfigFactory, eventsFactory, authService, constantsFactory, $location){

        //  Application configuration
        $rootScope.appConfig = appConfigFactory;
        $rootScope.events = eventsFactory;
        $rootScope.pageTitle = appConfigFactory.DEFAULT_TITLE;
        $rootScope.modal = {title: ''};
        $rootScope.alerts = [];
        $rootScope.constants = constantsFactory;

        $rootScope.$on("$stateChangeStart", function(event, toState) {

            //If route requires authentication & user is not logged in redirect to login page
            if( toState.authRequired && !authService.isLoggedIn() )  {
                event.preventDefault();
                //$state.go('index');
                $state.go('landing');
            }
            //  If route cannot be viewed by authenticated user
            else if( toState.redirectAuthenticated && authService.isLoggedIn() ){
                event.preventDefault();
                $state.go('landing');
            }
            if( toState.title )
                $rootScope.pageTitle = toState.title;
            else
                $rootScope.pageTitle = appConfigFactory.DEFAULT_TITLE;

        });

        //  Event wise application behaviour
        $rootScope.$on( $rootScope.events.LOG_OUT, function(){
            if( $state.current.authRequired )
                $state.go('landing');
            // $state.go('jobs');
        });

        $rootScope.$on( $rootScope.events.UNAUTHENTICATED, function(){
           $rootScope.events.LOGIN_MODAL();
        });

    }]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    // $httpProvider.interceptors.push('globalRequestInterceptor');

    //  UI-Route
    for( state in app.states ){
        $stateProvider.state( state, app.states[state] );
    }
    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true).hashPrefix('*');

}]);


$(window).load(function(){
    //  Running the application
    angular.bootstrap(document, ['authentication']);
});
