myApp.directive("weatherReport", function(){
	return {
		restrict:'E',
		templateUrl:'directives/weatherReport.html',
		replace:true,
		scope:{
			weatherTimepoint: "=",
			convertToStandard:"&",
			convertToADate:"&",
			dateFormat:"@"
		}
	}
	
});
	