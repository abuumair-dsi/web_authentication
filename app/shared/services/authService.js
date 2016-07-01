app.service('authService', ['$http', '$rootScope', '$localStorage', 'baseService','appUtilsFactory',
    function ($http, $rootScope, $localStorage, baseService, appUtilsFactory) {

        //  Logs in a user
        this.logIn = function (model) {

            return baseService.send(appUtilsFactory.AUTH_LOGIN, null, angular.toJson(model), "POST", function(data){
                if(data != "Batman"){
                    $localStorage.session = data;
                }
                console.log("JihanLog :: "+JSON.stringify(data));
            });

        };
        


        //  Logs out a user
        this.logOut = function () {
            delete $localStorage.session;
            $rootScope.$emit($rootScope.events.LOG_OUT);
        };

        //  returns userinfo from localstorage
        this.userInfo = function () {
            return $localStorage.session === null ? {} : $localStorage.session;
        };

        this.userInfoNull = function () {
             $localStorage.session = null;
        };

        //  Fetches user Info from server
        this.fetchUserInfo = function () {
            userInfoService.syncLoad().done(function (data) {
                delete $localStorage.session;
                if (Object.getOwnPropertyNames(data).length)
                    $localStorage.session = data;
            });
            delete $localStorage.session;
        };

        this.getUser = function(){
            return $localStorage.session;
        };

        //  returns boolean true if user is logged in
        this.isLoggedIn = function () {
            return !(angular.isUndefined($localStorage.session) || $localStorage.session === null);
            //$localStorage.session == null ? false : true;
        };

        return this;
    }
]);