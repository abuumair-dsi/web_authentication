/**
 * Created by jihan on 6/14/16.
 */
app.controller('forgotController', ['$scope', '$rootScope', 'forgotService', '$location',  function ($scope, $rootScope, forgotService, $location) {

    console.log("JihanLog :: forgotController");
    $scope.forget = {};

    $scope.submit = function (form) {
        form.submitted = true;
        if (form.$valid) {
            $scope.forget.reset_url = $location.absUrl().split('#')[0]+'#/password/reset/';
            console.log("JihanLog :: "+$scope.forget.reset_url);
            forgotService.forgotPassword($scope.forget, function (data) {
                console.log("JihanLog :: " + JSON.stringify(data));
                if (data == "Batman") {
                    $scope.invalid = true;
                }
            });
        }
    };

}]);