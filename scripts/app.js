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
	});

var Dialog = function() {
	var overlay = document.getElementById("overlay");
	var dialog = document.getElementById("dialog");
	var message = document.querySelector("#dialog > .message");
	return {
		show: function(msg) {
			overlay.classList.add("active");
			message.innerHTML = msg;
			dialog.style.display = "block";
		},
		close: function() {
			overlay.classList.remove("active");
			dialog.style.display = "none";
		}
	}
}
var dialog = new Dialog();