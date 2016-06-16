/**
 * Created by jihan on 6/16/16.
 */
app.service('forgotService', ['baseService', '$localStorage', 'appUtilsFactory', function (baseService, $localStorage, appUtilsFactory) {


    this.forgotPassword = function (data,fun) {
        baseService.send(appUtilsFactory.PASSWORD_RESET, $localStorage.access_token, data, 'POST', function (data) {
            if (data != "Batman") {
                if (typeof fun == "function") {
                    fun(data);
                }
                console.log("JihanLog :: " + JSON.stringify(data));
            }
        });

    };



}]);