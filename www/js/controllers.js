angular.module('gp-nashvesTN.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout){
  'use strict';

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.scan = function(){
    console.log('scan!');
    cordova.plugins.barcodeScanner.scan(
      function(result){
        alert('We got a barcode\n' +
          'Result: ' + result.text + '\n' +
          'Format: ' + result.format + '\n' +
          'Cancelled: ' + result.cancelled);
      },

      function(error){
        alert('Scanning failed: ' + error);
      }
    );
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function(){
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function(){
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(){
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function(){
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope){
  'use strict';

  $scope.playlists = [
    {title: 'Reggae', id: 1},
    {title: 'Chill', id: 2},
    {title: 'Dubstep', id: 3},
    {title: 'Indie', id: 4},
    {title: 'Rap', id: 5},
    {title: 'Cowbell', id: 6}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams){
});
