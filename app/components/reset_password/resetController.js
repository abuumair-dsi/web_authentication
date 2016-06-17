/**
 * Created by jihan on 6/16/16.
 */
app.controller('resetController', ['$scope', '$location', 'resetService','$stateParams', function ($scope, $location, resetService, $stateParams) {

    console.log("JihanLog :: resetController");

    $scope.submit = function (form) {
        form.submitted = true;
        if (form.$valid) {
            var reset_token = $stateParams.reset_token // TODO get reset token from url
            console.log("JihanLog :: "+reset_token);
            resetService.resetPassword(reset_token,$scope.reset, function (data) {
                console.log("JihanLog :: " + JSON.stringify(data));
                if (data == "Batman") {
                    $scope.invalid = true;
                }
            });
        }
    }

}]);