ticTacToe.controller('GameController', ['$scope', '$routeParams', '$location', GameControllerFunction]);

function GameControllerFunction($scope, $routeParams, $location){
	//Handles Title and Misuse of Route Params.
	switch($routeParams.who){
		case "human":
			$scope.title = "Human Vs. Human";
			$scope.directions = "When playing agaisnt another person you can use oldest person goes first, a coin toss, or just about anthing to determine who goes first. You can also choose 'x or o.'";
			break

		case "computer":
			$scope.title = "Human Vs. Computer";
			$scope.directions = "When playing agaisnt the computer, the human goes first. It's the only way the (midly) entertain the computer. You can still choose 'x or o.'"
			break
		default:
			alert('That is not a valid URL.');
			$location.path('/');
			break
	}
	//Tic Tac Toe Cell Class
	function cell(selected, player) {

	  this.selected = selected;
	  this.player = player;
	  this.cellIcon = '';

	  this.setSelected = function setSelected() {
	    this.selected = true;
	  }

	  this.checkSelected = function checkSelected() {
	    return this.selected;
	  }

	  this.setPlayer = function setPlayer(currentPlayer) {
	    this.player = currentPlayer;
	  }

	  this.getPlayer = function getPlayer() {
	    return this.player;
	  }

	}


	function playerMatches(functionCell1, functionCell2, functionCell3){
		//Checks if Players Match
		var player1 = functionCell1.getPlayer(),
			player2 = functionCell2.getPlayer(),
			player3 = functionCell3.getPlayer();

		if (player1 == player2 && player2 == player3 && player1 != null && player2 != null && player3 != null){
			return true;
		} else {
			return false;
		}
	}

	function cellsSelected(functionCell1, functionCell2, functionCell3){
		//Checks if Cells are selected
		var selectedCell1 = functionCell1.checkSelected(),
		    selectedCell2 = functionCell2.checkSelected(),
		    selectedCell3 = functionCell3.checkSelected();

		if(selectedCell1 && selectedCell2 && selectedCell3){
			return true;
		} else {
			return false;
		}
	}

	function checkDraw(){
		if(cell1.checkSelected() && cell2.checkSelected() && cell3.checkSelected() && cell4.checkSelected() && cell5.checkSelected() && cell6.checkSelected() && cell7.checkSelected() && cell8.checkSelected() && cell9.checkSelected()){
			return true;
		} else {
			return false;
		}
	}

	function switchPlayer(functionCell){
		if($scope.currentPlayer == 'X'){
			$scope.currentPlayer = 'O';
			functionCell.cellIcon = '<i class="fa fa-times  fa-4x cellIcon"></i>';
		} else {
			$scope.currentPlayer = 'X';
			functionCell.cellIcon = '<i class="fa fa-circle-o   fa-4x cellIcon"></i>';
		}
	}

	//current variable setup
	$scope.currentPlayer = 'X';
	var cell1 = new cell(false, null),
	    cell2 = new cell(false, null),
	    cell3 = new cell(false, null),
	    cell4 = new cell(false, null),
	    cell5 = new cell(false, null),
	    cell6 = new cell(false, null),
	    cell7 = new cell(false, null),
	    cell8 = new cell(false, null),
	    cell9 = new cell(false, null);

	$scope.cell1 = cell1;
	$scope.cell2 = cell2;
	$scope.cell3 = cell3;
	$scope.cell4 = cell4;
	$scope.cell5 = cell5;
	$scope.cell6 = cell6;
	$scope.cell7 = cell7;
	$scope.cell8 = cell8;
	$scope.cell9 = cell9;

	console.log(cell1.cellIcon);

	//handles whether a cell has been clicked
	$scope.cellClick = function(cellNumber) {
		switch(cellNumber){
			case 1:
				cell1.setSelected();
				cell1.setPlayer($scope.currentPlayer);
				switchPlayer(cell1);
				checkWinner();
				break
			case 2:
				cell2.setSelected();
				cell2.setPlayer($scope.currentPlayer);
				switchPlayer(cell2);
				checkWinner();
				break
			case 3:
				cell3.setSelected();
				cell3.setPlayer($scope.currentPlayer);
				switchPlayer(cell3);
				checkWinner();
				break
			case 4:
				cell4.setSelected();
				cell4.setPlayer($scope.currentPlayer);
				switchPlayer(cell4);
				checkWinner();
				break
			case 5:
				cell5.setSelected();
				cell5.setPlayer($scope.currentPlayer);
				switchPlayer(cell5);
				checkWinner();
				break
			case 6:
				cell6.setSelected();
				cell6.setPlayer($scope.currentPlayer);
				switchPlayer(cell6);
				checkWinner();
				break
			case 7:
				cell7.setSelected();
				cell7.setPlayer($scope.currentPlayer);
				switchPlayer(cell7);
				checkWinner();
				break
			case 8:
				cell8.setSelected();
				cell8.setPlayer($scope.currentPlayer);
				switchPlayer(cell8);
				checkWinner();
				break
			case 9:
				cell9.setSelected();
				cell9.setPlayer($scope.currentPlayer);
				switchPlayer(cell9);
				checkWinner();
				break
		}
	}

	function resetGame() {
		cell1 = new cell(false, null),
	    cell2 = new cell(false, null),
	    cell3 = new cell(false, null),
	    cell4 = new cell(false, null),
	    cell5 = new cell(false, null),
	    cell6 = new cell(false, null),
	    cell7 = new cell(false, null),
	    cell8 = new cell(false, null),
	    cell9 = new cell(false, null);
	    $scope.cell1 = cell1;
		$scope.cell2 = cell2;
		$scope.cell3 = cell3;
		$scope.cell4 = cell4;
		$scope.cell5 = cell5;
		$scope.cell6 = cell6;
		$scope.cell7 = cell7;
		$scope.cell8 = cell8;
		$scope.cell9 = cell9;
	}


	//Checks for winner.
	function checkWinner(){
		/* 
			Winning Combinations: 
				"Horizontal"
				- cell1, cell2, cell3
				- cell4, cell5, cell6
				- cell7, cell8, cell9
				
				"Vertical"
				- cell1, cell4, cell7
				- cell2, cell5, cell8
				- cell3, cell6, cell9

				"Diagonal"
				- cell1, cell5, cell9
				- cell3, cell5, cell7
		*/ 

		if(cellsSelected(cell1, cell2, cell3) && playerMatches(cell1, cell2, cell3)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell4, cell5, cell6) && playerMatches(cell4, cell5, cell6)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell7, cell8, cell9) && playerMatches(cell7, cell8, cell9)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell1, cell4, cell7) && playerMatches(cell1, cell4, cell7)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell2, cell5, cell8) && playerMatches(cell2, cell5, cell8)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell3, cell6, cell9) && playerMatches(cell3, cell6, cell9)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell1, cell5, cell9) && playerMatches(cell1, cell5, cell9)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if(cellsSelected(cell3, cell5, cell7) && playerMatches(cell3, cell5, cell7)){
			//Winner Logic
			alert("winner!");
			resetGame();
		}

		if (checkDraw()){
			//draw logic
			alert("draw!");
			resetGame();
		}
	}

	//Currenty the game does not take player turns into account. 
	//I need to pick that up tomorrow and create a function that switches players.
}