'use strict';

let app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

app.controller('View1Ctrl', function($scope) {
  $scope.navIsOpen = false;
  $scope.items = [
    {
      name: "item1",
      arrowPosition: "",
      selected: false,
      arrowDirection: 'left',
      toggle: false
    },
    {
      name: "item2",
      arrowPosition: 0,
      arrowDirection: '',
      selected: false,
      toggle: false
    },
    {
      name: "item3",
      arrowPosition: 0,
      arrowDirection: '',
      selected: false,
      toggle: false
    },
    {
      name: "item4",
      arrowPosition: 0,
      arrowDirection: '',
      selected: false,
      toggle: false
    },
    {
      name: "item5",
      arrowPosition: 0,
      arrowDirection: '',
      selected: false,
      toggle: false
    }
  ];

  $scope.showSubNav = function($event, itemName){
    console.log("This is event ", $event.pageX, " event is ", $event);
    $scope.items.forEach(function(item){
      if(itemName === item.name){
        item.selected = true;
        item.toggle = !item.toggle;
        item.arrowPosition = $event.target.offsetLeft + ($event.target.offsetWidth / 2.5);
      }else{
        item.selected = false;
        item.toggle = false;
      }
    });
  };
});

// .directive('subnav', function($scope){
//   restrict: "E",
//   link: function($scope, element, attrs) {
//     element.html('<div>Hello World</div>');
//   }
// });
