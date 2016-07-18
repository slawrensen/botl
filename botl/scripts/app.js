// Define the `SharedHomeLab` module
var botlApp = angular.module('breakOnTheLake', ['ui.bootstrap', 'ngRoute']);

botlApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Home
      .when("/", { templateUrl: "parts/home.html", controller: "PageCtrl" })
      // Pages
      .when("/about", { templateUrl: "parts/about.html", controller: "PageCtrl" })
      .when("/gallery", { templateUrl: "parts/gallery.html", controller: "PageCtrl" })
      .when("/rates", { templateUrl: "parts/rates.html", controller: "PageCtrl" })
      .when("/amenities", { templateUrl: "parts/amenities.html", controller: "PageCtrl" })
      .when("/contact", { templateUrl: "parts/contact.html", controller: "PageCtrl" })
      // Blog
      .when("/blog", { templateUrl: "parts/blog.html", controller: "BlogCtrl" })
      .when("/blog/post", { templateUrl: "parts/blog_item.html", controller: "BlogCtrl" })
      // else 404
      .otherwise("/404", { templateUrl: "parts/404.html", controller: "PageCtrl" });
}]);

/**
 * Controls all other Pages
 */
botlApp.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});