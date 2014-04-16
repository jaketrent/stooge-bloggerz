'use strict';

angular.module('stoogeBloggerzApp').controller('BlogCtrl', function ($scope, Blog, Author) {
  $scope.blogPosts = Blog.getPosts();
  $scope.authors = Author.getAuthors();
  $scope.setActiveAuthor = function (author) {
    $scope.activeAuthor = author;
  };
  $scope.isActiveAuthor = function (author) {
    return author === $scope.activeAuthor;
  };
});
