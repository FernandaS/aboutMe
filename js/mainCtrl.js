var app = angular.module('aboutMeBlog');

app.controller('mainCtrl', function($scope, parseService){

$scope.blogPosts = [];

$scope.getParseBlog = function(){
  parseService.getBlog()
    .then(function(dataFromResolvedPromise){
      $scope.blogPosts = dataFromResolvedPromise;
    })
  };


// $scope.message equals to ng-model
$scope.postParseBlog = function(){
  parseService.postBlog({content: $scope.message})
    .then(function(){
     $scope.getParseBlog();
      $scope.message = '';

    })

  }

$scope.deletePost = function(){
	parseService.deleteBlog(this.post)
	.then(function(){
		$scope.getParseBlog();
	})
}

$scope.editPost = function(){
	//put the post int he text-Angular box
	$scope.blogcontent = this.post.content;
	//store the obejectId for the post that is being edited
	IdofThePost = this.post.obejectId;
	//then you need to do a PUT request to Parse by the objectId
	
}



});