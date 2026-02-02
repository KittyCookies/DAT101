"use strict"
import { TPoint } from "lib2d";
import { TSprite } from "libSprite";
import { TColorButton } from "./colorButton.js";

export class TGameBoard extends TSprite{
    #colorButtons;

    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI.Background, 0, 0);
        const center = new TPoint(
            aSPI.Background.width / 2,
            aSPI.Background.height / 2);
        
        this.#colorButtons = [
            new TColorButton(aSpcvs, aSPI.ButtonRed, center),
            new TColorButton(aSpcvs, aSPI.ButtonBlue, center),
            new TColorButton(aSpcvs, aSPI.ButtonGreen, center),
            new TColorButton(aSpcvs, aSPI.ButtonYellow, center)
        ];
        this.#colorButtons[0].debug = true;
        this.#colorButtons[1].debug = true;
    }
    draw(){
        super.draw();
        for(let i=0; i < this.#colorButtons.length; i++){
            const colorButton = this.#colorButtons[i];
            colorButton.draw();
        }
    }
}