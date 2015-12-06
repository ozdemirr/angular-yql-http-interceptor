'use strict';

angular.module('yql',[]);

angular.module('yql').factory('yqlService',function() {

    var yqlService = {};

    yqlService.request = function(config) {

        if(config.method == "POST"){

            config.method = "GET";

            var postData = "";

            if(angular.isDefined(config.data)){
                postData = yqlService.object2Query(config.data);
                delete config.data;
            }

            var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + yqlService.encode('select * from jsonpost where url="' + config.url + '" and postdata="' + postData +'" and xpath="//p"') + '&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=';

        }else{

            var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + yqlService.encode('select * from json where url="' + config.url + '"') + '&format=json';

        }

        config.url = yql;

        return config;

    };

    yqlService.response = function(data){

        if(data.data.query.results){
            if(angular.isDefined(data.data.query.results.json)){
                return data.data.query.results.json;
            }else{
                return data.data.query.results;
            }
        }else{
           return data;
        }

    };


    yqlService.encode = function(str) {
        var result = "";

        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == " ") result += "+";
            else result += str.charAt(i);
        }

        return escape(result);
    };

    yqlService.object2Query = function(object){

        var query = "";

        angular.forEach(object, function(value, key) {
            query = query + key + '=' + value + "&";
        });

        return query;

    };

    return yqlService;

});