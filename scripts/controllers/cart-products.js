angular.module("Store")
	.controller("CartCtrl", ["$scope", "productsService", function($scope, productsService) {
		$scope.cartProducts = productsService.getProductsInCart();

		$scope.deleteFromCart = function(index) {
			productsService.deleteProductFromCart(index);
		}
	}])