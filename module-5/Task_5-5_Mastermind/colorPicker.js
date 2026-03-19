"use strict";
import { TSpriteDraggable } from "libSprite";
import { spcvs, SpriteInfoList } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";

class TColorPicker extends TSpriteDraggable{
    constructor(aIndex){
        const pos = MastermindBoard.ColorPicker[aIndex];
        super(spcvs, SpriteInfoList.ColorPicker);
    }
}