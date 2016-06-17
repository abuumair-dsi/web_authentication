/**
 * Created by jihan on 6/14/16.
 */
app.controller('changeController', ['$scope', '$rootScope', 'changeService', function ($scope, $rootScope, changeService) {

    console.log("JihanLog :: changeController");
    
    $scope.submit = function (form) {
        form.submitted = true;
        if (form.$valid) {
            console.log("JihanLog :: "+JSON.stringify($scope.change));
            changeService.changePassword($scope.change, function (data) {
                console.log("JihanLog :: " + JSON.stringify(data));
                if (data == "Batman") {
                    $scope.invalid = true;
                }
            });
        }
    }



}]);