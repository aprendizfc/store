angular.module("Store")
	.controller("ProductsCtrl", ["$scope", "productsService", function ProductsCtrl($scope, productsService) {
		$scope.myCart = productsService.getProductsInCart();

		// Retrieve products from json file
		productsService.fetchProducts()
			.then(function(response) {
				productsService.setProducts(response.data.products);
				$scope.products = productsService.getProducts();
				productsService.setCategories(response.data.categories);
				$scope.categories = productsService.getCategories();
			});

		// Add the selected product to the cart array
		$scope.addToCart = function(product) {
			productsService.addToCart(product);
		}
	}])