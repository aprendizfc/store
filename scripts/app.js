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
			.state("item", {
				url: "/item/:productId",
				templateUrl: "./templates/product-detail.html",
				controller: "ProductDetailCtrl"
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
};
var Toast = function() {
	var toast = document.querySelector(".toast");
	return {
		show: function(msg) {
			toast.innerHTML = msg;
			toast.classList.add("active");
			this.close();
		},
		close: function() {
			setTimeout(function() {
				toast.innerHTML = "";
				toast.classList.remove("active");
			}, 3000);
		}
	}
};
var dialog = new Dialog();
var toast = new Toast();