app.controller('rssController', ['$scope', function($scope) {
	var viewportHeight = $(window).height();
	$("#splitter").height(viewportHeight);
}]);