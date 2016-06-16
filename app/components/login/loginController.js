/**
 * Created by jihan on 6/14/16.
 */
app.controller('loginController', ['$scope', '$rootScope', 'loginService', function ($scope, $rootScope, loginService) {

    console.log("JihanLog :: loginController");

    $scope.signin = function (form) {
        form.submitted = true;
        if (form.$valid) {
            $scope.login.tenant_id = "cc4e0554-6582-498b-9ae2-ad3c612f8e8e";
            loginService.login($scope.login, function (data) {
                console.log("JihanLog :: " + JSON.stringify(data));
                setTimeout(
                    function(){
                        loginService.accessTokenUpdate();
                    }
                    , 10000 * 6);
                if (data == "Batman") {
                    $scope.invalid = true;
                }
            });
        }
    }


    $scope.logOut = function () {
        loginService.logOut(function (data) {
            console.log("JihanLog :: " + JSON.stringify(data));
            if (data != "Batman") {

            }
        });
    }

    $scope.getUserInfo = function () {
        loginService.userInfo(function (data) {
            console.log("JihanLog :: " + JSON.stringify(data));
            if (data != "Batman") {

            }
        });
    }
    

}]);