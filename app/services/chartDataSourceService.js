app.service('chartDataSourceService', function() {
	return {
		getDataSource: function getDataSource(frequencyMap) {
			var letters = Object.keys(frequencyMap),
				i = 0,
				length = letters.length,
				dataSource = [];

			letters.sort();

			for (i; i < length; i++) {
				dataSource.push({
					category: letters[i],
					value: frequencyMap[letters[i]]
				});
			}

			return dataSource;
		}
	}
});