app.service('channelCacheService', ['$http', 'feedService', function($http, feedService) {
	//{url-->res}
	var channelCache = {};

	return {
		getFeed: function(url) {
			if (!channelCache[url]) {
				channelCache[url] = feedService.parseFeed(url);
			}
			return channelCache[url];
		}
	}
}]);