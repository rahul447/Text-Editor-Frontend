'use strict';

angular.module('editor').controller('editorCtrl', ['$scope', 'editorService', editorCtrl]);

function editorCtrl($scope, editorService) {

    $scope.Content = null;
    $scope.watcherTime = new Date().getTime();
    $scope.lastContent = null;

    $scope.$watch("textareaValue", function(newValue) {
        $scope.watcherTime = new Date().getTime();
        $scope.Content = newValue;
    });

    $scope.checkInput = function(){
        if($scope.lastContent !== $scope.Content) {
            if($scope.Content) {
                console.log("CHANGE DETECTED");
                editorService.updateChange({"Content" : $scope.Content})
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
    },4000);
}

