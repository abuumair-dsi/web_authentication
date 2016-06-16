/**
 * Created by jihan on 6/14/16.
 */
app.controller('changeController', ['$scope', '$rootScope', 'changeService', function ($scope, $rootScope, loginService) {

    console.log("JihanLog :: changeController");

    $scope.submit = function (form) {
        form.submitted = true;
        if (form.$valid) {
            changeService.changePassword($scope.reset, function (data) {
                console.log("JihanLog :: " + JSON.stringify(data));
                if (data == "Batman") {
                    $scope.invalid = true;
                }
            });
        }
    }



}]);