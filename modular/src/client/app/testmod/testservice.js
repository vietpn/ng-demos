(function() {
    'use strict';

    angular
        .module('testmodule')
        .factory('testservice', ['$http', testService]);

    function testService($http){
        var service = {
            ping: ping
        };

        return service;

        function ping(){
            return 'pong';
        }
    }

})();
