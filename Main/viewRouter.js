ticTacToe.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'Main/Views/home.html',
        controller: 'HomeController'
      }).
      when('/about', {
        templateUrl: 'Main/Views/about.html',
        controller: 'AboutController'
      }).
      when('/game/:who', {
        templateUrl: 'Main/Views/game.html',
        controller: 'GameController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);