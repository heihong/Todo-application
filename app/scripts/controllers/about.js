'use strict';

/**
 * @ngdoc function
 * @name projetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetApp
 */
angular.module('projetApp')
  .controller('AboutCtrl',['$scope', function ($scope) {
/*  
$scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
};
$scope.map.marker={
	center:{
		latitude:45,
		longitude:-73
	}
};*/


   
var mapOptions
 = {
      center : new google.maps.LatLng(45, -73), 
      zoom : 8

    }; 
     
var map= new google.maps.Map(document.getElementById('map'), mapOptions);

 var marker = new google.maps.Marker({
      position : new google.maps.LatLng(45,-73),
      title:"Hello World!",
      map : map,
	  icon:'/images/marker.png'

    });

   
  
     
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
