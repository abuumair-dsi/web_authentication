app.factory('constantsFactory', [function(){
    
    return {
        constants: {
            basic: 'Sorry, a server error occured',
            100: 'Position successfully saved'
        },
        get: function( reasonCode ){
            
            if( reasonCode in this.constants )
                return this.constants[reasonCode];
            
            // return this.constants['basic'];
            return this.constants.basic;
            
        }
    };
    
}]);