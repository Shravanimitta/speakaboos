'use strict';

/**
 * @ngdoc function
 * @name speakaboosProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the speakaboosProjectApp
 */
angular.module('speakaboosProjectApp')
  .controller('MainCtrl', function ($scope) {
	
    $scope.book_names_data = {
        "POPULAR CHARACTERS" : [ {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"} ],
        "BEDTIME STORIES" : [ {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"} ],
        "NURSERY RHYMES" : [ {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"} ],
        "NONFICTION" : [ {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"} ],
        "PRINCESS" : [ {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"} ],
        "SONGS" : [ {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path : "images/thomas.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"}, {path: "images/robot.png"}, {path : "images/star.png"}, {path : "images/colors.png"}, {path : "images/wild.png"} ]
    };

	$scope.categories = {selected: "POPULAR CHARACTERS",
        items : [
            {name: "POPULAR CHARACTERS"}, 
            {name: "BEDTIME STORIES"}, 
            {name: "NURSERY RHYMES"},
            {name: "NONFICTION"},
            {name: "PRINCESS"},
            {name: "SONGS"}
         ]
    };
    $scope.book_names = $scope.book_names_data[$scope.categories.selected];

    $scope.changeCategory = function(itemName){
        $scope.categories.selected=itemName;
        $scope.book_names = $scope.book_names_data[itemName];
    }
});
