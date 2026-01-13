"use strict";
import { TSprite } from "libSprite";

export class TObstacle{
    #spUp;
    #spDown;
    constructor(aSpcvs, aSPI){
        this.#spDown = new TSprite(aSpcvs, aSPI, 200, 250);
        this.#spUp = new TSprite(aSpcvs, aSPI, 200, -250);
    }

    draw(){
        this.#spDown.draw();
        this.#spUp.rotation = 180;
        this.#spUp.draw();
    }

    animate(){
        const x = this.#spDown.x + (this.#spDown.width / 2);
        if(x < 5){
            this.#spDown.x = 600;
        }else {
        this.#spDown.x--;
        }
        const x2 = this.#spUp.x + (this.#spUp.width / 2);
        if(x2 < 5){
            this.#spUp.x = 600;
        }else {
            this.#spUp.x--;
        }
        
    }
}// End of class TObstacle