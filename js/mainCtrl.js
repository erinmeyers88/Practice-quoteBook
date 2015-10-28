angular.module("quoteBook")
	.controller("mainCtrl", function ($scope, dataService) {
		
		$scope.showNewInput = false;
		
		$scope.getQuotes = function () {
			$scope.quotes = dataService.getData();
		}();
		
		
		$scope.add = function () {
			$scope.showNewInput = !$scope.showNewInput;
			if ($scope.newQuote.text) {
				$scope.quotes = dataService.addData($scope.newQuote);
				$scope.newQuote = {};
			}
		}
		
		
		
	});