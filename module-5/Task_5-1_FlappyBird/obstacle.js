"use strict";
import { TSprite } from "libSprite";
import { hero, EGameStatus } from "./FlappyBird.mjs";

const EasyFlyerGap = 150; // Gap for easy difficulty
const HardFlyerGap = 100; //Gap for hard difficulty
const MinimumProtrusion = 30; //Minimum protrusion of obstacles from top and bottom


export class TObstacle{
    #spUp;
    #spDown;
    #spi;
    constructor(aSpcvs, aSPI){
        
        this.#spi = aSPI;

        //Generate random gap height, based on difficulty settings
        const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
        const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
        const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle

        // Genrate random top position for upper obstacle
        let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
        const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
        let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top 
        
        if(topWithGap > minBottom){
         // The top with gap is too low, adjust top and keep the gap constant
         const adjustment = topWithGap - minBottom;
         top -= adjustment;
         topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
        }

        this.#spDown = new TSprite(aSpcvs, aSPI, 600, topWithGap);
        this.#spDown.index = 2;
        this.#spUp = new TSprite(aSpcvs, aSPI, 600, top);
        this.#spUp.index = 3;
    }

    //Properties
    get x(){
        return this.#spDown.x;
    }

    draw(){
        this.#spDown.draw();
        this.#spUp.draw();
    }

    animate(){
        this.#spUp.x-=5;
        this.#spDown.x-=5;
        let hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp);

        if(hasCollided){
            console.log("Collision!!!!!!");
            EGameStatus.state = EGameStatus.heroIsDead;
            hero.animationSpeed = 0;
            hero.flap(); // Last flap of death !
        }

    }
}// End of class TObstacle