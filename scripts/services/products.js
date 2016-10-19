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
		var setCategories = function(category) {
			categories.push(category);
		};

		var getProductById = function(id) {
			var products = getProducts();
			// Get the first array
			products = products[0];
			// Convert our param from string to integer
			var paramInt = parseInt(id)

			for (var i = 0; i < products.length; i++) {
				if (products[i].id === paramInt) {
					// Return the object which id matches the param
					return products[i];
				}
			}
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
			// If the product is not in the cart, add it
			if( !isInCart(product) ) {
				productsInCart.push(product);
				toast.show("Product added to cart");
				return;
			}
			dialog.show("This product is already in the cart");
		};

		// Delete a single product to the cart array
		var deleteProductFromCart = function(product) {
			productsInCart.splice(product, 1);
		};

		// Check wether or not a product is in the cart
		var isInCart = function(obj) {
			var products = getProductsInCart();
			for (var i = 0; i < products.length; i++) {
				if( products[i] === obj ) {
					return true;
				}
			}
			return false;
		}

		return {
			fetchProducts: fetchProducts,
			getProducts: getProducts,
			setProducts: setProducts,
			getCategories: getCategories,
			setCategories: setCategories,
			getProductById: getProductById,
			getProductsInCart: getProductsInCart,
			addToCart: addToCart,
			deleteProductFromCart: deleteProductFromCart
		}
	}])