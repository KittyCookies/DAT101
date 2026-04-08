"use strict"
import { computerAnswers, menu } from "./Mastermind.mjs";
import { playerAnswers } from "./colorPicker.js";

export function checkAnswer(){
    const c = [];
    for(let i = 0; i < computerAnswers.length; i++){
        c.push(computerAnswers[i]);
    }
    const p = [];
    for(let i = 0; i < playerAnswers.length; i++){
        p.push(playerAnswers[i]);
    }
    //1. Test if color "p" is correct placed.
    const correct = [];
    for(let i = 0; i < p.length; i++){
        if(p[i].index === c[i].index){
            correct.push(i); //We save the correct index
        }
    }
    //Examen pensum, denne coden her nedover er viktig

    //We need to remove the correct ones from the list P and C
    for(let i = 0; i < correct.length; i++){
            p.splice(correct[i], 1);
            c.splice(correct[i], 1);
    }
    //2. Test if color "p" is correct but wrongly placed.
    let wrongCount = 0;
    for(let i = 0; i < p.length; i++){
        const pColor = p[i];
        let wrongIndex = -1;
        for(let j = 0; j < c.length; j++){
            const cColor = c[j];
            if(pColor.index === cColor.index){
                //This color is correct but wrongly placed.
                wrongCount++;
                wrongIndex = j;
                break;
            }
           
        } // End of for (j)
        if(wrongIndex >= 0){
            c.splice(wrongIndex, 1);
            i = 0;
        }
    } // End of for (i)
    menu.createHints(correct.length, wrongCount);
}