'use strict';

var expect = require('chai').expect;
var simplifapi = require('../main');

var placeholder_1 = {"userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}

describe('#simplifapi', function() {
  var client = simplifapi.createApi('https://jsonplaceholder.typicode.com/');
  it('should get one json', function() {
        client.get('posts/1').then(function(result){
          expect(result).to.equal(placeholder_1);
        })
    });
});
