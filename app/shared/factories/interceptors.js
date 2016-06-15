/*
 *  Global request error handler
 */
app.factory('globalRequestInterceptor', ['$q', '$rootScope', '$localStorage', function($q, $rootScope, $localStorage) {
    return {    	
        request: function( config ){            
            config.headers = config.headers || {};                        
            
           // if( $localStorage.session.token )
           //     config.headers['Auth-token'] = $localStorage.session.token;
                    
            return config;
        },
        responseError: function( rejection ){              
            //  For unauthenticated user trigger an event
            if( rejection.status === 401 ){
                $rootScope.$emit( $rootScope.events.UNAUTHENTICATED );                                
            }
            
            if( rejection.hasOwnProperty('config') /*&& rejection.config.prevent_global*/ ){
                console.error( 'Oops' );              
                console.log( rejection );
                return false;                
            }
            
            return $q.reject(rejection);            
        }
    };
}]);
