/**
 * Created by jihan on 4/19/16.
 */
app.factory('appUtilsFactory', [function(){
    return {
        LOGIN_SESSION       : '/v1/login_session',
        ACCESS_TOKEN        : '/v1/access_token',
        PASSWORD_RESET      : '/v1/password/reset',
        PASSWORD_CHANGE     : '/v1/password/change',

    };
}]);