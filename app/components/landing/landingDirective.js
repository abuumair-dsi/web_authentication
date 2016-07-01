app.directive('landing', function(){

    return {
        // template: 'Name: {{customer.name}} Address: {{customer.address}}'
        templateUrl: function($scope,element, attributes) {
            return element.url;
        },
        controller: 'landingController'
    };

});

