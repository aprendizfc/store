angular.module("Store")
	.directive("imageLoaded", function () {
		return {
			restrict: "A",
			scope:{imageLoaded:"@"},
			link: function postLink(scope, element, attrs) {
				element.bind("load", function() {
					element.attr("src", scope.imageLoaded);
					element.unbind("load");
				});
			}
		};
	})