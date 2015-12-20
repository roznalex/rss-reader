app.service('feedService', ['$http', function($http) {

	return {
		parseFeed: function(url) {
			return $http.jsonp('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20\''
	 				+ encodeURIComponent(url)
	 				+ '\'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK');
		}
	}
}]);