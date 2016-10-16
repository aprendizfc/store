angular.module("Store")
	.controller("ProductsCtrl", ["$scope", "productsService", function ProductsCtrl($scope, productsService) {
		$scope.products = [];
		$scope.myCart = productsService.getProductsInCart();

		// Retrieve products from json file
		productsService.fetchProducts()
			.then(function(response) {
				productsService.setProducts(response.data.products);
				$scope.products = productsService.getProducts();
			});

		// Add the selected product to the cart array
		$scope.addToCart = function(product) {
			productsService.addToCart(product);
		}
	}])