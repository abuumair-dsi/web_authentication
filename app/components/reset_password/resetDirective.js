/**
 * Created by jihan on 6/17/16.
 */
app.directive('reset', function(){

    return {
        // template: 'Name: {{customer.name}} Address: {{customer.address}}'
        templateUrl: function($scope,element, attributes) {
            return element.url;
        },
        controller: 'resetController'
    };

});