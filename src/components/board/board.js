//board.js

import React, { useEffect, useState, useRef } from "react";
import Box from "./box.js";
// import initializeMatrix from "../dataList/func";
import { Board, gotiList } from "../dataList/gameClasses.js";

// var temp = {}

const ChessBoard = () => {
  const [minDimension, setMinDimension] = useState(0);
  const [pos_mat, setPos_mat] = useState(
    Array.from({ length: 8 }, () => Array(8).fill(""))
  );
  const [highlight, sethighlight] = useState(
    Array.from({ length: 8 }, () => Array(8).fill(false))
  );
  const [warn, setwarn] = useState(
    Array.from({ length: 8 }, () => Array(8).fill(false))
  );
  const [active_goti,set_active_goti]=useState();
  const [move_opt, set_move_opt] = useState([]);
  const [p_turn, set_p_turn] = useState(2);
  const [g_mode,set_g_mode]= useState("player"); // three modes: player ->select goti to move , option -> show where the goti can move ,win/loose
  const board = useRef();
  const temp = useRef(0);
  function setgotipos(i, j, name) {
    var mt = pos_mat;
    // console.log(mt);
    mt[i][j] = name;
    setPos_mat([...mt]);
  }
  // calculate dimensioon
  useEffect(() => {
    const calculateMinDimension = () => {
      const minSize = Math.min(window.innerWidth, window.innerHeight) - 20;
      setMinDimension(minSize);
    };
    calculateMinDimension();
    window.addEventListener("resize", calculateMinDimension);
    return () => {
      window.removeEventListener("resize", calculateMinDimension);
    };
  }, []);
  // create board
  useEffect(() => {
    if (temp.current === 0) {
      board.current = new Board("p1", "p2", setgotipos, pos_mat);
      temp.current++;
    }
  }, [pos_mat]);
  // show move option
  useEffect(() => {
    console.log(move_opt);
    let h= Array.from({ length: 8 }, () => Array(8).fill(false))
    let t=move_opt;
    t.forEach((e)=>{
      console.log(e[0],e[1]);
      h[e[0]][e[1]]=true;
    });
    sethighlight([...h]);
    
  }, [move_opt])
  


  const showMoveOption = (i, j) => {
    // console.log("hei" + i + j);
    if (pos_mat[i][j] !== "" && pos_mat[i][j].charAt(3) == p_turn) {
      let player = pos_mat[i][j].charAt(3) === "1" ? "p1" : "p2";
      let gotiName = gotiList[pos_mat[i][j].slice(0, 2)];
      let temp = board.current[player][gotiName].move_opt();
      set_active_goti(board.current[player][gotiName]);
      set_move_opt(temp);
    }
    else if(highlight[i][j]){
      active_goti.move(i,j);
      if(pos_mat[i][j]!=="") 
      sethighlight( Array.from({ length: 8 }, () => Array(8).fill(false)));
      set_p_turn((p_turn===1)?2:1);
    }
  };
  const generateBoard = () => {
    return pos_mat.map((row, i) => (
      <div className="chess-row" key={i} style={styles.row}>
        {row.map((value, j) => (
          <div onClick={() => showMoveOption(i, j)} key={`${i}-${j}`}>
            <Box
              side={minDimension / 8}
              color={(i + j) % 2 === 0 ? "white" : "green"}
              value={value}
              highlight={highlight[i][j]}
              warn={warn[i][j]}
            />
          </div>
        ))}
      </div>
    ));
  };

  const styles = {
    board: {
      border: "1px solid black",
      margin: "10px",
      width: minDimension + "px",
      height: minDimension + "px",
    },
    row: {
      display: "flex",
    },
  };

  return (
    <div className="board" style={styles.board}>
      {generateBoard()}
    </div>
  );
};

export default ChessBoard;
