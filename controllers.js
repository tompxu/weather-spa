myApp.controller('homeController',['$scope','cityService','$location', function($scope, cityService, $location){
	$scope.city=cityService.city;
	$scope.$watch('city',function(){
		cityService.city=$scope.city;
	});
	$scope.submit=function(){
		$location.path("/forcast");	
	};
}]);

myApp.controller('cityController', ['$scope', 'cityService','$resource','$routeParams', function($scope, cityService, $resource, $routeParams) {
    
    $scope.city = cityService.city;
	$scope.convertToFahrenheit=function(degK)
	{
		return Math.round((1.8*(degK-273))+32);
	};
	$scope.convertToDate=function(dt)
	{
		return new Date(dt*1000);	
	};
	$scope.timepoints=$routeParams.timepoints || 5;
	$scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast",{callback: "JSON_CALLBACK"},{get:{method:"JSONP"}});
    $scope.weatherResult=$scope.weatherAPI.get({q:$scope.city,mode:'json',appid:'de9d583462db9caea601dba04efe6f5a'});
//    console.log($scope.weatherResult);
	
    
}]);