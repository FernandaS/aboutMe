var app = angular.module('aboutMeBlog', ['textAngular']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});