(function () {
'use strict';

angular.module('public')
.service('SignUpService',SignUpService)
.constant('ApiBasePath', "https://emmachava2-course5.herokuapp.com");

SignUpService.$inject = ['$http','ApiBasePath']
function SignUpService ($http, ApiBasePath) {
  var signDataService = this;
  var favoriteDish = "";

  signDataService.storeFavoriteDish = function(favDish) {
    signDataService.favoriteDish = favDish;
  }

  signDataService.getFavoriteDishDescription = function(favDish) {
    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items/"+ favDish + ".json")
        });

      return response;
  }

  signDataService.getFavoriteDish = function () {
      return signDataService.getFavoriteDishDescription(signDataService.favoriteDish);
  }

}

})();
