/**
 * Created by jihan on 6/16/16.
 */
app.controller('resetService', ['appUtilsFactory', '$rootScope', 'baseService', function (appUtilsFactory, $rootScope, baseService) {

    console.log("JihanLog :: resetService");

    this.resetPassword = function (reset_token,data,fun) {
        baseService.sendWithOutAuth(appUtilsFactory.PASSWORD_CHANGE+"/"+reset_token, data, 'POST', function (data) {
            if (data != "Batman") {
                if (typeof fun == "function") {
                    fun(data);
                }
                console.log("JihanLog :: " + JSON.stringify(data));
            }

        });

    };
}]);