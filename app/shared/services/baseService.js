app.service('baseService', ['$http', function($http) {

        'use strict';

        // Initialize variables
        this.host = "./api";
        //this.host = "/";

        // this.host1 = "http://10.0.0.127:8080/hiringappservice/api/v1/";
        this.host1 = "http://103.245.204.114:8081/hiringappservice/api/v1/"

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
                // 'service_key':'32ed9c44-3f54-4195-a3b2-a488ec6b7ba3:71aa3b6c-88c0-49b8-ad42-b2b5f683d7db',
                'auth_token': $auth_token
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
                    fn("Batman")
                }
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("JihanLog 11 :: "+response);
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
            console.log("JihanLog 11 :: "+response);
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