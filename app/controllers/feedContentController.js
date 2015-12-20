app.controller('feedContentController', ['$scope', '$sce', 'statisticService',
	function($scope, $sce, statisticService) {
		$scope.$on('feed:selected', function(e, feed) {
			var description = Array.isArray(feed.description) ? feed.description[0] : feed.description;
			$scope.content = $sce.trustAsHtml(description);
			statisticService.gatherLetterFrequency(description);
		});
	}
]);