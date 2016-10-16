angular.module("Store")
	.service("productsService", ["api", "$http", function (api, $http) {
		// Shared data
		var productsList = [];
		var categories = [];
		var productsInCart = [];

		// Return the entire products array
		var getProducts = function() {
			return productsList;
		};

		// Populate the products array
		var setProducts = function(products) {
			productsList.push(products);
		};

		// Return categories
		var getCategories = function() {
			return categories;
		};

		// Populate the category array
		var setCategories = function(categories) {
			categories.push(categories);
		};

		// Return an http request to fetch data later
		var fetchProducts = function() {
			return $http({
				method: "GET",
				url: api.url
			});
		};

		// Return all the products available in the cart array
		var getProductsInCart = function() {
			return productsInCart;
		};

		// Add a single product to the cart array
		var addToCart = function(product) {
			productsInCart.push(product);
		};

		return {
			fetchProducts: fetchProducts,
			getProducts: getProducts,
			setProducts: setProducts,
			getCategories: getCategories,
			setCategories: setCategories,
			getProductsInCart: getProductsInCart,
			addToCart: addToCart
		}
	}])