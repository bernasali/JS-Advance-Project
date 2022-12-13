
const whiteRookDiv = document.getElementsByClassName("whiteRook");

const blackRookDiv = document.getElementsByClassName("blackRook");

const leftBlackRook = document.getElementById("leftBlackRook");

const blackKnight = document.getElementsByClassName("blackKnight");
blackKnight[0].innerHTML = BlackPieces.Knight;
blackKnight[1].innerHTML = BlackPieces.Knight;

const blackBishop = document.getElementsByClassName("blackBishop");
blackBishop[0].innerHTML = BlackPieces.Bishop;
blackBishop[1].innerHTML = BlackPieces.Bishop;

const blackQueen = document.getElementsByClassName("blackQueen")[0];
blackQueen.innerHTML = BlackPieces.Queen;

const blackKing = document.getElementsByClassName("blackKing")[0];
blackKing.innerHTML = BlackPieces.King;

const blackPawn = document.getElementsByClassName("blackPawn");
for(var i=0; i< blackPawn.length; i++){
   blackPawn[i].innerHTML = BlackPieces.Pawn;
}


const blackRook = document.getElementsByClassName("blackRook");
for(var i = 0; i < blackRook.length; i++){
    blackRook[i].innerHTML = BlackPieces.Rook;
    console.log(i);
}

const whiteRook = document.getElementsByClassName("whiteRook");
for(var i = 0; i < whiteRook.length; i++){
 whiteRook[i].innerHTML = WhitePieces.Rook;
 console.log(i);
}

const whiteKnight = document.getElementsByClassName("whiteKnight");
for(var i = 0; i < whiteKnight.length; i++){
    whiteKnight[i].innerHTML = WhitePieces.Knight;
}

const whiteBishop = document.getElementsByClassName("whiteBishop");
for(var i = 0; i < whiteBishop.length; i++){
    whiteBishop[i].innerHTML = WhitePieces.Bishop;
}

const whiteQueen = document.getElementsByClassName("whiteQueen")[0];
whiteQueen.innerHTML = WhitePieces.Queen;

const whiteKing = document.getElementsByClassName("whiteKing")[0];
whiteKing.innerHTML = WhitePieces.King;


const whitePawn = document.getElementsByClassName("whitePawn");
for(var i=0; i< whitePawn.length; i++){
   whitePawn[i].innerHTML = WhitePieces.Pawn;
}
