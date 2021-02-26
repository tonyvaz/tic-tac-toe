const gridSelector = document.querySelector('.grid');
const grids = document.querySelectorAll('.grid__element__text');
const buttonReset = document.querySelector('.button');

let board = [
            [],
            [],
            []
        ];

class Player {
    constructor(symbol){
        this.symbol = symbol;
        this.score = 0;
        this.symbolsOnBoard = [];
        
        this.symbol === 'X'? this.isTurn = true : this.isTurn = false ;

    }

    changeTurn(){
        this.isTurn = !this.isTurn;
    }
}

let Player1 = new Player('X');
let Player2 = new Player('O');

const addCordenates = function (divElement,symbol){
    switch (divElement) {
        case 'grid-1':
        if (board[0][0] === undefined) {
            board[0][0] =  symbol;
            return true;    
        }
         
        break;
        case 'grid-2':
        if (board[0][1] === undefined) {
            board[0][1] =  symbol;
            return true;    
        }
            
        break;
        case 'grid-3':
        if (board[0][2] === undefined) {
            board[0][2] =  symbol;
            return true;    
        }
            
        break;
        case 'grid-4':
        if (board[1][0] === undefined) {
            board[1][0] =  symbol;
            return true;    
        }
            
        break;
        case 'grid-5':
        if (board[1][1] === undefined) {
            board[1][1] =  symbol;
            return true;    
        }
            
        break;
        case 'grid-6':
        if (board[1][2] === undefined) {
            board[1][2] =  symbol;
            return true;    
        }
            
        break;
        case 'grid-7':
        if (board[2][0] === undefined) {
            board[2][0] =  symbol;
            return true;    
        }
            
        break;
        case 'grid-8':
        if (board[2][1] === undefined) {
            board[2][1] =  symbol;
            return true;    
        }
            
        break;

        case 'grid-9':
        if (board[2][2] === undefined) {
            board[2][2] =  symbol;
            return true;    
        } 
           
        break;

        default:
            return false;
    }
}

const checkIfWon = (boardGame, symbol) => {
    let won = false;
        if (boardGame[0][0] === symbol && boardGame[0][1] === symbol && boardGame[0][2] === symbol) {
            won = true;
            return won;
        }

         else if (boardGame[1][0] === symbol && boardGame[1][1] === symbol && boardGame[1][2] === symbol) {
            won = true;
            return true;
        }

        else if (boardGame[2][0] === symbol && boardGame[2][1] === symbol && boardGame[2][2] === symbol) {
            won = true;
            return true;
        }

        else if (boardGame[0][0] === symbol && boardGame[1][0] === symbol && boardGame[2][0] === symbol) {
            won = true;
            return true;
        }

        else if (boardGame[0][1] === symbol && boardGame[1][1] === symbol && boardGame[2][1] === symbol) {
            won = true;
            return true;
        }

        else if (boardGame[0][2] === symbol && boardGame[1][2] === symbol && boardGame[2][2] === symbol) {
            won = true;
            return true;
        }

        else if (boardGame[0][0] === symbol && boardGame[1][1] === symbol && boardGame[2][2] === symbol) {
            won = true;
            return true;
        }

        else if (boardGame[0][2] === symbol && boardGame[1][1] === symbol && boardGame[2][0] === symbol) {
            won = true;
            return true;
        }
        return false;

    };

const paintScenario = (e) => {
    [child] = e.target.children  ;
     

    if (Player1.isTurn && addCordenates(e.target.id, Player1.symbol)) {
       
            child.innerText = '\u03C7';
            
            Player1.changeTurn();
            Player2.changeTurn();
        
            if (checkIfWon(board,Player1.symbol)) {
                console.log(`Player ${Player1.symbol} has won`);
                gridSelector.removeEventListener('click',paintScenario);
            }
    }
    else if (Player2.isTurn && addCordenates(e.target.id, Player2.symbol)){
        
        child.innerText = '\u25EF';
        Player1.changeTurn();
        Player2.changeTurn();

        if (checkIfWon(board,Player2.symbol)) {
            console.log(`Player ${Player2.symbol} has won`);
            gridSelector.removeEventListener('click',paintScenario);
        }
        
    }
};

const resetBoard = () => {
    board = [
        [],
        [],
        []
    ];
};

const resetScenario = () => {
    grids.forEach((grid,index) => {
        grid.innerText = '';
    });
};

const resetGame = () => {
    resetBoard();
    resetScenario();
    gridSelector.addEventListener('click', paintScenario);
     Player1 = new Player('X');
     Player2 = new Player('O');
     console.clear();
}



resetGame();

buttonReset.addEventListener('click', resetGame);





//&chi = X - 03C7
//&xcirc = O - 25EF
