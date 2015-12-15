//Services
hotwireApp.service('searchCriteria',function(){
    
    this.destination="New York,NY";
    this.pickupDate="01/01/2017"
    this.dropOffDate="01/05/2017"
    this.pickupTime='10:00';
    this.dropOffTime='10:00';
});


hotwireApp.service("hotwireService",['$resource',function($resource){
    
    this.SearchResults=function(destination,pickupDate,dropOffDate,pickupTime,dropOffTime){
     
    var hotwireAPI=$resource("http://api.hotwire.com/v1/search/car",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
       return hotwireAPI.get({dest:destination,startdate:pickupDate,enddate:dropOffDate,format:'jsonp',pickuptime:pickupTime,dropofftime:dropOffTime,apikey:'qeexu7z7jq8q6b8dguevkc6s'});
    }
}])






