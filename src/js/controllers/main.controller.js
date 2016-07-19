import $ from "jquery";

function MainController ($scope) {
	$scope.currCount = 0;
	$scope.count = function (currCount) {
		return $scope.currCount = currCount + 1;
	}
	$scope.likes = function (currCount) {
		if (currCount === 1) {
			return "Like"
		} else {
			return "Likes"
		}
	}
}

MainController.$inject = ['$scope'];
export { MainController };