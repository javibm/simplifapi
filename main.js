request = require('request-json');

simplifapi = module.exports;

var manager = [];

simplifapi.createApi = function(url, options) {
  if (options == null) {
    options = {};
  }
  return new simplifapi.Api(url, options);
};

simplifapi.Api = (function() {
  function Api(host1, options1) {
    this.request = request.createClient(host1);
    this.host = host1;
    this.options = options1 != null ? options1 : {};
  };
  Api.prototype.multiget = function(jsonArray, apifield, field, api, callback){
    var resultArray = [];
    for(var i = 0; i < jsonArray.length; i++)
    {
      this.managedget(api + jsonArray[i][field], function(result)
      {
        if(apifield == "")
        {
          resultArray.push(result.body);
        }
        else
        {
          resultArray.push(result.body[apifield]);
        }
        if(manager.length == 0)
        {
          callback(resultArray);
        }
      });
    }
  };
  Api.prototype.get = function(path, options, callback, parse) {
    if (parse == null) {
      parse = true;
    }
    return this.request.handleRequest('GET', path, null, options, callback);
  };
  Api.prototype.managedget = function(url, callback) {
    var timestamp = new Date().getUTCMilliseconds();
    manager.push(timestamp);
    this.get(url).then(function(result){
      manager.splice(manager.indexOf(timestamp),1);
      callback(result);
    });
  };
  return Api;
})();
