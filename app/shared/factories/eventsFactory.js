app.factory('eventsFactory', ['$uibModal', function( $uibModal ){
	'use strict';

    var $modal = $uibModal;
	
	return {
            'LOG_IN': 'LOGIN',
            'LOG_OUT': 'LOGOUT',
            'UNAUTHENTICATED': 'UNAUTHENTICATED',
            'LOGIN_MODAL': function(){
                $modal.open({
                    windowTemplateUrl: 'templates/common/modal.m.tpl.html',
                    templateUrl: 'templates/common/login-modal.m.tpl.html',
                    controller: ['$scope', '$rootScope', function( $scope, $rootScope ){
                        $rootScope.modal.title = 'Sign In';
                        $rootScope.modal.x = '';
                        $scope.signin = function( form ){
                            
                        };
                    }]
                });
            },
        'MESSAGE_MODAL': function($title,$message) {
            $modal.open({
                windowTemplateUrl: 'templates/common/modal.m.tpl.html',
                templateUrl: 'templates/common/message_dialogs.m.tpl.html',
                controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                    $rootScope.modal.title = $title;
                    $rootScope.modal.x = 'center';
                    $scope.message = $message;
                }]
            });
        },
        'JOB_MESSAGE_MODAL': function($title,$message) {
            $modal.open({
                windowTemplateUrl: 'templates/common/modal.m.tpl.html',
                templateUrl: 'templates/common/job_message_dialogs.m.tpl.html',
                controller: ['$scope', '$rootScope', '$modalInstance', '$window', '$stateParams', '$modalStack', function ($scope, $rootScope, $modalInstance, $window, $stateParams, $modalStack) {
                    $rootScope.modal.title = $title;
                    $rootScope.modal.x = 'center';
                    $scope.message = $message;
                    $scope.cancel = function(){
                        $modalStack.dismissAll();
                        // $modalInstance.dismiss('cancel');
                    };
                    $scope.procedd = function(){
                        $window.location.hash = '#/job/' + $stateParams.jobID + '/questions';
                        $modalStack.dismissAll();
                    };
                }]
            });
        }
        // ,
        // 'APPLICANT_MODAL': function($message) {
        //     $modal.open({
        //         windowTemplateUrl: 'templates/common/modal.html',
        //         templateUrl: 'templates/common/message_dialogs.html',
        //         controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
        //             $rootScope.modal.title = 'Create User';
        //             $rootScope.modal.x = 'center';
        //             $scope.message = $message;
        //         }]
        //     });
        // }
	};

}]);