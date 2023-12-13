// gameClasses.js
// import setgotipos from "../board/board"

var board;
var setgtps;

function isValid(i,j){
  if(i>=0 && j>=0 && i<8 && j<8) return true;
  else return false;
}
class Goti {
  constructor(i, j, player, name) {
    this.player = player;
    this.name = name;
    this.pos = { i, j };
  }
  get pos() {
    return this._pos;
  }
  set pos({ i, j }) {
    if (board[i][j] !== "" || board[i][j].charAt(3)!==this.player+1) {
      console.log("position occupied at ", i, j);
    //   throw new Error("Position occupied");
    } else {
      setgtps(i, j, this.name);
        this._pos = { i, j };
    }
  }
}

class PlayerB {
  constructor(name) {
    this.name = name;
    this.raja = new Raja(0, 4, 0, "r1-1");
    this.mantri = new Mantri(0, 3, 0, "m1-1");
    this.unth1 = new Unth(0, 2, 0, "u1-1");
    this.unth2 = new Unth(0, 5, 0, "u2-1");
    this.goda1 = new Goda(0, 1, 0, "g1-1");
    this.goda2 = new Goda(0, 6, 0, "g2-1");
    this.hathi1 = new Hathi(0, 0, 0, "h1-1");
    this.hathi2 = new Hathi(0, 7, 0, "h2-1");

    this.sipahi1 = new Sipahi(1, 0, 0, "s1-1");
    this.sipahi2 = new Sipahi(1, 1, 0, "s2-1");
    this.sipahi3 = new Sipahi(1, 2, 0, "s3-1");
    this.sipahi4 = new Sipahi(1, 3, 0, "s4-1");
    this.sipahi5 = new Sipahi(1, 4, 0, "s5-1");
    this.sipahi6 = new Sipahi(1, 5, 0, "s6-1");
    this.sipahi7 = new Sipahi(1, 6, 0, "s7-1");
    this.sipahi8 = new Sipahi(1, 7, 0, "s8-1");
  }
}

class PlayerW {
  constructor(name) {
    this.name = name;
    this.raja = new Raja(7, 4, 1, "r1-2");
    this.mantri = new Mantri(7, 3, 1, "m1-2");
    this.unth1 = new Unth(7, 2, 1, "u1-2");
    this.unth2 = new Unth(7, 5, 1, "u2-2");
    this.goda1 = new Goda(7, 1, 1, "g1-2");
    this.goda2 = new Goda(7, 6, 1, "g2-2");
    this.hathi1 = new Hathi(7, 0, 1, "h1-2");
    this.hathi2 = new Hathi(7, 7, 1, "h2-2");
    this.sipahi1 = new Sipahi(6, 0, 1, "s1-2");
    this.sipahi2 = new Sipahi(6, 1, 1, "s2-2");
    this.sipahi3 = new Sipahi(6, 2, 1, "s3-2");
    this.sipahi4 = new Sipahi(6, 3, 1, "s4-2");
    this.sipahi5 = new Sipahi(6, 4, 1, "s5-2");
    this.sipahi6 = new Sipahi(6, 5, 1, "s6-2");
    this.sipahi7 = new Sipahi(6, 6, 1, "s7-2");
    this.sipahi8 = new Sipahi(6, 7, 1, "s8-2");
  }
}

class Raja extends Goti {
  move() {
    console.log("move called");
  }
}

class Mantri extends Goti {
  move() {
    console.log("move called");
  }
}
class Unth extends Goti {
  move() {
    console.log("move called");
  }
}
class Goda extends Goti {
  move() {
    console.log("move called");
  }
}
class Hathi extends Goti {
  move() {
    console.log("move called");
  }
}
class Sipahi extends Goti {
  move_opt() {
    var temp=[];
    var x=this.pos;
    if(this.player===0){

        if(x.i<=6 && board[x.i+1][x.j]==="") temp.push([x.i+1,x.j]);
        if(x.i===1 && board[x.i+2][x.j]==="") temp.push([x.i+2,x.j]);
        if(isValid(x.i+1,x.j+1) && board[x.i+1][x.j+1]!=="" && board[x.i+1][x.j+1].charAt(3)==='2') temp.push([x.i+1,x.j+1]);
        if(isValid(x.i+1,x.j-1) && board[x.i+1][x.j-1]!=="" && board[x.i+1][x.j-1].charAt(3)==='2') temp.push([x.i+1,x.j-1]);
    }
    else{
        if(x.i>=1 && board[x.i-1][x.j] ==="") temp.push([x.i-1,x.j]);
        if(x.i===6 && board[x.i-2][x.j] ==="") temp.push([x.i-2,x.j]);
        if(isValid(x.i-1,x.j+1) && board[x.i-1][x.j+1]!=="" && board[x.i-1][x.j+1].charAt(3)==='1') temp.push([x.i-1,x.j+1]);
        if(isValid(x.i-1,x.j-1) && board[x.i-1][x.j-1]!=="" && board[x.i-1][x.j-1].charAt(3)==='1') temp.push([x.i-1,x.j-1]);
        
    }
    return temp;
  }
  move(i,j){
    let x=this.pos;
    setgtps(x.i, x.j, "");
    this.pos={i,j};
  }

}

class Board {
  constructor(p1, p2, setgotipos, pos_mat) {
    if (setgotipos !== undefined) {
      setgtps = setgotipos;
      board = pos_mat;
      this.p1 = new PlayerB(this, p1);
      this.p2 = new PlayerW(this, p2);
      console.log(board);
    }

    // console.log(board);
  }
}
const gotiList={
    r1:"raja",
    m1:"mantri",
    u1:"unth1",
    u2:"unth2",
    g1:"goda1",
    g2:"goda2",
    h1:"hathi1",
    h2:"hathi2",
    s1:"sipahi1",
    s2:"sipahi2",
    s3:"sipahi3",
    s4:"sipahi4",
    s5:"sipahi5",
    s6:"sipahi6",
    s7:"sipahi7",
    s8:"sipahi8",
}
export {Board,gotiList};
