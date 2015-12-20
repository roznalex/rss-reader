app.service('validationService', function() {
	var urlPattern = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

	function channelAlreadyExists(channels, url) {
		var result = false;

		channels.forEach(function(channel) {
			if (channel.url === url) {
				result = true;
				return;
			}
		});
		return result;
	}

	return {
		validate: function(channels, url) {
			return !(channelAlreadyExists(channels, url) || url.search(urlPattern) === -1);
		}
	}
});