ticTacToe.controller('GameController', ['$scope', '$routeParams', '$location', GameControllerFunction]);

function GameControllerFunction($scope, $routeParams, $location){
	//Tic Tac Toe Cells
	var cell1 = false,
	cell2 = false,
	cell3 = false,
	cell4 = false,
	cell5 = false,
	cell6 = false,
	cell7 = false,
	cell8 = false,
	cell9 = false;

	//Handles Title and Misuse of Route Params.
	switch($routeParams.who){
		case "human":
			$scope.title = "Human Vs. Human";
			break

		case "computer":
			$scope.title = "Human Vs. Computer";
			break
		default:
			alert('That is not a valid URL.');
			$location.path('/');
			break
	}

	//handles whether a cell has been clicked
	$scope.cellClick = function(cellNumber) {
		switch(cellNumber){
			case 1:
				cell1 = true;
				checkWinner();
				break
			case 2:
				cell2 = true;
				checkWinner();
				break
			case 3:
				cell3 = true;
				checkWinner();
				break
			case 4:
				cell4 = true;
				checkWinner();
				break
			case 5:
				cell5 = true;
				checkWinner();
				break
			case 6:
				cell6 = true;
				checkWinner();
				break
			case 7:
				cell7 = true;
				checkWinner();
				break
			case 8:
				cell8 = true;
				checkWinner();
				break
			case 9:
				cell9 = true;
				checkWinner();
				break
		}
	}

	//Checks for winner.
	function checkWinner(){
		if(cell1 && cell2 && cell3){
			alert("winner!");
		}
	}

	//Currenty the game does not take player turns into account. 
	//I need to pick that up tomorrow and create a function that switches players.
}