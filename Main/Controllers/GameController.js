ticTacToe.controller('GameController', ['$scope', '$routeParams', '$location', GameControllerFunction]);

function GameControllerFunction($scope, $routeParams, $location){
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

	//Tic Tac Toe Cell Class
	function cell(selected, player) {

	  this.selected = selected;
	  this.player = player;
	  this.cellIcon = 'fa fa-square fa-4x';

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
		console.log($scope.currentPlayer);
		if($scope.currentPlayer == 'x'){
			$scope.currentPlayer = 'o';
		} else {
			$scope.currentPlayer = 'x';
		}
	}

	//current variable setup
	$scope.currentPlayer = 'x';
	var cell1 = new cell(false, null),
	    cell2 = new cell(false, null),
	    cell3 = new cell(false, null),
	    cell4 = new cell(false, null),
	    cell5 = new cell(false, null),
	    cell6 = new cell(false, null),
	    cell7 = new cell(false, null),
	    cell8 = new cell(false, null),
	    cell9 = new cell(false, null);

	

	//handles whether a cell has been clicked
	$scope.cellClick = function(cellNumber) {
		switch(cellNumber){
			case 1:
				cell1.setSelected();
				cell1.setPlayer(cell1);
				checkWinner();
				switchPlayer();
				break
			case 2:
				cell2.setSelected();
				cell2.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 3:
				cell3.setSelected();
				cell3.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 4:
				cell4.setSelected();
				cell4.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 5:
				cell5.setSelected();
				cell5.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 6:
				cell6.setSelected();
				cell6.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 7:
				cell7.setSelected();
				cell7.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 8:
				cell8.setSelected();
				cell8.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
			case 9:
				cell9.setSelected();
				cell9.setPlayer($scope.currentPlayer);
				checkWinner();
				switchPlayer();
				break
		}
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
		}

		if(cellsSelected(cell4, cell5, cell6) && playerMatches(cell4, cell5, cell6)){
			//Winner Logic
			alert("winner!");
		}

		if(cellsSelected(cell7, cell8, cell9) && playerMatches(cell7, cell8, cell9)){
			//Winner Logic
			alert("winner!");
		}

		if(cellsSelected(cell1, cell4, cell7) && playerMatches(cell1, cell4, cell7)){
			//Winner Logic
			alert("winner!");
		}

		if(cellsSelected(cell2, cell5, cell8) && playerMatches(cell2, cell5, cell8)){
			//Winner Logic
			alert("winner!");
		}

		if(cellsSelected(cell3, cell6, cell9) && playerMatches(cell3, cell6, cell9)){
			//Winner Logic
			alert("winner!");
		}

		if(cellsSelected(cell1, cell5, cell9) && playerMatches(cell1, cell5, cell9)){
			//Winner Logic
			alert("winner!");
		}

		if(cellsSelected(cell3, cell5, cell7) && playerMatches(cell3, cell5, cell7)){
			//Winner Logic
			alert("winner!");
		}

		if (checkDraw()){
			//draw logic
			alert("draw!");
		}
	}

	//Currenty the game does not take player turns into account. 
	//I need to pick that up tomorrow and create a function that switches players.
}