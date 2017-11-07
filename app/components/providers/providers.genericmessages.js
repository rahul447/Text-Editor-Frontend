angular.module('providers')
    .provider('genericMessages', [genericMessagesProvider]);

function genericMessagesProvider() {
    this.$get = function() {
        var genericMessages = {
            'default': {
                'message': 'Oops. Something went wrong. Please try again later.'
            },
            '200': {
                'message': 'Successfully done.'
            },
            '400': {
                'message': 'Invalid request, server cannot process the request.'
            },
            '500': {
                'message': 'Internal sever error occurred. Please try again.'
            },
            '503': {
                'message': 'The server is currently unavailable.'
            }
        };
        return genericMessages;
    };
}
