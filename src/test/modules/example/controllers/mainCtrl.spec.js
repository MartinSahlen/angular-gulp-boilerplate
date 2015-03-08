describe('example.controllers.MainController', function() {
  beforeEach(module('example'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.test', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('example.controllers.MainController', { $scope: $scope });
    });

    it('0 equals 0', function() {
      expect(0).toEqual(0);
    });

    it('1 equals 1', function() {
      expect(0).toEqual(0);
    });

    it('$scope.message is "Hello World!"', function() {
      expect($scope.message).toEqual('Hello World!');
    });

    it('1 does not equal 0', function() {
      expect(1).not.toEqual(0);
    });
  });
});
