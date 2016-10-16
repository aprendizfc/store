angular.module("Store", ["ui.router"])
	.constant("api", {
		url: "data.json"
	})
	.config(function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		// Set up the states
		$stateProvider
			.state("products", {
				url: "/",
				templateUrl: "./templates/products.html",
				controller: "ProductsCtrl"
			})
			.state("my-cart", {
				url: "/my-cart",
				templateUrl: "./templates/my-cart.html",
				controller: "CartCtrl"
			})
	})