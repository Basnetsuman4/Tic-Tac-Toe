import { useState } from "react";
import CalcWinner from "./CalcWinner";
import '../styling/Board.css'

const Board=()=>{

    const[squares,setSquares]=useState(Array(9).fill(null));
    const[xIsNext, setXIsNext]=useState(true);      //indicate whos turns, set as 'X' for default

    function handleClick(i){
        
        //Raw concept or Hardcode to update the value of 0th element 

                // const nextSquare = squares.slice();     //Create new array as nextSquare , not to mutate the original one
                // console.log(nextSquare)
            
                // nextSquare[0] ='X';                      //Initilize the first value as 'X'
                // console.log(nextSquare[0])
                // console.log(`new array : ${nextSquare}`)
            
                // setSquares(nextSquare);                 //Update the value using hook
            


        if(squares[i] || CalcWinner(squares)){     // use to store  value 
            return;                           // won't let player to overwrite same element and stops if the game is over
        }


        //Method to update any square 
   
        const nextSquare = squares.slice();
        
        xIsNext?                            //ternary operator
            nextSquare[i]='X':              //default value
            nextSquare[i]='O'

        setSquares(nextSquare);              //Update the value using hook

        setXIsNext(!xIsNext);                 //Update the turn using hook
            }

            const winner = CalcWinner(squares);
            let status;
            let isOver;
            winner? 
            (status = `Winner : ${winner}` )&& (isOver=` Status : GAME OVER`):
            (status=`Next player: ${xIsNext?'X':'O'}`)&& (isOver='Status : PLAY ON')

const reset=()=>{
     setSquares(Array(9).fill(null))
    console.log('Reset is clicked!!!')
     return;
}


    return(
        <>
        <div className="Board">
        <button  >{status}</button>
        </div>
        <div>
            <div className="board-row">
            <Square value={squares[0]}  onSquareClick={ () => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={ () => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={ () => handleClick(2)}/>
            </div>
            <div className="board-row">
            <Square value={squares[3]} onSquareClick={ () => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={ () => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={ () => handleClick(5)}/>
            </div>
            <div className="board-row">
            <Square value={squares[6]} onSquareClick={ () => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={ () => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={ () => handleClick(8)}/>
            </div>
        </div>
        <div className="Board2">
        <button  >{isOver}</button>
        <button onClick={reset} >Reset</button>
        </div>
        </>
    )
};


function Square({value,onSquareClick}){
    return(
        <button 
        className="Square"
        onClick={onSquareClick}
        >{value}</button>
    )
}

 <CalcWinner/>

 export default Board;