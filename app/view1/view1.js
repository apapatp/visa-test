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
  $scope.previousSeclect = {};
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
    var classScope = $scope;
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

// app.directive('resize', [function($window) {
//   // on window, change directive
//     return function link($scope, element) {
//       var window = angular.element($window);
//       var container = element[0];
//         $scope.$watch([
//             function() { return window.width(); },
//         ],  function(values) {
//               // Handle resize event ...
//               $scope.items.forEach(function(item){
//                 if(item.selected && item.toggle){
//                   item.arrowPosition = container.offsetLeft + (container.offsetWidth / 2.5);
//                 }
//               });
//         });
//     }
// }]);
