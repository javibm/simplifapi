'use strict';

var expect = require('chai').expect;
var simplifapi = require('../main');

var placeholder_1 = {"userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
var placeholder_2 = ['Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Leanne Graham','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Ervin Howell','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Clementine Bauch','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Patricia Lebsack','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Chelsey Dietrich','Mrs. Dennis Schulist','Chelsey Dietrich','Mrs. Dennis Schulist','Mrs. Dennis Schulist','Mrs. Dennis Schulist','Mrs. Dennis Schulist','Mrs. Dennis Schulist','Mrs. Dennis Schulist','Mrs. Dennis Schulist','Kurtis Weissnat','Mrs. Dennis Schulist','Kurtis Weissnat','Kurtis Weissnat','Kurtis Weissnat','Kurtis Weissnat','Kurtis Weissnat','Kurtis Weissnat','Kurtis Weissnat','Mrs. Dennis Schulist','Kurtis Weissnat','Kurtis Weissnat','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Nicholas Runolfsdottir V','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Glenna Reichert','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque','Clementina DuBuque' ]

var posts = [{ userId: 10, id: 99, title: 'temporibus sit alias delectus eligendi possimus magni', body: 'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia' },
             { userId: 10, id: 100,title: 'at nam consequatur ea labore ea harum', body: 'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut' } ];

describe('#simplifapi', function() {
  var client = simplifapi.createApi('https://jsonplaceholder.typicode.com/');
  it('should get one json', function() {
      client.get('posts/1').then(function(result){
        expect(result).to.equal(placeholder_1);
      })
  });

  it('should get multiple jsons', function() {
    client.multiget(posts, "name", "userId", "/users/", function(result){
      expect(result).to.equal(placeholder_2);
    });
  });
});
