app.controller('channelController', ['$rootScope', '$scope', 'storageService',
	'validationService', 'statisticService',
	function($rootScope, $scope, storageService, validationService, statisticService) {

		$scope.channels = storageService.getChannels();
		statisticService.gatherChannelAmount($scope.channels);

		$scope.addChannel = function(e) {
			var channel = {
					url: $scope.url
				},
				channels = $scope.channels,
				isValid = validationService.validate(channels, channel.url);

			if (!isValid) {
				alert('Channel already exists or url is incorrect');
				return false;
			}

			e.preventDefault();
			$scope.url = '';
			channels.push(channel);
			storageService.updateChannels(channels);
			statisticService.gatherChannelAmount(channels);
			$rootScope.$broadcast('channel:added', channel);
		};

		$scope.removeChannel = function(e, url) {
			var channels = $scope.channels;
			e.preventDefault();
			channels.forEach(function(channel, index) {
				if (channel.url === url) {
					channels.splice(index, 1);
					statisticService.gatherChannelAmount(channels);
					$rootScope.$broadcast('channel:deleted', channel);
				}
			});

			storageService.updateChannels(channels);
		};

		$scope.selectChannel = function(e, channel) {
			e.preventDefault();
			$rootScope.$broadcast('channel:selected', channel);
		}
	}
]);