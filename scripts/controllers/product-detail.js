angular.module("Store")
	.controller("ProductDetailCtrl", ["$scope", "$stateParams", "productsService", function($scope, $stateParams, productsService) {
		$scope.myCart = productsService.getProductsInCart();
		var param = $stateParams.productId;

		$scope.product = productsService.getProductById(param);

		$scope.addToCart = function(product) {
			productsService.addToCart(product);
		}
	}])