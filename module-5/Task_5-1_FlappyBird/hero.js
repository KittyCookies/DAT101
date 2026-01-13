"use strict";
import { TSprite } from "libSprite";

export class THero extends TSprite{
    #gravity;
    #speed;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 50, 100);
        this.animationSpeed = 10;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
    }

    animate(){
        if(this.y < 400 - this.height){
         this.#speed += this.#gravity; //increase speed due to gravity
         this.y += this.#speed; //update position based on speed
         if(this.rotation < 90){ //limit max rotation
         this.rotation = this.#speed*25; //tilt down based on speed
         }
        }
    } // End of animate

    flap(){
        this.#speed = -3.5;
        this.rotation = 0;
    }
}