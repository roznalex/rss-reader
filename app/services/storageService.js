app.service('storageService', function() {

	var channelList = [];

	return {
		channels: channelList,
		updateChannels: function(channelsArr) {
			if (window.localStorage && channelsArr) {
				localStorage.setItem("channels", angular.toJson(channelsArr));
			}
			channelList = channelsArr;
		},
		getChannels: function() {
			channelList = angular.fromJson(localStorage.getItem("channels"));
			return channelList ? channelList : [];
		},
		clear: function() {
			if (window.localStorage) {
				localStorage.clear();
			}
		}
	};
});