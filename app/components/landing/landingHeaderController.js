/**
 * Created by jihan on 6/14/16.
 */
app.controller('landingHeaderController', ['$scope', '$rootScope', '$state', function( $scope, $rootScope, $state ) {


    $scope.routeLogin = function(){
        $state.go('login');
    }


}]);