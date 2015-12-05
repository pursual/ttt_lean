ticTacToe.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'Main/Views/home.html',
        controller: 'HomeController as home'
      }).
      when('/about', {
        templateUrl: 'Main/Views/about.html',
        controller: 'AboutController as about'
      }).
      when('/game/:who', {
        templateUrl: 'Main/Views/game.html',
        controller: 'GameController as game'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);