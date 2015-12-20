app.service('statisticService', function() {
	var statistic = {
		feedAmount: 0,
		channelAmount: 0,
		letterFrequency: {}
	};

	function getLetters(content) {
		var message = content.split(/<.+>/)[0].toLowerCase();
		return message.replace(/[^a-z]/g, '').split('');
	}

	function figureOutFrequency(letters) {
		var lettersMap = {},
			length = letters.length;

		letters.forEach(function(letter) {
			if (lettersMap[letter]) {
				lettersMap[letter] += 1;
			} else {
				lettersMap[letter] = 1;
			}
		});

		for (var prop in lettersMap) {
			if (lettersMap.hasOwnProperty(prop)) {
				lettersMap[prop] = ((lettersMap[prop] / length) * 100).toFixed(2); 
			}
		}
		return lettersMap;
	}

	return {
		gatherChannelAmount: function(channels) {
			statistic.channelAmount = channels.length;
		},
		gatherFeedAmount: function(feeds) {
			statistic.feedAmount = feeds.length;
		},
		gatherLetterFrequency: function(content) {
			var letters = getLetters(content);
			statistic.letterFrequency = figureOutFrequency(letters);
		},
		getStatistic: function() {
			return statistic;
		}
	}
});