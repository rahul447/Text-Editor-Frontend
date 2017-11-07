'use strict';

angular.module('editor').controller('editorCtrl', ['$http', '$scope', '$rootScope', editorCtrl]);

function editorCtrl($http, $scope, $rootScope) {

    $scope.Content = null;
    $scope.watcherTime = new Date().getTime();
    $scope.lastContent = null;

    $scope.$watch("textareaValue", function(newValue, oldValue) {
        $scope.watcherTime = new Date().getTime();
        $scope.Content = newValue;
    });

    $scope.checkInput = function(){
        if($scope.lastContent !== $scope.Content) {
            console.log("=============");
            console.log(" $scope.lastContent : ", $scope.lastContent);
            console.log(" $scope.Content : ", $scope.Content);

            if($scope.Content) {
                sendChange({"Content" : $scope.Content})
                    .then(function(data) {
                        console.log("data : ", data)
                    }).catch(function(error) {
                    console.log("err : ", error);
                });
            }

        }
    };

    setInterval(function() {
        $scope.checkInput();
        $scope.lastContent = $scope.Content;
    },5000);

    function sendChange(params) {
        var requestData = {
            method: "POST",
            url: 'http://127.0.0.1:8010/update'
        };

        if (angular.isDefined(params)) {
            requestData['dataType'] = 'json';
            requestData['data'] = params;
        }
        console.log("requestData : ", requestData);
        return $http(requestData);
    }

}

