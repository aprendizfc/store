angular.module("Store")
	.controller("ProductsCtrl", ["$scope", "productsService", function ProductsCtrl($scope, productsService) {
		$scope.myCart = productsService.getProductsInCart();

		// Retrieve products from json file
		productsService.fetchProducts()
			.then(function(response) {
				var products = response.data.products;
				var categories = response.data.categories;

				// Iterate through the entire product array to convert
				// string price to integer
				for (var i = 0; i < products.length; i++) {
					var price = products[i].price;
					// Remove all non numeric characters
					price = price.replace(/\D/g, '');
					// Assign new value as integer
					products[i].price = parseInt(price);
				}

				productsService.setProducts(products);
				$scope.products = productsService.getProducts();
				productsService.setCategories(categories);
				$scope.categories = productsService.getCategories();
			});

		// Add the selected product to the cart array
		$scope.addToCart = function(product) {
			productsService.addToCart(product);
		}
	}])