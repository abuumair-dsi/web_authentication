/**
 * Created by jihan on 6/16/16.
 */
app.service('loginService', ['baseService', '$localStorage', 'appUtilsFactory', function (baseService, $localStorage, appUtilsFactory) {

    
    this.login = function (data, fun) {
        baseService.sendWithOutAuth(appUtilsFactory.LOGIN_SESSION, data, 'POST', function (data) {
            if (data != "Batman") {
                $localStorage.session = data;
                $localStorage.access_token = data.access_token;
                if (typeof fun == "function") {
                    fun(data);
                }
                console.log("JihanLog :: " + JSON.stringify(data));
            }

        });
    }

    this.logOut = function (fun) {
        baseService.send(appUtilsFactory.LOGIN_SESSION, $localStorage.access_token, null, 'DELETE', function (data) {
            if (data != "Batman") {
                delete $localStorage.session;
                delete $localStorage.access_token;
                if (typeof fun == "function") {
                    fun(data);
                }
                console.log("JihanLog :: " + JSON.stringify(data));
            }
        });

    };

    this.accessTokenUpdate = function() {
        setInterval(
            function () {
                baseService.send(appUtilsFactory.ACCESS_TOKEN, $localStorage.access_token, null, 'GET', function (data) {
                    if (data != "Batman") {
                        $localStorage.access_token = data.access_token;
                        console.log("JihanLog :: " + JSON.stringify(data));
                    }
                })
            }, 10000 * 6
        )
    }

    this.userInfo = function () {

        baseService.send(appUtilsFactory.LOGIN_SESSION, $localStorage.access_token, null, 'GET', function (data) {
            if (data != "Batman") {
                $localStorage.session = data;
                console.log("JihanLog :: " + JSON.stringify(data));
            }
        })
    };


    this.getUser = function () {
        return $localStorage.session
    }


}]);