var app = angular.module('aboutMeBlog');

app.service('parseService', function($http, $q){

	var url = "https://api.parse.com/1/classes/blogs"

// this.getBlog = function(){

//   return $http({
//     method: "GET",
//     url: "https://api.parse.com/1/classes/blogs"
//   });
// };
// you can write the same function like this

this.getBlog = function(){
	var deffered = $q.defer();
	$http.get(url + '?order = -createdAt')
		.then(function(stuffThatIGot){
			// console.log(stuffThatIGot)= you can do this part to show where the date came from
			deffered.resolve(stuffThatIGot.data.results)
		})

		return deffered.promise
}


//post is the method, url is the URL, and message is the data
this.postBlog = function(message){
	return $http.post(url, message)
    
  }




this.deleteBlog = function(thing){
	return $http.delete(url + '/' + thing.objectId)
    
}



});
