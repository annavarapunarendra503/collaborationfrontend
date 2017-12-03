/**
 * 
 */
app.factory('PersonService',function($http)
		{
			var personService={}
			personService.getAllPersons=function(){
				return $htp.get("http://localhost:8080/middleware/getallpersons")
			}
		
		return personService;
		
		
		})
		
		