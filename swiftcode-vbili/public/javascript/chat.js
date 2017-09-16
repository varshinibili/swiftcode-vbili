var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){
$scope.messages = [
    {   sender:"BOT",
        text: "Hey,supppp???",
        time:"1.12 PM"
    },
    {
      sender:"USER",
        text: "Hey,,,Nothing great dude",
        time:"1.15 PM"
    },
];
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
      var jsonData = JSON.parse(event.data);
      jsonData.time
      console.log(jsonData);
  };

});