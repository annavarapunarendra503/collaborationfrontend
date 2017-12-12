/**
 * JobController
 */
app.controller('JobController',function($scope,JobService,$location) {
	
	$scope.addJob=function(){
		JobService.addJob($scope.job).then(
				function(response){
					alert("Job Details Posted Succssfully:")
					
					$location.path('/home')
				},function(response){
					if(response.status==401){
						if(response.data.code==6)
							alert("access Denied")}
							else{
								$scope.erroe=response.data
								$location.path('/login')
							}
						if(response.status==500){
							$scope.error=response.data
							$location.path('/addjob')
						
					}
					
					
				})
		
	}
	$scope.getJob=function(jobId){
		$scope.showDetails=true;
		JobService.getJob(jobId).then(function(response){
			$scope.job=response.data
		},function(response){
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
			}
		})
	}
	
	
	function getAllJobs(){
		
		JobService.getAllJobs().then(function(response) {
		$scope.persons=response.data
		},function(response){
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
		}
			
			
		})
		
	}
	
	getAllJobs()
	
	
})
