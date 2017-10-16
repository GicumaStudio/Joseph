var GameMenu = function() {};

GameMenu.prototype = {
  musicName:'work_crossroad',
  logoDelay: null,
  logoSpeed: null,
  buttonDelay: null,
  buttonSpeed: null, 
  josephPosition: {
    x: game.world.centerX,
    y: game.world.centerY + 240
  },
  logoPosition: {
    x: game.world.centerX,
    y: 340
  },
  trafficLightPosition: {
    x: 320,
    y: 150
  },
  buttonPosition: {
    x: game.world.centerX,
    y: game.world.height - 110
  },
  txt: [
    'Joseph是我的導盲犬，我們是合作無間的夥伴；',
    '儘管眼前是一片黑暗，有Joseph在身邊，步伐終於不再緩慢。'
  ],
  txtDistance: 30,
  tween:{
    speed: 3000,
    delay: 100,
    distance: 20, 
    method: Phaser.Easing.Exponential.Out,
    endSpeed: 500,
    methodLinear: Phaser.Easing.Linear.None
  },

  init: function () {
    // set param to Json setting
    this.loadJson();

    // alpha no need to be 0
    this.menuBG = game.make.sprite(0, 0, 'menu_bg');
    this.menuJoseph = game.make.sprite(this.josephPosition.x, this.josephPosition.y, 'menu_joseph');
    this.menuTrafficLight = game.make.sprite(this.trafficLightPosition.x, this.trafficLightPosition.y, 'menu_traffic_light');

    // alpha 0
    this.mainLogo = game.make.sprite(this.logoPosition.x, this.logoPosition.y - this.tween.distance, 'menu_logo'); 
    // below use anchor 0
    this.bus = game.make.sprite(0 - this.tween.distance, 271, 'menu_bus');
    this.car = game.make.sprite(1430 - this.tween.distance, 419, 'menu_car');
    this.motor = game.make.sprite(1225 + this.tween.distance, 315, 'menu_motor');
    this.motor_back = game.make.sprite(1253, 951 + this.tween.distance, 'menu_motor2');
    this.left_2_ppl = game.make.sprite(71, 618, 'menu_people_left');
    this.right_guy = game.make.sprite(1647 - this.tween.distance, 776, 'menu_people_man');
    this.mother_son = game.make.sprite(1070 + this.tween.distance, 733, 'menu_people_mother_and_son');
    this.top_3_ppl = game.make.sprite(1456 + this.tween.distance, 151, 'menu_people_right');
    this.girl1 = game.make.sprite(644 - this.tween.distance, 792, 'menu_people_student1');
    this.girl2 = game.make.sprite(469 - this.tween.distance, 764, 'menu_people_student2');
    this.old_lady = game.make.sprite(1474 + this.tween.distance, 687, 'menu_people_woman');
    this.ubike = game.make.sprite(1194 + this.tween.distance, 594,'menu_youbike');

    // start button
    this.startButton = game.make.button(this.buttonPosition.x, this.buttonPosition.y - this.tween.distance, 'menu_start_sprite', this.actionOnClick, this, 1, 0); //over, down, out

    // ending [brownBG], [texts]
    this.brownBG = game.make.sprite(0, 0, 'loadingBG');

    // set anchor and alpha
    utils.centerGameObjects([this.menuJoseph, this.startButton, this.mainLogo]);
    utils.zeroAlpha([this.mainLogo, this.startButton, this.bus, this.car, this.motor, this.motor_back, this.old_lady, this.left_2_ppl, 
      this.right_guy, this.ubike, this.mother_son, this.top_3_ppl, this.girl1, this.girl2, this.brownBG]);
  },

  preload: function () {
    game.add.existing(this.menuBG);
    game.add.existing(this.bus);
    game.add.existing(this.menuTrafficLight);
    game.add.existing(this.menuJoseph);
    game.add.existing(this.car);
    game.add.existing(this.motor);
    game.add.existing(this.old_lady);
    game.add.existing(this.motor_back);
    game.add.existing(this.left_2_ppl);
    game.add.existing(this.right_guy);
    game.add.existing(this.ubike);
    game.add.existing(this.mother_son);
    game.add.existing(this.top_3_ppl);
    game.add.existing(this.girl1);
    game.add.existing(this.girl2);

    // add logo, button
    game.add.existing(this.mainLogo);
    game.add.existing(this.startButton);
    this.disableButton();

    // add brownBG, texts
    game.add.existing(this.brownBG);

    // make tweens
    this.makeStartTween();
    this.makeEndTween();
  },

  actionOnClick: function (){
    //disable button
    this.disableButton();

    // fade in BG, txts
    this.brownBGIn.start();
  },

  create: function () {
    // music use sidewalk also,
    this.CheckMusic();
  },

  CheckMusic:function(){
    if(bgmPlaying){
      if(bgmPlayer.name != "bgm_menu"){
        bgmPlayer.fadeOut(musicFadeSpeed);
        bgmPlayer = game.add.audio("bgm_menu");
        bgmPlayer.loopFull();
        bgmPlayer.fadeIn(musicFadeSpeed, true);
      }
    }else{
      bgmPlayer = game.add.audio("bgm_menu");
      bgmPlayer.loopFull();
      bgmPlayer.fadeIn(musicFadeSpeed, true);
      bgmPlaying = true;
    }

    if(musicPlaying1){
      if (musicPlayer1.name != this.musicName && gameOptions.playMusic) {
        // musicPlayer.stop();
        musicPlayer1.fadeOut(musicFadeSpeed);
        musicPlaying1 = false;
        musicPlaying2 = true;
        musicPlayer2 = game.add.audio(this.musicName);
        musicPlayer2.loopFull();
        // musicPlayer.play();
        musicPlayer2.fadeIn(musicFadeSpeed, true);
      }
    }else if(musicPlaying2){
      if (musicPlayer2.name != this.musicName && gameOptions.playMusic) {
        // musicPlayer.stop();
        musicPlayer2.fadeOut(musicFadeSpeed);
        musicPlaying2 = false;
        musicPlaying1 = true;
        musicPlayer1 = game.add.audio(this.musicName);
        musicPlayer1.loopFull();
        // musicPlayer.play();
        musicPlayer1.fadeIn(musicFadeSpeed, true);
      }
    }else{
      musicPlaying1 = true;
      musicPlayer1 = game.add.audio(this.musicName);
      musicPlayer1.loopFull();
      // musicPlayer.play();
      musicPlayer1.fadeIn(musicFadeSpeed, true);
    }
  },


  makeStartTween:function(){
    // tween in all bunch of stuff
    game.add.tween(this.girl1).to({x:644, alpha:1}, this.tween.speed, this.tween.method, true);
    game.add.tween(this.mother_son).to({x:1070, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay);
    game.add.tween(this.old_lady).to({x:1474, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 2);
    this.girlIn = game.add.tween(this.girl2).to({x:469, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 2);
    this.girlIn.onComplete.add(this.enableButton, this);
    game.add.tween(this.ubike).to({x:1194, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 3);
    game.add.tween(this.motor_back).to({y:951, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 3);
    game.add.tween(this.bus).to({x:0, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 4);
    game.add.tween(this.right_guy).to({x:1647, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 5);
    game.add.tween(this.car).to({x:1430, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 6);
    game.add.tween(this.left_2_ppl).to({x:71, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 7);
    game.add.tween(this.motor).to({x:1225, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 8);
    game.add.tween(this.top_3_ppl).to({x:1456, alpha:1}, this.tween.speed, this.tween.method, true, this.tween.delay * 9);

    // tween in logo, button 
    game.add.tween(this.mainLogo).to({y:this.logoPosition.y, alpha: 1}, this.logoSpeed, this.tween.method, true, this.logoDelay);
    game.add.tween(this.startButton).to({y:this.buttonPosition.y, alpha: 1}, this.buttonSpeed, this.tween.method, true, this.buttonDelay);

  },

  makeEndTween:function(){


    this.brownBGIn = game.add.tween(this.brownBG).to({alpha: 1}, this.tween.endSpeed, this.tween.methodLinear, false);
    this.brownBGIn.onComplete.add(this.startHomeScene, this);
  },

  startHomeScene:function(){
    game.state.start("HomeScene");
  },

  enableButton:function(){
    this.startButton.inputEnabled = true; 
  },

  disableButton:function(){
    this.startButton.inputEnabled = false; 
  },

  loadJson:function(){
    this.logoSpeed = settingsJSON.game_menu.logo_speed;
    this.logoDelay = settingsJSON.game_menu.logo_delay;
    this.buttonSpeed = settingsJSON.game_menu.button_speed;
    this.buttonDelay = settingsJSON.game_menu.button_delay;
  }
};
