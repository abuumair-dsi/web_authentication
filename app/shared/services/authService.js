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
            
            //return $http({
            //    method: 'POST',
            //    url: 'http://10.0.0.127:8080/hiringappservice/api/v1/auth/login',
            //    headers: {
            //        'Content-Type': 'application/json',
            //        'service-key': '0ae3d81c-768c-493f-ae69-865b0fc102c4:d3afd94e-dd4d-4709-9970-78ef90027647'
            //    },
            //    data: angular.toJson(model)
            //}).success(function (data) {
            //    $localStorage.session = data;
            //});

        };
        


        //  Logs out a user
        this.logOut = function () {
            delete $localStorage.session;
            $rootScope.$emit($rootScope.events.LOG_OUT);
        };

        //  returns userinfo from localstorage
        this.userInfo = function () {
            return $localStorage.session == null ? {} : $localStorage.session;
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
            return $localStorage.session
        }

        //  returns boolean true if user is logged in
        this.isLoggedIn = function () {
            return !(angular.isUndefined($localStorage.session) || $localStorage.session === null);
            //$localStorage.session == null ? false : true;
        };

        return this;
    }
]);