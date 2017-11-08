angular.module('providers')
  .provider('config', [configProvider]);

function configProvider() {

  var config = window.__config || {};

  this.$get = function() {
    return {
      apiEndPoint       : config.apiEndPoint,
      awsIotEndpoint    : config.awsIotEndpoint,
      awsAccessKey      : config.awsAccessKey,
      awsSecretKey      : config.awsSecretKey,
      awsRegionName     : config.awsRegionName,
      SUPPORT_USER_ROLE : config.SUPPORT_USER_ROLE,
      GLOBAL_ENV_KEY    : config.GLOBAL_ENV_KEY,
      GOOGLE_CLIENTID   : config.GOOGLE_CLIENTID
    };
  };
}
