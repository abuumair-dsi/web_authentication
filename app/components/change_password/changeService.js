/**
 * Created by jihan on 6/16/16.
 */

app.controller('changeService', ['$scope', '$rootScope', 'baseService', 'appUtilsFactory', function ($scope, $rootScope, loginService, appUtilsFactory) {

    console.log("JihanLog :: resetService");

    this.changePassword = function (data,fun) {
        baseService.send(appUtilsFactory.PASSWORD_CHANGE,  $localStorage.access_token, data, 'POST', function (data) {
            if (data != "Batman") {
                if (typeof fun == "function") {
                    fun(data);
                }
                console.log("JihanLog :: " + JSON.stringify(data));
            }

        });

    };
}]);
