var app = angular.module('aboutMeBlog');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'P1PyJazhm1wUJgM6p35RQ8NYs41U5jVchUKUcEP9', 'X-Parse-REST-API-Key': 'rbgB6paNZnQmCfNLLSKMG9jeQlrpNpWW3e7QNUSp'}
      return config;
    }
  };
});