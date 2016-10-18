angular.module("Store")
	.controller("ProductsCtrl", ["$scope", "productsService", function ProductsCtrl($scope, productsService) {
		$scope.myCart = productsService.getProductsInCart();
		$scope.categoryFilter = "all";

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

	.filter("filterByCategory", function() {
		return function(items, category) {
			var filtered = [];
			return filter(items, filtered, category);
		};
	})

function filter(items, arr, category) {
	switch( category ) {
		case "all":
			arr = items;
			break;
		case "available":
		case "best_seller":
			for (var i = 0; i < items.length; i++) {
				if (items[i][category]) {
					arr.push(items[i]);
				};
			};
			break;
		case "not_available":
			for (var i = 0; i < items.length; i++) {
				// Push object to filtered array if not available
				if (!items[i].available) {
					arr.push(items[i]);
				};
			};
			break;
		case "30000":
			// Convert string price to integer
			var price = parseInt(category);
			for (var i = 0; i < items.length; i++) {
				if (items[i].price > price) {
					arr.push(items[i]);
				};
			};
			break;
		case "10000":
			// Convert string price to integer
			var price = parseInt(category);
			for (var i = 0; i < items.length; i++) {
				if (items[i].price < price) {
					arr.push(items[i]);
				};
			};
			break;
		default:
			for (var i = 0; i < items.length; i++) {
				// Get the categories array of the current object
				var categories = items[i].categories;

				for (var j = 0; j < categories.length; j++) {
					// Check if the category selected by user match one of
					// the current object
					if(categories[j] == category) {
						arr.push(items[i]);
					}
				}
			};
	};
	return arr;
}