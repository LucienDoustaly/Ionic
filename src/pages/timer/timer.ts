import { Component, Input } from '@angular/core';
import { ITimer } from './itimer';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Vibration } from '@ionic-native/vibration';
import { Media, MediaObject } from '@ionic-native/media';
 
@Component({
    selector: 'timer',
    templateUrl: 'timer.html'
})
export class TimerComponent {
 
    @Input() timeInSeconds: number;
    public timer: ITimer;
    public sonfinal: MediaObject;
    public audio: MediaObject;
 
    constructor(public navCtrl: NavController, public apiProvider: ApiProvider,  
        private vibration: Vibration, private media: Media) {

    } 
    
    //initialise le timer lors de l'initialisation
    ngOnInit() {
        this.initTimer();
    }
    
    //avertie que le timer est terminé
    hasFinished() {
        return this.timer.hasFinished;
    }
 
    //initialise le timer
    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
 
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
 
    //lance le timer
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
        this.bgSound();

    }
 
    //arrete le timer tempororairement
    pauseTimer() {
        this.timer.runTimer = false;
        this.audio.stop();
    }
 
    //relance le timer
    resumeTimer() {
        this.startTimer();
    }
    
    //recharge le timer
    reloadTimer(){
        this.initTimer();
        this.startTimer();
        this.apiProvider.play(); 
    }

    //fait defiler les nombres de timer jusqu'a 0
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
                this.lanceVibration();
                this.lanceSonFinal();
            }
        }, 1000);
    }

    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10);
        var seconds = sec_num;
        var secondsString = '';
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return secondsString;
    }

    //fait vibrer le téléphone
    lanceVibration(){
        //on arrete les vibrations puis on les relance proprement
        this.vibration.vibrate(0);
        this.vibration.vibrate(4000);
    }

    //lance le son de fin de manche
    lanceSonFinal(){
        //si le son est deja lancé on l'arrete en premier
        if(this.sonfinal)
        {
          this.sonfinal.stop();
          this.sonfinal.release();
        }
        this.sonfinal = this.media.create('/android_asset/www/assets/raw/trompette.mp3');
        this.sonfinal.play();
        this.sonfinal.setVolume(0.8);
    }

    //son du background
    bgSound() {
        if(this.audio)
        {
        this.audio.stop();
        this.audio.release();
        }

        this.audio = this.media.create('/android_asset/www/assets/raw/mans.mp3');
        this.audio.play();
        this.audio.setVolume(0.8);
     }
}
        
