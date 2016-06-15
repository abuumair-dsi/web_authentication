app.controller('alertCtrl', ['$scope', '$rootScope', function( $scope, $rootScope ) {    
    
    'use script';
        
    //  Initializer
    app.scope = $scope;
    $scope.alerts = $rootScope.alerts;
    
    //  actions
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
    
    //  Watcher
    $scope.$watchCollection('alerts', function( newVal ){
        var index = newVal.length-1;
        if( typeof( newVal[index] ) != 'undefined' && newVal[index].fade ){
            setTimeout(function(){
                console.log( index );
                console.log( $scope );
                console.log( app );
                app.scope.alerts.splice(index, 1);
            }, 3000);
        }
    });

}]);