app.controller('feedController', ['$rootScope', '$scope', 'channelCacheService', 'statisticService',
	function($rootScope, $scope, channelCacheService, statisticService) {

		var selectedChannelUrl;

		$scope.selectFeed = function(e, feed) {
			e.preventDefault();
			$rootScope.$broadcast('feed:selected', feed);
		}

		$scope.$on('channel:selected', function(e, channel) {
			selectedChannelUrl = channel.url;
			parseFeed(selectedChannelUrl);
		});

		function parseFeed(url) {
			var channelPromise = channelCacheService.getFeed(url);

			channelPromise.then(function(res) {
				var results = res.data.query.results;

				if (!results) {
					$scope.feeds = [];
				} else {
					$scope.feeds = results.rss.channel.item;
				}
				statisticService.gatherFeedAmount($scope.feeds);
			});
		}
	}
]);