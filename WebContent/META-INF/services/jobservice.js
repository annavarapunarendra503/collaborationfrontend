/**
 * JobService
 */

app.factory('JobService',function($http) {

	var jobService={}
	jobService.addJob=function(job){
		
		return $http.post("http://localhost:8080/collaborationmiddleware/savejob",job);
	}
	
jobService.getAllJobs=function(){
		
		return $http.post("http://localhost:8080/collaborationmiddleware/alljobs");
}
		
		jobService.getJob=function(jobId){
			
			return $http.post("http://localhost:8080/collaborationmiddleware/getjob/"+jobId);
		}
	return jobService;
})
