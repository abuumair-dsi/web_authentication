/**
 * Created by jihan on 6/16/16.
 */
app.controller('forgotController', ['$scope', '$rootScope', 'forgotService', function ($scope, $rootScope, loginService) {

    console.log("JihanLog :: forgotController");

    $scope.submit = function (form) {
        form.submitted = true;
        if (form.$valid) {
            var reset_token = $location.path(); // TODO get reset token from url
            forgotService.resetPassword(reset_token,$scope.reset, function (data) {
                console.log("JihanLog :: " + JSON.stringify(data));
                if (data == "Batman") {
                    $scope.invalid = true;
                }
            });
        }
    }

}]);