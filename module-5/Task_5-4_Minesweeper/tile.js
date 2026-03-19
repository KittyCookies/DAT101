"use strict";
import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel, gameInfo } from "./Minesweeper.mjs";

const MineInfoColors = ["blue", "green", "red", "darkblue", "brown", "cyan", "black", "grey"];
let tiles = [];
const ctx = document.getElementById("cvs").getContext("2d");

let gameOver =  false;
let tilesRemaining = 0;

function setGameOver(){
  gameOver = true;
  gameInfo.setSmileyIndex(2);
  gameInfo.stopTimer();
  for(let colIndex = 0; colIndex < gameLevel.Tiles.Col; colIndex++){
    const cols = tiles[colIndex];
    for(let rowIndex = 0; rowIndex < gameLevel.Tiles.Row; rowIndex++){
      const tile = cols[rowIndex];
      if(tile.isMine){
        if(tile.index === 3){
          tile.index = 7;
        } else {
        tile.index = 5;
        }
      } else if(tile.index === 3){
        tile.index = 6;
      }
    }
  }
}



export class TTile extends TSpriteButton {
  #mine;
  #col;
  #row;
  #neighbors;
  constructor(aSpcvs, aSPI, aCol, aRow) {
    const pos = new TPoint(20, 133);
    pos.x += aSPI.width * aCol;
    pos.y += aSPI.height * aRow;
    super(aSpcvs, aSPI, pos.x, pos.y);
    this.#mine = false;
    this.#col = aCol;
    this.#row = aRow;
    this.#neighbors = null;
    this.mineInfo = 0;
  }

  get isMine() {
    return this.#mine;
  }

  set isMine(aValue) {
    this.#mine = aValue;
    this.mineInfo = 0;
    this.#getNeighbors();
    for (let i = 0; i < this.#neighbors.length; i++) {
      const tile = this.#neighbors[i];
      if (tile.isMine === false) {
        tile.mineInfo++;
      }
    }
  }

  get open() {
    return this.index === 2 || this.index === 5;
  }

  draw() {
    super.draw();
    if (this.open && this.mineInfo) {
      ctx.font = "48px Consolas";
      ctx.fillStyle = MineInfoColors[this.mineInfo - 1];
      ctx.fillText(this.mineInfo, this.x + 13, this.y + 41);
    }
  }

  #getNeighbors() {
    if (this.#neighbors !== null) {
      return;
    }
    let colFrom = this.#col - 1;
    let colTo = this.#col + 1;
    let rowFrom = this.#row - 1;
    let rowTo = this.#row + 1;
    if (colFrom < 0) {
      colFrom = 0;
    }
    if (rowFrom < 0) {
      rowFrom = 0;
    }
    if (colTo >= gameLevel.Tiles.Col) {
      colTo = gameLevel.Tiles.Col - 1;
    }
    if (rowTo >= gameLevel.Tiles.Row) {
      rowTo = gameLevel.Tiles.Row - 1;
    }
    this.#neighbors = [];
    for (let colIndex = colFrom; colIndex <= colTo; colIndex++) {
      for (let rowIndex = rowFrom; rowIndex <= rowTo; rowIndex++) {
        const tile = tiles[colIndex][rowIndex];
        if (this !== tile) {
          this.#neighbors.push(tile);
        }
      }
    }
  }

  // Override functions
  onMouseDown(aEvent) {
    if(gameOver){
      return;
    }

    console.log(aEvent.button);
    //Makes so you can't open a tile when it's already open
    if(this.open){
      return;
    }

    if((aEvent.button === 0) && (this.index !== 3)){
      this.index = 1;
      // Make smiley change index
      gameInfo.setSmileyIndex(1);
    } else if(aEvent.button === 2){
      this.index = 3 - this.index;

      if(this.index === 3){
        if(gameInfo.flagCount > 0){
          gameInfo.flagCount--;
        }
        else{
          this.index = 0;
        }
    }else{
      gameInfo.flagCount++;
    }

  }
    super.onMouseDown(aEvent);
  }

  onMouseUp(aEvent) {
    if(gameOver){
      return;
    }
    if(aEvent.button === 2 || this.index === 3){
      return;
    }
    gameInfo.setSmileyIndex(0);
    this.open = true;
    super.onMouseUp(aEvent);
  }

  onMouseLeave(aEvent) {
    if(gameOver){
      return;
    }
    if (this.index === 1) {
      this.index = 0;
      gameInfo.setSmileyIndex(0);
      super.onMouseLeave(aEvent);
    }
  }

  onMouseMove(aEvent){
    if(this.open || gameOver){
      return;
    }
    super.onMouseMove(aEvent);
  }


  set open(_aValue) {
    if (this.isMine) {
      setGameOver();
      this.index = 4;
      // Game over!
    } else {
      this.index = 2;

      tilesRemaining--;
      if(tilesRemaining <= gameLevel.Mines){
        gameOver = true;
        gameInfo.setSmileyIndex(4);
        gameInfo.stopTimer();
      }
    }
    if (this.mineInfo === 0) {
      this.#getNeighbors();
      for (let i = 0; i < this.#neighbors.length; i++) {
        const tile = this.#neighbors[i];
        if (tile.open === false) {
          tile.open = true;
        }
      }
    }
  }
}
 // End of TTile

export function createMines() {
  let mineCount = 0;
  let colCount = gameLevel.Tiles.Col;
  let rowCount = gameLevel.Tiles.Row;
  do {
    const col = Math.floor(Math.random() * colCount);
    const row = Math.floor(Math.random() * rowCount);
    const tile = tiles[col][row];
    if (tile.isMine === false) {
      tile.isMine = true;
      mineCount++;
    }
  } while (mineCount < gameLevel.Mines);
}

export function createTiles(aSpcvs, aSPI) {
  console.log(gameLevel);
  const glTiles = gameLevel.Tiles;
  const colCount = glTiles.Col;
  const rowCount = glTiles.Row;
  gameOver = false;
  tiles = [];
  tilesRemaining = 0;
  for (let col = 0; col < colCount; col++) {
    const rows = [];
    for (let row = 0; row < rowCount; row++) {
      const newTile = new TTile(aSpcvs, aSPI, col, row);
      rows.push(newTile);
      tilesRemaining++;
    }
    tiles.push(rows);
  }
}

export function drawTiles() {
  const colCount = gameLevel.Tiles.Col;
  const rowCount = gameLevel.Tiles.Row;
  for (let col = 0; col < colCount; col++) {
    const rows = tiles[col];
    for (let row = 0; row < rowCount; row++) {
      const tile = rows[row];
      tile.draw();
    }
  }
}