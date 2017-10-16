var WorkChooseScene = function() {};

WorkChooseScene.prototype = {
  nextScene: null,
  optionTimerDelay: 500,
  joseph:{
    fadeInSpeed: 1000,
  },
  josephPos: {
    top:{
      x: 1028,
      y: 816
    },
    bottom:{
      x: 1028,
      y: 841
    },
    speed: 900,
  },
  tween:{
    speed:500,
    method:{
      expOut: Phaser.Easing.Exponential.Out,
      cubicOut: Phaser.Easing.Cubic.Out,
      quad:{
        out: Phaser.Easing.Quadratic.Out
      },
      linear: Phaser.Easing.Linear.None
    },
  },
  coverAlpha:0.6,
  endingDelay: 500,
  topTxt:{
    size:3,
    line:[
      ['來看看今天能不能比平常還要早到公司，\n昨天差一點就破紀錄了呢，真可惜！'],
      ['要不是差點在大十字路口被搶快的車子撞到，\n我們才不會在那邊花上比往常還多的時間呢！'],
      ['還是今天換走有騎樓的那條路呢？\n走起來有個遮蔭比較不會覺得累～']
    ],
    ind: 0,
    lineSpacing: 20,
    speed: 500,
    startDelay: 1000,
    // stayDelay: 200,
    stayDelay: 4000,
    x:game.world.centerX,
    y:306,
  },
  question:{
    x: game.world.centerX,
    y: 306,
    distance: 50,
    line:'那麼要走哪邊呢？'
  },
  buttons:{
    txtDistance: 230, 
    txtStyle: {font: "52px SansCJK", fill: 'white', align:'center'},
    1:{
      sprite:'cross_sprite',
      hover:'cross_hover',
      target_scene:'CrossroadScene',
      txt:'[ 十字路口 ]',
      x:615,
      y:590
    },
    2:{
      sprite:'arcade_sprite',
      hover:'arcade_hover',
      target_scene:'ArcadeScene',
      txt:'[ 騎樓 ]',
      x:1305,
      y:590
    }
  },

  init: function () {
    // load settings from Json
    this.loadJson();

    // alpha no need to be 0
    this.brownBG = game.make.sprite(0, 0, 'loadingBG');
    this.endingBrownBG = game.make.sprite(0, 0, 'loadingBG');
    this.bg = game.make.sprite(0,0,'wc_bg');
    this.josephBack = game.make.sprite(this.josephPos.bottom.x, this.josephPos.bottom.y,'wc_joseph'); 

    // cover when choosing?
    this.cover = game.make.sprite(0,0,'wc_cover'); 

    //txts
    this.topLine = game.make.text(this.topTxt.x, this.topTxt.y, this.topTxt.line[this.topTxt.ind], {font: "50px SansCJK", fill: 'white', align:'center'});
    this.topLine.lineSpacing = this.topTxt.lineSpacing;
    this.questionLine = game.make.text(this.question.x, this.question.y - this.question.distance, this.question.line, {font: "50px SansCJK", fill: 'white'});;

    this.makeButtons();

    // set anchor and alpha
    utils.centerGameObjects([this.josephBack,  this.topLine, this.questionLine, this.button1, this.button1Choose, this.button2, 
      this.button2Choose, this.button1Txt, this.button2Txt]);
    utils.zeroAlpha([this.endingBrownBG, this.bg, this.cover, this.josephBack, this.topLine, this.questionLine,
     this.button1, this.button1Choose, this.button2, this.button2Choose, this.button1Txt, this.button2Txt]);
  },

  makeButtons:function(){
    // need 2 split button
    this.button1 = game.make.button(this.buttons[1].x, this.buttons[1].y, this.buttons[1].sprite, this.button1OnClick, this, 0, 0);  
    this.button1Choose = game.make.sprite(this.buttons[1].x, this.buttons[1].y, this.buttons[1].hover); 
    this.button1.onInputOver.add(this.button1Over, this);
    this.button1.onInputOut.add(this.button1Out, this);
    this.button1Txt = game.make.text(this.buttons[1].x, this.buttons[1].y + this.buttons.txtDistance, this.buttons[1].txt, this.buttons.txtStyle); 

    this.button2 = game.make.button(this.buttons[2].x, this.buttons[2].y, this.buttons[2].sprite, this.button2OnClick, this, 0, 0);  
    this.button2Choose = game.make.sprite(this.buttons[2].x, this.buttons[2].y, this.buttons[2].hover);
    this.button2.onInputOver.add(this.button2Over, this);
    this.button2.onInputOut.add(this.button2Out, this);
    this.button2Txt = game.make.text(this.buttons[2].x, this.buttons[2].y + this.buttons.txtDistance, this.buttons[2].txt, this.buttons.txtStyle); 
  },

  preload: function () {
    utils.addExistingMultiple([this.brownBG, this.bg, this.josephBack, this.topLine]);
    utils.addExistingMultiple([this.cover, this.questionLine, this.button1, this.button1Choose, this.button2, this.button2Choose, 
      this.button1Txt, this.button2Txt, this.endingBrownBG]);

    // disable buttons
    this.disableAllButtons();

    // make tweens
    this.makeStartTween();
    this.makeEndTween();
  },

  create: function () {
    this.CheckMusic();
  },

  CheckMusic:function(){
    
    if(bgmPlaying){
      bgmPlayer.fadeOut(musicFadeSpeed);
      bgmPlaying = false;
    } 

    moodPlayingLow = false;
    moodPlayingHigh = true;

    moodPlayerLow = game.add.audio("bgm_mood_low");
    moodPlayerHigh = game.add.audio("bgm_mood_high");
    moodPlayerHigh.loopFull();
    moodPlayerLow.loopFull();

    moodPlayerLow.play();
    moodPlayerLow.volume = 0;
    moodPlayerHigh.fadeIn(musicFadeSpeed, true);
  },

  makeStartTween:function(){
    // tween in bg
    game.add.tween(this.bg).to({alpha:1}, this.tween.speed, this.tween.method.linear, true);

    // joseph up ==> down ==> up
    this.josephIn =  game.add.tween(this.josephBack).to({alpha:1}, this.joseph.fadeInSpeed, this.tween.method.linear, true);
    this.josephUp =  game.add.tween(this.josephBack).to({y:this.josephPos.top.y}, this.josephPos.speed, this.tween.method.quad.out, false);
    this.josephDown =  game.add.tween(this.josephBack).to({y:this.josephPos.bottom.y}, this.josephPos.speed, this.tween.method.quad.out, false);
    utils.chainTween(this.josephIn, this.josephUp);
    utils.chainTween(this.josephUp, this.josephDown);
    utils.chainTween(this.josephDown, this.josephUp);

    // top txts
    this.topLineStart = game.add.tween(this.topLine).to({alpha:1}, this.topTxt.speed, this.tween.method.linear, true, this.topTxt.startDelay);
    this.topLineIn = game.add.tween(this.topLine).to({alpha:1}, this.topTxt.speed, this.tween.method.linear, false);
    this.topLineOut = game.add.tween(this.topLine).to({alpha:0}, this.topTxt.speed, this.tween.method.linear, false, this.topTxt.stayDelay);
    this.topLineOut.onComplete.add(this.changeTxtLine, this);
    utils.chainTween(this.topLineStart, this.topLineOut);
    utils.chainTween(this.topLineOut, this.topLineIn);
    utils.chainTween(this.topLineIn, this.topLineOut);

  },

  makeEndTween:function(){
    // cover in, option in, choose in, question in 
    this.coverIn = game.add.tween(this.cover).to({alpha:this.coverAlpha}, this.tween.speed, this.tween.method.linear, false);

    this.button1In = game.add.tween(this.button1).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.button1ChooseIn = game.add.tween(this.button1Choose).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.button1ChooseOut = game.add.tween(this.button1Choose).to({alpha:0}, this.tween.speed, this.tween.method.linear, false);
    this.button1TxtIn = game.add.tween(this.button1Txt).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);

    this.button2In = game.add.tween(this.button2).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.button2ChooseIn = game.add.tween(this.button2Choose).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.button2ChooseOut = game.add.tween(this.button2Choose).to({alpha:0}, this.tween.speed, this.tween.method.linear, false);
    this.button2TxtIn = game.add.tween(this.button2Txt).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);

    this.questionIn = game.add.tween(this.questionLine).to({alpha:1, y:this.question.y}, this.tween.speed, this.tween.method.cubicOut, false);
    utils.chainTween(this.coverIn, this.questionIn);

    // fade in brown BG as ending
    this.endingBrownBGIn = game.add.tween(this.endingBrownBG).to({alpha:1}, this.tween.speed, this.tween.method.linear, false, this.endingDelay);
    this.endingBrownBGIn.onComplete.add(this.switchScene, this);
  },

  startEndingTween:function(){
    this.coverIn.start();
    this.questionIn.start();

    game.time.events.add(Phaser.Timer.SECOND * this.optionTimerDelay / 1000 , this.activateOptions, this);
  },

  changeTxtLine:function(){
    this.topTxt.ind++;
    if (this.topTxt.ind < this.topTxt.size) {
      this.topLine.text = this.topTxt.line[this.topTxt.ind];
    }
    else{
      this.topTxt.ind = 0;
      this.topLine.visible = false;
      this.stopLoopTweens();
      // start ending tween, enable buttons
      this.startEndingTween();
    }
  },

  button1OnClick: function (){
    //disable button
    this.disableAllButtons();
    // fade in BG, txts
    this.nextScene = true;
    this.endingBrownBGIn.start();
  },
  button1Over:function(){
    this.button1ChooseIn.start();
  },
  button1Out:function(){
    this.button1ChooseOut.start();
  },

  button2OnClick: function (){
    //disable button
    this.disableAllButtons();
    // fade in BG, txts
    this.nextScene = false;
    this.endingBrownBGIn.start();
  },
  button2Over:function(){
    this.button2ChooseIn.start();
  },
  button2Out:function(){
    this.button2ChooseOut.start();
  },

  stopLoopTweens:function(){
      this.topLineIn.stop(); 
      this.topLineOut.stop(); 
      this.josephUp.stop();
      this.josephDown.stop();
  },

  disableAllButtons:function(){
    this.button1.inputEnabled = false;
    this.button2.inputEnabled = false;
  },

  enableOptionButtons:function(){
    this.button1.inputEnabled = true;
    this.button2.inputEnabled = true;
  },

  switchScene:function(){
    if (this.nextScene){
      this.startScene1();
    }else{
      this.startScene2();
    }
  },

  startScene1:function(){ // left
    game.state.start(this.buttons[1].target_scene);
  },
  startScene2:function(){ // right
    game.state.start(this.buttons[2].target_scene); 
  },

  activateOptions:function(){
    this.button1In.start();
    this.button1TxtIn.start();
    this.button2In.start();
    this.button2TxtIn.start();
    this.enableOptionButtons();
  },

  loadJson:function(){
    this.joseph.fadeInSpeed = settingsJSON.work_choose_scene.joseph_in_speed;
    this.optionTimerDelay = settingsJSON.work_choose_scene.option_timer_delay;
  }

};
