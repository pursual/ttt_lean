ticTacToe.controller('GameController', ['$scope', '$routeParams', '$location', '$timeout', GameControllerFunction]);

	function GameControllerFunction($scope, $routeParams, $location, $timeout){
	//Handles Title and Misuse of Route Params.
		switch($routeParams.who){
			case "human":
				$scope.title = "Human Vs. Human";
				$scope.directions = "When playing agaisnt another person you can use oldest person goes first, a coin toss, or just about anthing to determine who goes first. Either way, X goes first.";
				break;

			case "computer":
				$scope.title = "Human Vs. Computer";
				$scope.directions = "When playing agaisnt the computer, the human goes first. It's the only way to (mildly) entertain the computer. X goes first.'";
				break;
			default:
				alert('That is not a valid URL.');
				$location.path('/');
				break;
	}
	
	//Called by CheckWinner and checks for draw.
	function checkDraw(board){
		for (var i = 0; i < 9; i++) {
			if (!board[i]) {return false;}
		}
		return true;
	}

	//Checks for winner.
	function checkWinner(board){
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
		var winners = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];

		for (var i = 0; i < winners.length; i++) {
			var cells = winners[i];
			if (board[cells[0]] && board[cells[0]] === board[cells[1]] && board[cells[1]] === board[cells[2]]) {$scope.setWinner = board[cells[0]];return true;}
		}
		return false;
	}
	
	function makeMove(move, player, board) {
		if (board[move]) {return false;}

		var newBoard = cloneBoard(board);
		newBoard[move] = player;
		return newBoard;
	}

	//Clones board using angular merge and leaves current board in tack.
	function cloneBoard(board){
		return angular.merge([], board);
	}

	function findMove(board){
		var bestMoveValue = -100;
		var move = 0;
		
		//This Loop Calls MakeMove with Move starting at 0.
		//MakeMove calls checkSelected on the cell in that board.
		//if False, it returns the newBoard with that cell selected 
		//and set to player of 'O.' Then it passes newBoard to minValueForX
		//Where minValueForX trades it with maxValueforO until a good score 
		//is reached.
		for (var i = 0; i < board.length; i++) {
			var newBoard = makeMove(i, 'O', board);
			if (newBoard) {
				var predictedMoveValue = minValueForX(newBoard);
				if(predictedMoveValue > bestMoveValue){
					bestMoveValue = predictedMoveValue;
					move = i;
				}
			}
		}
		return move;
	}

	function minValueForX(board){
		
		if (checkWinner(board)){
			
			if ($scope.setWinner === "O"){
				return 1;
			} else {
				return -1;
			}
		
		} else if (checkDraw(board)) {
		
			return 0;
		
		} else {
			
			var bestMoveValue = 100;
			var move = 0;
			for (var i = 0; i < board.length; i++) {
				var newBoard = makeMove(i, 'X', board);
				if (newBoard) {
					var predictedMoveValue = maxValueForO(newBoard);
					if (predictedMoveValue < bestMoveValue) {
						bestMoveValue = predictedMoveValue;
						move = i;
					}
				}
			}

			return bestMoveValue;
		}
	}

	function maxValueForO(board){

		if (checkWinner(board)){
			
			if ($scope.setWinner === "O"){
				return 1;
			} else {
				return -1;
			}
		
		} else if (checkDraw(board)) {
		
			return 0;
		
		} else {
		
			var bestMoveValue = -100;
			var move = 0;
			for (var i = 0; i < board.length; i++) {
				var newBoard = makeMove(i, 'O', board);
				if (newBoard) {
					var predictedMoveValue = minValueForX(newBoard);
					if (predictedMoveValue > bestMoveValue) {
						bestMoveValue = predictedMoveValue;
						move = i;
					}
				}
			}

			return bestMoveValue;
		}
	}

	function ticTacToeAi(){	
	
		var moveID = findMove($scope.board);
		$scope.currentPlayer = 'X';
		$scope.board[moveID] = 'O';
		$scope.aiMessage = '';
		if(checkWinner($scope.board)){
			$scope.gameOver = true;
			$scope.gameResult = "The computer has won.";
			$("#myModal").modal();
		} 
		if (checkDraw($scope.board)){
			$scope.gameOver = true;
			$scope.gameResult = "The game ended in a draw.";
			$("#myModal").modal();
		}

	}

	//This function handles switching players for both human and computer modes.
	function switchPlayer(){
		
		if($routeParams.who == 'computer' && $scope.currentPlayer == 'X' && $scope.gameOver === false){
			$scope.currentPlayer = 'O';
			$scope.aiMessage = 'The computer is thinking: ' + '<i class="fa fa-circle-o-notch fa-spin"></i>';
			//placing AI logic here. 
			$timeout(function () {
				ticTacToeAi();
			}, 100);
		} else {
			
			if($scope.currentPlayer == 'X' && $scope.gameOver === false){
				$scope.currentPlayer = 'O';
			} else {
				$scope.currentPlayer = 'X';
			}
		}

	}

	$scope.resetGame = function (){
		$scope.board = [false, false, false, false, false, false, false, false, false];

		$scope.currentPlayer = 'X'; 
		$scope.gameOver = false;
	};

	//current variable setup
	$scope.resetGame();

	//handles whether a cell has been clicked
	$scope.cellClick = function (cellNumber) {
		if ($scope.board[cellNumber] || $scope.currentPlayer !== 'X') {return;}
		$scope.board[cellNumber] = $scope.currentPlayer;

		if (checkWinner($scope.board)){
			$scope.gameOver = true;
			$scope.gameResult = $scope.currentPlayer + " has won the game.";
			$("#myModal").modal();
		}
		if (checkDraw($scope.board)){
			$scope.gameOver = true;
			$scope.gameResult = "The game ended in a draw.";
			$("#myModal").modal();
		}
		switchPlayer();
	};

	
}