"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, setSoundMuted, soundMuted } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore

  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 235, 160);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 275, 170);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
 
  }
  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value <= 0){
      this.#spCountDown.visible = false;
      startGame();
      this.#sfRunning = new TSoundFile(fnRunning);

      if(!soundMuted){
      this.#sfRunning.play();
      }

    }else{
      setTimeout(this.countDown.bind(this), 1000);
    }
  }

  spPlayBtnClick(){
    console.log("Click!");

    // this.setSoundMute(true); //Forces the game to mute

    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if(!soundMuted){
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }

  //My adding for the Task
  setSoundMute(aIsMuted){
  setSoundMuted(aIsMuted);

  //Mutes the game after clicking play !!
  if(this.#sfRunning){

    if(aIsMuted){
      this.#sfRunning.pause();
    } else {
      if(!soundMuted){
      this.#sfRunning.play();
      }
    }
  }

  if(this.#sfCountDown){
    if(aIsMuted){
      this.#sfCountDown.pause();
    } else {
        if(!soundMuted){
          this.#sfCountDown.play();
        }
      }
    }
    console.log("SoundMuted:" , aIsMuted);
  }
  //End of this

}
  
