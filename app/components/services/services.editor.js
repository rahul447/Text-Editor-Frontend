'use strict';

angular.module('editorService', ['providers'])
    .service('editorService', ['$http', 'config', editorService]);

function editorService($http, config) {

    var editorService = {
        updateChange: updateChange
    };

    return editorService;

    function updateChange(params) {
        var requestData = {
            method: "POST",
            url: config.apiEndPoint + "/update"
        };

        if (angular.isDefined(params)) {
            requestData['dataType'] = 'json';
            requestData['data'] = params;
        }
        console.log("requestData : ", requestData);
        return $http(requestData);
    }
}
