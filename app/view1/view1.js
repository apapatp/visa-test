'use strict';

let app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

app.controller('View1Ctrl', function($scope) {
  $scope.items = [
    {
      name: "item1",
      arrowPosition: "left: 42%",
      selected: false,
      toggle: false
    },
    {
      name: "item2",
      arrowPosition: 0,
      selected: false,
      toggle: false
    },
    {
      name: "item3",
      arrowPosition: 0,
      selected: false,
      toggle: false
    },
    {
      name: "item4",
      arrowPosition: 0,
      selected: false,
      toggle: false
    },
    {
      name: "item5",
      arrowPosition: 0,
      selected: false,
      toggle: false
    }
  ]
  $scope.showSubNav = function($event, itemName){
    console.log("This is event ", $event.pageX);
    $scope.items.forEach(function(item){
      if(itemName === item.name){
        console.log("Yess!!!!!");
        item.toggle = !item.toggle;
        // item.arrowPosition = "left: " + $event.pageX + "px";
      }else{
        console.log("noooo");
      }
    });
    console.log("Yo ", $event, " and scope toggle is ", $scope.items);
  };
});

// .directive('subnav', function($scope){
//   restrict: "E",
//   link: function($scope, element, attrs) {
//     element.html('<div>Hello World</div>');
//   }
// });
