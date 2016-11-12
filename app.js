/* From tutorial: https://thinkster.io/mean-stack-tutorial
*/
var app = angular.module('flapperNews', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'Hello world!';
  $scope.posts = posts.posts;

  // function add post
  $scope.addPost = function(){
    if (!$scope.title || $scope.title === '') {return;}
    $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
    $scope.title = '';
    $scope.link = '';
  };

  // function increament upvotes
  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };
}]);

app.factory('posts', [
  function() {
    var o = {
      posts: [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      ]
    };

    return o;
  }
])