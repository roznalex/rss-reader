app.controller('statisticController', ['$scope', 'statisticService', 'chartDataSourceService',
	function($scope, statisticService, chartDataSourceService) {

		function init() {
			$scope.statistic = statisticService.getStatistic();
		}

		function chartInit() {
			var frequencyMap = $scope.statistic.letterFrequency,
				dataSource = chartDataSourceService.getDataSource(frequencyMap);

				if(dataSource.length === 0) {
					return false;
				}

			$scope.chart = {
				title: {
					text: "Letters Frequency"
				},
				seriesDefaults: {
					labels: {
						visible: true,
						background: "transparent",
						template: "#= category #: #= value#%"
					}
				},
				series: [{
					type: "pie",
					data: dataSource
				}],
				tooltip: {
					visible: true,
					format: "{0}%"
				}
			}

		}

		init();

		$scope.$on('feed:selected', function() {
			chartInit();
		});

		$scope.$on('channel:added', function() {
			init();
		});

		$scope.$on('channel:deleted', function() {
			init();
		});
	}
]);