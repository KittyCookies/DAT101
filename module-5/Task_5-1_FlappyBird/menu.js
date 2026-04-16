"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, setSoundMuted, soundMuted, EGameStatus, resetGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOverBoard;
  #spMedal;
  #spBestScore;
  #highScores;
  #spFinalScore;

  constructor(aSpcvs, aSPI, resetFn){
    this.resetGame= resetFn;
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 235, 160);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 275, 170);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGameScore.digits = 3;
    this.#spGameScore.leadingZeros = false;

    //My adding
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 190, 100);
    this.#spGetReady.hidden = true;

    this.#spGameOverBoard = new TSprite(aSpcvs, aSPI.gameOver, 180, 180);
    this.#spGameOverBoard.hidden = true;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 205, 223);
    this.#spMedal.hidden = true;

    this.#spBestScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 341, 260);
    this.#spBestScore.visible = false;
    this.#spBestScore.digits = 3;
    this.#spBestScore.value = 0;
    this.#spBestScore.leadingZeros = false;
    this.#highScores = [];
    

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 341, 215);
    this.#spFinalScore.visible = false;
    this.#spFinalScore.digits = 3;
    this.#spFinalScore.leadingZeros = false;
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
    this.#spGetReady.draw();
    this.#spGameOverBoard.draw();
    this.#spMedal.draw();
    this.#spBestScore.draw();
    this.#spFinalScore.draw();
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
    resetGame(); //resets game

    // this.setSoundMute(true); //Forces the game to mute

    EGameStatus.state = EGameStatus.countDown;

    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;

    this.#spGetReady.hidden = false;

    setTimeout(() => {
      this.#spGetReady.hidden = true;
    }, 3000);
    
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

  showGameOver(){
    if(EGameStatus.state === EGameStatus.gameOver){

    //Gameboard Appears
    this.#spGameOverBoard.hidden = false;

    this.#highScores.push(this.#spGameScore.value);
    //HighScore gets stored when GameOver
    this.#highScores.sort((a, b) => b - a); //The b - a, is highest to low, while a - b is lowest to highest !!
    this.#highScores = this.#highScores.slice(0, 3);
    this.#spBestScore.value = this.#highScores[0];


    //Medal index depending on score reached.
    if(this.#spGameScore.value >= 10){
      this.#spMedal.index = 2;
      console.log("You did it! I am so proud of you! :)");
      
    }else if(this.#spGameScore.value >= 5){
      this.#spMedal.index = 1;
      console.log("Awesome! Maybe push a little more for gold?");

    }else if(this.#spGameScore.value >= 3){
      this.#spMedal.index = 3;
      console.log("Great! But it can be better!");

    }else {
      this.#spMedal.index = 0;
      console.log("Try Again, Buddy.");

    }
    this.#spMedal.hidden = false;

    
    //Play Button, also moved, x and y changed.
    this.#spPlayBtn.hidden = false;
    this.#spPlayBtn.x = 240;
    this.#spPlayBtn.y = 300;

    //The Score
    this.#spGameScore.visible = false;

    this.#spFinalScore.value = this.#spGameScore.value;

    if(this.#spGameScore.value > this.#spBestScore.value){
      //update BestScore
      this.#spBestScore.value = this.#spGameScore.value;
    }
    
    this.#spBestScore.visible = true;
    this.#spFinalScore.visible = true;

    console.log("Gameboard!");
    }
    
  }

  resetScore(){
    this.#spGameScore.value = 0;
    this.#spGameScore.visible = true;

    this.#spGameOverBoard.hidden = true;
    this.#spMedal.hidden = true;
    this.#spBestScore.visible = false;
    this.#spFinalScore.visible = false;

    this.#spPlayBtn.x = 235;
    this.#spPlayBtn.y = 160;
    this.#spPlayBtn.hidden = true;
  }

}