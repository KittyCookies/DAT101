"use strict";
import { TSpriteButton, TSpriteNumber, ESpriteNumberJustifyType } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel, newGame } from "./Minesweeper.mjs";

export class TGameInfo {
    #LeftNumber;
    #RightNumber;
    #Smiley;
    #hndTimer;
    constructor(aSpcvs, aSPI) {
        const pos = new TPoint();
        pos.x = aSPI.Board.LeftMiddle.width;
        pos.y = 22;
        this.#LeftNumber = new TSpriteNumber(aSpcvs, aSPI.Numbers, pos.x, pos.y);
        this.#LeftNumber.digits = 3;
        pos.x = aSpcvs.width - 24;
        this.#LeftNumber.value = gameLevel.Mines;
        this.#RightNumber = new TSpriteNumber(aSpcvs, aSPI.Numbers, pos.x, pos.y);
        this.#RightNumber.justify = ESpriteNumberJustifyType.Right;
        this.#RightNumber.digits = 3;
        pos.x = (aSpcvs.width / 2) - (aSPI.ButtonSmiley.width / 2);
        this.#Smiley = new TSpriteButton(aSpcvs, aSPI.ButtonSmiley, pos.x, pos.y);
        this.#hndTimer = setInterval(this.onTime.bind(this), 1000);
        this.#Smiley.addEventListener("mousedown", this.#SmileyMouseDown.bind(this));
        this.#Smiley.addEventListener("mouseup", this.#SmileyMouseUp.bind(this));
    }

    #SmileyMouseDown(){
        this.#Smiley.index++;
    }

    #SmileyMouseUp(){
        this.#Smiley.index--;
        newGame();
    }

    get flagCount(){
        return this.#LeftNumber.value;
    }

    set flagCount(aValue){
        this.#LeftNumber.value = aValue;
    }

    stopTimer(){
        clearInterval(this.#hndTimer);
        this.#hndTimer = null;
    }

    setSmileyIndex(aIndex){
        this.#Smiley.index = aIndex;
    }

    draw() {
        this.#LeftNumber.draw();
        this.#RightNumber.draw();
        this.#Smiley.draw();
    }
    onTime(){
        this.#RightNumber.value++;
    }
}