angular.module("Store")
	.controller("ProductDetailCtrl", ["$scope", "$stateParams", "productsService", function($scope, $stateParams, productsService) {
		// Get all the products availables in the cart
		$scope.myCart = productsService.getProductsInCart();

		// Get the route param which is the product id
		var param = $stateParams.productId;

		// Get the product based on param variable
		$scope.product = productsService.getProductById(param);

		$scope.addToCart = function(product) {
			productsService.addToCart(product);
		}
	}])