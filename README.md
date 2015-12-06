# angular-yql-http-interceptor
Yahoo Query Language (YQL) Proxy Interceptor For AngularJS HTTP Service

-- What is This Module ?

You may face with AngularJS CORS problems sometimes, as discussed @ http://stackoverflow.com/search?q=angularjs+cors

You cannot send GET & POST request from client side, you should make some tricks like that http://enable-cors.org/server_expressjs.html

BUT, if the backend is not YOURS ??

Then you should use a backend app as a proxy, But YQL makes it for you as free :)

This module use YQL as a Proxy and take the control of your HTTP Requests.

-- How can I use it ?

So easy,
1. include "yql-http-interceptor.js" file to your html

2. Add it to your app as a dependency like 
angular.module('your-app-name',['yql']);

3. add yql interceptor to httpProvider
angular.module('your-app-name').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('yqlService');
}]);

After that, all your http request will be send through YQL.

ONLINE DEMO : http://ozdemirr.github.io/angular-yql-http-interceptor/example/
