app.service('baseService', ['$http', 'appExceptionCodeFactory', '$rootScope', function($http, appExceptionCodeFactory, $rootScope) {

        'use strict';

        // Initialize variables
        this.host = "./api";
        //this.host = "/";

        this.host1 = "http://10.0.0.127:8080/authentication/api";
        // this.host1 = "http://103.245.204.114:8081/authentication/api"

        this.service = "";
        
        this.version = "/v1/";

        this.method = "GET";
        
        this.prevent_global = false;

        this.params = {};
        
        this.data = {};

        //  Internal Methods
        this._getService = function() {
            return this.host + this.version + this.service + '.json';
            //return this.host + this.version + this.service;
            //return null;
        };

        //  Default methods
        this.send2 = function() {
            console.log("JihanLog :: 3");
           return $http({
               url: this._getService(),
               params: this.params,
               data: this.data,
               method: this.method
           });
        };


    this.send = function($URL, $auth_token, $data, $method, fn) {
        return $http({
            url: this.host1 + $URL,
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer $('+$auth_token+')'
            },
            data: $data,
            method: $method
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            if(typeof fn == "function"){
                if(response.status == 200){
                    //console.log("JihanLog :: success");
                    fn(response.data)
                }else{
                    console.log("JihanLog :: "+JSON.stringify(response));
                    console.log("JihanLog :: Batman");
                    fn("Batman")
                }
            }
        }, function errorCallback(response) {
            console.log("JihanLog 11 :: "+JSON.stringify(response));
            exceptionMsg(response)
        });
    };



    function exceptionMsg(response){
        if(response.data == null ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Server Not Found' });
        }else if(appExceptionCodeFactory.E_0001 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0002 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0003 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0004 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0005 == response.data.errorCode ){
            if(response.data.errorContext.entity){
                $rootScope.alerts .push( { type: 'danger', msg: 'User Id or password not found' });
            }else{
                $rootScope.alerts .push( { type: 'danger', msg: response.data.errorContext.entity+' not found' });
            }

        }else if(appExceptionCodeFactory.E_0006 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0007 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Session timeout! Please login again' });
        }else if(appExceptionCodeFactory.E_0008 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0009 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0010 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }else if(appExceptionCodeFactory.E_0011 == response.data.errorCode ){
            $rootScope.alerts .push( { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
        }

        setTimeout(function(){
            if($rootScope.alerts.length >0 ){
                console.log("JihanLog :: from baseService "+$rootScope.alerts.length);
                $rootScope.alerts.splice(0, 1);
            }
        }, 5000);
    }


    this.sendWithOutAuth = function($URL, $data, $method, fn) {
        return $http({
            url: this.host1 + $URL,
            headers: {
                'Content-Type':'application/json',
            },
            data: $data,
            method: $method
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            if(typeof fn == "function"){
                if(response.status == 200){
                    fn(response.data)
                }else{
                    console.log("JihanLog :: "+JSON.stringify(response.data));
                    fn("Batman")
                }
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            exceptionMsg(response)
            console.log("JihanLog 11 :: "+JSON.stringify(response));
        });
    };

    this.send1 = function($URL, $auth_token, $data, $method, fn) {
        console.log("JihanLog :: "+JSON.stringify($data));
        return $http({
            url: this.host1 + $URL,
            transformRequest: angular.indentity,
            headers: {
                'Content-Type': undefined,
                'auth_token': $auth_token
            },
            data: $data,
            method: $method
        }).then(function successCallback(response) {
            if(typeof fn == "function"){
                if(response.status == 200){
                    console.log("JihanLog :: 200");
                    fn(response.data)
                }else{
                    fn("Batman")
                }
            }
        }, function errorCallback(response) {
            console.log("JihanLog 11 :: "+JSON.stringify(response));
        });
    };


        
        this.load = function() {
            return $http({
                url: this._getService(),
                params: this.params,
                method: 'GET'
            });
        };

        this.save = function() {            
            return $http({
                url: this._getService(),
                data: this.data,
                prevent_global: this.prevent_global,
                method: 'POST'                
            });
        };

        this.remove = function() {            
            return $http({
                url: this._getService(),
                params: this.params,
                method: 'DELETE'
            });
        };

        this.update = function() {            
            return $http({
                url: this._getService(),
                params: this.params,
                data: this.data,
                method: 'UPDATE'
            });
        };


    }]);