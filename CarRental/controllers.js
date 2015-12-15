//Controller
hotwireApp.controller('homeController',['$scope','$location','searchCriteria',function($scope,$location,searchCriteria){
    $scope.destination = searchCriteria.destination;
    $scope.pickupDate= '';
    $scope.dropOffDate = '';
    $scope.pickupTime='';
    $scope.dropOffTime='';
    $scope.$watch('destination',function(){
        searchCriteria.destination=$scope.destination;
        
    });
     $scope.$watch('pickupDate',function(){
        searchCriteria.pickupDate=$scope.pickupDate;
        
    });
     $scope.$watch('dropOffDate',function(){
        searchCriteria.dropOffDate=$scope.dropOffDate;
        
    });
     $scope.$watch('pickupTime',function(){
        searchCriteria.pickupTime=$scope.pickupTime;
        
    });
     $scope.$watch('dropOffTime',function(){
        searchCriteria.dropOffTime=$scope.dropOffTime;
        
    });
    
    $scope.submit=function(){
    $location.path("/search");
    };
    
}]);

hotwireApp.controller('searchResultController',['$scope','$routeParams','$filter','hotwireService','searchCriteria',function($scope,$routeParams,$filter,hotwireService,searchCriteria){
      $scope.destination = searchCriteria.destination;
      $scope.pickupDate = searchCriteria.pickupDate;
      $scope.dropOffDate = searchCriteria.dropOffDate;
      $scope.pickupTime=searchCriteria.pickupTime;
      $scope.dropOffTime = searchCriteria.dropOffTime;
      var picupdate = $filter('date')($scope.pickupDate,"MM/dd/yyyy");
      var dropOffDate = $filter('date')($scope.dropOffDate,"MM/dd/yyyy");
      var pickupTime =  $filter('date')($scope.pickupTime,"HH:mm");
      var dropOffTime =  $filter('date')($scope.dropOffTime,"HH:mm");
      $scope.weatherResult=hotwireService.SearchResults($scope.destination,picupdate,dropOffDate,pickupTime,dropOffTime);
      
}]);