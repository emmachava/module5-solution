(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController)
.constant('ApiBasePath', "https://emmachava2-course5.herokuapp.com")

MyInfoController.$inject = ['item','ApiBasePath'];
function MyInfoController(item,ApiBasePath) {
  var infocontroller = this;
  infocontroller.menuItems = item;
  infocontroller.apiBase = ApiBasePath;
}

})();
