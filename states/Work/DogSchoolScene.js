var DogSchoolScene = function() {};

// ***********
// TODO:
// tween score and stuff 
// 5 buttons
// ***********

DogSchoolScene.prototype = {
  score_ind: null, // 1, 2, 3  for 1, 2, 3 stars
  ind_to_friendliness:{1: 'unfriendly', 2: 'normal', 3:'friendly'},
  score_level:[4, 8],  //  smaller than 4, smaller than 8?  
  // startDelay:200,
  startDelay:2000,
  bg:{
    light:{
      name: 'dogschool_bg_bright',
      position:{x:0,y:0},
      sprite: null
    },
    blur:{
      name: 'dogschool_bg_blur',
      // tweenSpeed: 250,
      tweenSpeed: 2500,
      position:{x:0,y:0},
      sprite: null,
      tweenIn: null
    }
  },
  joseph:{
    sprite: null,
    tweenIn: null,
    distance: 25,
    position:{
      1:{x:508,y:508.5},
      2:{x:457,y:435},
      3:{x:544.5,y:475}
    },
    3:'end_joe_high',
    2:'end_joe_mid',
    1:'end_joe_low'
  },
  city_level:{
    distance : 50,
    title:{
      position:{x: 1207.5, y:660.5},
      startScale: 0.05,
      sprite:null,
      tweenIn: null,
      tweenInScale: null,
      tweenAway:null
    },
    text:{
      position:{x: 1178, y:761},
      sprite:null,
      tweenIn: null
    },
    friendly:{
      titleName:'end_city_title_good',
      txtName:'end_city_txt_good'
    },
    normal:{
      titleName:'end_city_title_normal',
      txtName:'end_city_txt_normal'
    },
    unfriendly:{
      titleName:'end_city_title_bad',
      txtName:'end_city_txt_bad'
    }
  },
  startingTxtInd: 0,
  startingTxtLength: 0,
  startingTxtList:{
    tweenSpeed: 1000,
    tweenDelay: 1000,
    tweenOutDelay: 2,
    // tweenSpeed: 100,
    // tweenDelay: 100,
    // tweenOutDelay: 0.1,
    positions:{
      2:[
          {x: 960, y: 540 - 40},
          {x: 960, y: 540 + 40}
        ],
      3:[
          {x: 960, y: 540 - 80},
          {x: 960, y: 540},
          {x: 960, y: 540 + 80}
        ]
    },
    styles:{
      ind: 0,
      switchInd:1,
      0:{font: "38px SansCJK", fill: 'White'},
      1:{font: "bold 48px SansCJK", fill: 'White'}
    },
    1:[
        ['Joseph 我們到了！我們成功抵達公司了！','一路上經歷這麼多事情真是辛苦你了'],
        ['儘管碰上了許多困難','這最後一次的矇眼訓練你還是很成功喔！','只是……'],
        ['雖然你準備好了','這個世界卻似乎還沒準備好接受你呢'],
        ['對不起','我們明天再繼續加油吧']
      ],
    2:[
        ['Joseph 我們到了！我們差一點就破紀錄了好可惜！','一路上經歷這麼多事情真是辛苦你了'],
        ['儘管有一些小失誤','這一次的矇眼訓練你還是大成功喔！','表示……'],
        ['你幾乎準備好了','這個世界你就快要駕輕就熟了呢'],
        ['加把勁','我們明天再繼續努力吧']
      ],
    3:[
        ['Joseph 我們到了！我們成功破了昨天的紀錄了！','一路上經歷這麼多事情真是辛苦你了'],
        ['儘管面對這麼多挑戰','這最後一次的矇眼訓練你還是完美克服了！'],
        ['所以……','驕傲地穿上披風','去成為引領盲人心之所向的英雄吧'],
        ['恭喜你','從明天起你就是一隻合格的導盲犬了']
      ]
  },
  startingTxt:{
    1:{
      0:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
      1:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null},2:{txt: null, tweenIn: null, tweenOut:null}},
      2:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
      3:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}}
    },
    2:{
      0:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
      1:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null},2:{txt: null, tweenIn: null, tweenOut:null}},
      2:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
      3:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}}
    },
    3:{
      0:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
      1:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null},2:{txt: null, tweenIn: null, tweenOut:null}},
      2:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
      3:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null},2:{txt: null, tweenIn: null, tweenOut:null}},
      4:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null},2:{txt: null, tweenIn: null, tweenOut:null}},
      5:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null},2:{txt: null, tweenIn: null, tweenOut:null}},
      6:{0:{txt: null, tweenIn: null, tweenOut:null},1:{txt: null, tweenIn: null, tweenOut:null}},
    }
  },
  paperBack:{
    sprite:null,
    name:'end_paper_back', 
    position:{x: 1029,y: 508.5},
    distance: 25,
    tweenIn:null
  },
  topTxtBack:{
    sprite:null,
    name:'end_top_txt_back', 
    position:{x: 1016,y: 205},
    distance: 25,
    tweenIn:null
  },
  topTxt:{
    sprite:null,
    name:'end_top_txt', 
    position:{x: 1017,y: 208},
    distance: 25,
    tweenIn:null
  },
  lineA:{
    sprite:null,
    name:'end_lineA', 
    position:{x: 934,y: 322},
    width:466,
    tweenIn:null,
    tweenInScale:null
  },
  lineB:{
    sprite:null,
    name:'end_lineB', 
    position:{x: 935,y: 410},
    width:468,
    tweenIn:null,
    tweenInScale:null
  },
  lineC:{
    sprite:null,
    name:'end_lineC', 
    position:{x: 933,y: 375},
    width:458,
    tweenIn:null,
    tweenInScale:null
  },
  friendlyCityTxt:{
    sprite:null,
    name:'end_friendly_city_txt', 
    position:{x: 1159.5,y: 389.5},
    tweenIn:null,
  },
  cityTxtBack:{
    sprite:null,
    name:'end_city_description_back', 
    position:{x: 1189.5,y: 710},
    distance: 25,
    tweenIn:null
  },
  stars:{
    unfilled:{
      0:{
        sprite:null,
        tweenIn: null,
        tweenOut: null,
        position:{x: 1052,y: 499.5} ,
        name:'end_star_unfilled'
      },
      1:{
        sprite:null,
        tweenIn: null,
        tweenOut: null,
        position:{x: 1159.5,y: 499.5} ,
        name:'end_star_unfilled'
      },
      2:{
        sprite:null,
        tweenIn: null,
        tweenOut: null,
        position:{x: 1267,y: 499.5} ,
        name:'end_star_unfilled'
      }
    },
    filled:{
      scale: 2.5,
      0:{
        sprite:null,
        tweenIn: null,
        tweenScale: null,
        position:{x: 1052,y: 499.5} ,
        name:'end_star_filled'
      },
      1:{
        sprite:null,
        tweenIn: null,
        tweenScale: null,
        position:{x: 1159.5,y: 499.5} ,
        name:'end_star_filled'
      },
      2:{
        sprite:null,
        tweenIn: null,
        tweenScale: null,
        position:{x: 1267,y: 499.5} ,
        name:'end_star_filled'
      }
    } 
  }, 
  buttons:{
    tween:{
      speed:1000,
      delay:200,
      buttonDistance:25
    },
    plan:{
      button: null,
      buttonTweenIn:null,
      sprite: null,
      spriteTweenIn:null,
      imgName:"end_button_plan",
      buttonBack:"end_button_back",
      buttonPosition:{x: 575.5,y: 961},
      spritePosition:{x: 558.5,y: 961}
    },
    share:{
      button: null,
      buttonTweenIn:null,
      sprite: null,
      spriteTweenIn:null,
      imgName:"end_button_share",
      buttonBack:"end_button_back",
      buttonPosition:{x: 980.5,y: 961},
      spritePosition:{x: 963,y: 960.5}
    },
    replay:{
      button: null,
      buttonTweenIn:null,
      sprite: null,
      spriteTweenIn:null,
      imgName:"end_button_replay",
      buttonBack:"end_button_back",
      buttonPosition:{x: 1383.5,y: 961},
      spritePosition:{x: 1367.5,y: 961}
    },
    fb:{
      button: null,
      buttonTweenIn:null,
      name:"end_button_fb",
      position:{x: 1855,y: 57}
    },
    gicuma:{
      button: null,
      buttonTweenIn:null,
      name:"end_button_gicuma",
      position:{x: 1758.5,y: 55.5}
    }
  },
  tween:{
    dialogueDistance: 25,
    startDelay: 500,
    startSpeed: 1000,
    speed:500,
    introSpeed:2500,
    txtSpeed:1000,
    scoreUISpeed: 1000,
    starSpeed:400,
    scoreUI2Delay: 1,
    lineDelay:200,
    method:{
      expOut: Phaser.Easing.Exponential.Out,
      cubicOut: Phaser.Easing.Cubic.Out,
      quad:{
        out: Phaser.Easing.Quadratic.Out
      },
      linear: Phaser.Easing.Linear.None,
      backOut: Phaser.Easing.Back.Out
    }
  },

  init: function () {
    // load settings from json
    this.loadJson();
    this.CheckScore();
    this.SetStartingTxt();

    this.brownBG = game.make.sprite(0, 0, 'loadingBG');

    this.bg.light.sprite = game.make.sprite(this.bg.light.position.x, this.bg.light.position.y, this.bg.light.name);
    this.bg.blur.sprite = game.make.sprite(this.bg.blur.position.x, this.bg.blur.position.y, this.bg.blur.name); 

    this.joseph.sprite = game.make.sprite(this.joseph.position[this.score_ind].x - this.joseph.distance, this.joseph.position[this.score_ind].y, this.joseph[this.score_ind]);  

    // this.dialogue_txt_style = {font: "38px SansCJK", fill: 'Black'};
    // this.dialogue_txt = game.make.text(this.dialogue.txtLocation.x, this.dialogue.txtLocation.y + this.tween.dialogueDistance, "Starting text, shouldn't see this.", this.dialogue_txt_style);

    this.endingBrownBG = game.make.sprite(0, 0, 'loadingBG');

    this.makeUIImages();
    this.makeUIButtons();

    // set anchor and alpha
    utils.centerGameObjects([this.joseph.sprite]);
    utils.zeroAlpha([this.joseph.sprite, this.bg.light.sprite, this.bg.blur.sprite, this.endingBrownBG]);
  },

  preload: function () {  
    utils.addExistingMultiple([this.brownBG, this.bg.light.sprite, this.bg.blur.sprite])

    this.makeStartingTxts();

    // add UI stuff
    utils.addExistingMultiple([this.paperBack.sprite,this.joseph.sprite, this.topTxtBack.sprite, this.topTxt.sprite,
      this.lineA.sprite, this.lineB.sprite, this.lineC.sprite, this.friendlyCityTxt.sprite, this.cityTxtBack.sprite,
      this.city_level.title.sprite, this.city_level.text.sprite]);

    for (var i = 0; i < 3; i++) {
      utils.addExistingMultiple([this.stars.unfilled[i].sprite, this.stars.filled[i].sprite]);
    }

    // utils.addExistingMultiple([this.joseph.sprite]);

    utils.addExistingMultiple([this.buttons.share.button, this.buttons.replay.button, this.buttons.plan.button,
    this.buttons.share.sprite,   this.buttons.replay.sprite, this.buttons.plan.sprite, 
      this.buttons.gicuma.button, this.buttons.fb.button]);

    // disable buttons
    // this.disableAllButtons();

    // make tweens
    this.makeStartTween();
    this.makeEndTween();

    this.disableAllButtons(); // disable buttons   
  },

  create: function () {
    game.time.events.add(Phaser.Timer.SECOND * (1 + this.tween.introSpeed/1000), this.initBGBlur, this);
    game.time.events.add(Phaser.Timer.SECOND * (2.5 + this.tween.introSpeed/1000), this.initTxt, this);

    this.CheckMusic();
  },

  CheckMusic:function(){
    if(musicPlaying1){
      musicPlayer1.fadeOut(musicFadeSpeed);
      musicPlaying1 = false;
    } else if(musicPlaying2){
      musicPlayer2.fadeOut(musicFadeSpeed);
      musicPlaying2 = false; 
    }

    if(moodPlayerHigh){
      moodPlayerHigh.fadeOut(musicFadeSpeed);
      moodPlayerLow.stop();
    }

    if(bgmPlaying){
      bgmPlayer.fadeOut(musicFadeSpeed);
    } 

    if(this.score_ind == 1){
      bgmPlayer = game.add.audio("work_fin_low"); 
    }else if(this.score_ind == 2){
      bgmPlayer = game.add.audio("work_fin_mid"); 
    }else if(this.score_ind == 3){
      bgmPlayer = game.add.audio("work_fin_high"); 
    }

    bgmPlayer.fadeIn(musicFadeSpeed);

  },

  makeStartingTxts:function(){
    for (var i = 0; i < this.startingTxtLength; i++) {
      this.checkStartingTxtStyleInd(i);
      localLen = this.startingTxtList[this.score_ind][i].length;
      for (var j = 0; j < localLen; j++) {
        this.startingTxt[this.score_ind][i][j].txt = game.make.text(this.startingTxtList.positions[localLen][j].x, this.startingTxtList.positions[localLen][j].y, this.startingTxtList[this.score_ind][i][j], this.startingTxtList.styles[this.startingTxtList.styles.ind]);
        this.startingTxt[this.score_ind][i][j].tweenIn = game.add.tween(this.startingTxt[this.score_ind][i][j].txt).to({alpha:1}, this.startingTxtList.tweenSpeed, this.tween.method.linear, false, this.startingTxtList.tweenDelay); 
        this.startingTxt[this.score_ind][i][j].tweenOut = game.add.tween(this.startingTxt[this.score_ind][i][j].txt).to({alpha:0}, this.startingTxtList.tweenSpeed, this.tween.method.linear, false);  
        utils.addExistingMultiple([this.startingTxt[this.score_ind][i][j].txt]);
        utils.centerGameObjects([this.startingTxt[this.score_ind][i][j].txt]);
        utils.zeroAlpha([this.startingTxt[this.score_ind][i][j].txt]);
      }
      for (var j = 0; j < localLen - 1; j++) {
        this.startingTxt[this.score_ind][i][j].tweenIn.chain(this.startingTxt[this.score_ind][i][j + 1].tweenIn);
      }
      this.startingTxt[this.score_ind][i][localLen - 1].tweenIn.onComplete.add(this.countDownChangeTxt,this);
    }  
  },

  makeUIImages:function(){
    this.paperBack.sprite = game.make.sprite(this.paperBack.position.x, this.paperBack.position.y - this.paperBack.distance, this.paperBack.name);
    this.topTxtBack.sprite = game.make.sprite(this.topTxtBack.position.x, this.topTxtBack.position.y - this.topTxtBack.distance, this.topTxtBack.name);
    this.topTxt.sprite = game.make.sprite(this.topTxt.position.x, this.topTxt.position.y - this.topTxt.distance, this.topTxt.name);
    this.lineA.sprite = game.make.sprite(this.lineA.position.x, this.lineA.position.y, this.lineA.name);
    this.lineB.sprite = game.make.sprite(this.lineB.position.x, this.lineB.position.y, this.lineB.name);
    this.lineC.sprite = game.make.sprite(this.lineC.position.x, this.lineC.position.y, this.lineC.name);
    this.lineA.sprite.width = 10;
    this.lineB.sprite.width = 10;
    this.lineC.sprite.width = 10;

    this.cityTxtBack.sprite = game.make.sprite(this.cityTxtBack.position.x, this.cityTxtBack.position.y, this.cityTxtBack.name);
    this.friendlyCityTxt.sprite = game.make.sprite(this.friendlyCityTxt.position.x, this.friendlyCityTxt.position.y, this.friendlyCityTxt.name);

    this.city_level.title.sprite = game.make.sprite(this.city_level.title.position.x, this.city_level.title.position.y + this.city_level.distance, this.city_level[this.ind_to_friendliness[this.score_ind]].titleName);
    this.city_level.title.sprite.scale.setTo(this.city_level.title.startScale);
    this.city_level.text.sprite = game.make.sprite(this.city_level.text.position.x, this.city_level.text.position.y - this.city_level.distance, this.city_level[this.ind_to_friendliness[this.score_ind]].txtName);

    utils.centerGameObjects([this.paperBack.sprite, this.topTxtBack.sprite, this.topTxt.sprite,
      this.friendlyCityTxt.sprite, this.cityTxtBack.sprite, this.city_level.text.sprite, this.city_level.title.sprite]);
    utils.zeroAlpha([this.paperBack.sprite, this.topTxtBack.sprite, this.topTxt.sprite,this.lineA.sprite, this.lineB.sprite, this.lineC.sprite,
      this.friendlyCityTxt.sprite, this.cityTxtBack.sprite, this.city_level.text.sprite, this.city_level.title.sprite]);
     

    for (var i = 0; i < 3; i++) {
      this.stars.unfilled[i].sprite = game.make.sprite(this.stars.unfilled[i].position.x, this.stars.unfilled[i].position.y, this.stars.unfilled[i].name); 
      this.stars.filled[i].sprite = game.make.sprite(this.stars.filled[i].position.x, this.stars.filled[i].position.y, this.stars.filled[i].name);
      this.stars.filled[i].sprite.scale.setTo(this.stars.filled.scale);
      utils.centerGameObjects([this.stars.unfilled[i].sprite, this.stars.filled[i].sprite]);
      utils.zeroAlpha([this.stars.unfilled[i].sprite, this.stars.filled[i].sprite]);
    }
  },

  makeUIButtons:function(){
    this.buttons.plan.button = game.make.button(this.buttons.plan.buttonPosition.x, this.buttons.plan.buttonPosition.y - this.buttons.tween.buttonDistance, this.buttons.plan.buttonBack, this.planOnClick, this, 0, 1);  
    this.buttons.plan.sprite = game.make.sprite(this.buttons.plan.spritePosition.x, this.buttons.plan.spritePosition.y - this.buttons.tween.buttonDistance, this.buttons.plan.imgName);  
    this.buttons.share.button = game.make.button(this.buttons.share.buttonPosition.x, this.buttons.share.buttonPosition.y - this.buttons.tween.buttonDistance, this.buttons.share.buttonBack, this.shareOnClick, this, 0, 1);  
    this.buttons.share.sprite = game.make.sprite(this.buttons.share.spritePosition.x, this.buttons.share.spritePosition.y - this.buttons.tween.buttonDistance, this.buttons.share.imgName);  
    this.buttons.replay.button = game.make.button(this.buttons.replay.buttonPosition.x, this.buttons.replay.buttonPosition.y - this.buttons.tween.buttonDistance, this.buttons.replay.buttonBack, this.replayOnClick, this, 0, 1);  
    this.buttons.replay.sprite = game.make.sprite(this.buttons.replay.spritePosition.x, this.buttons.replay.spritePosition.y - this.buttons.tween.buttonDistance, this.buttons.replay.imgName);  

    this.buttons.fb.button = game.make.button(this.buttons.fb.position.x, this.buttons.fb.position.y, this.buttons.fb.name, this.fbOnClick, this, 0, 1);  
    this.buttons.gicuma.button = game.make.button(this.buttons.gicuma.position.x, this.buttons.gicuma.position.y, this.buttons.gicuma.name, this.gicumaOnClick, this, 0, 1);  

    utils.centerGameObjects([this.buttons.plan.button, this.buttons.plan.sprite, this.buttons.share.button, this.buttons.share.sprite, this.buttons.replay.button, this.buttons.replay.sprite, 
      this.buttons.fb.button, this.buttons.gicuma.button]);
    utils.zeroAlpha([this.buttons.plan.button, this.buttons.plan.sprite, this.buttons.share.button,
      this.buttons.share.sprite, this.buttons.replay.button, this.buttons.replay.sprite, this.buttons.fb.button, this.buttons.gicuma.button]);
  },

  // ******************
  // TXT TEXT functions
  // ******************

  initBGBlur:function(){
    this.bg.blur.tweenIn.start();
  },
  initTxt:function(){
    this.startingTxt[this.score_ind][0][0].tweenIn.start();
  },

  // ******************
  // TWEENING functions
  // ******************
  countDownChangeTxt:function(){
    game.time.events.add(Phaser.Timer.SECOND * this.startingTxtList.tweenOutDelay, this.tweenOutAndStartNewTxts, this);
  },

  tweenOutAndStartNewTxts:function(){
    for (var i = 0; i < this.startingTxtList[this.score_ind][this.startingTxtInd].length; i++) {
      this.startingTxt[this.score_ind][this.startingTxtInd][i].tweenOut.start();
    }
    // check if reach end
    if(this.startingTxtInd <  this.startingTxtLength - 1){
      this.startingTxtInd += 1;
      this.startingTxt[this.score_ind][this.startingTxtInd][0].tweenIn.start();
    }else{
      this.startScoreUITween1();
    }
  },

  makeStartTween:function(){
    // tween in bg
    game.add.tween(this.bg.light.sprite).to({alpha:1}, this.tween.introSpeed, this.tween.method.linear, true);
    this.bg.blur.tweenIn = game.add.tween(this.bg.blur.sprite).to({alpha:1}, this.bg.blur.tweenSpeed, this.tween.method.linear, false);

    // game.add.tween(this.joseph_good).to({alpha:1, x:this.joseph.location.x}, this.tween.startSpeed, this.tween.method.cubicOut, true, this.tween.startDelay);

    this.makeScoreUITweens();
  },

  makeScoreUITweens:function(){
    // Joe, top, paperBack, line, unfilled stars 
    this.joseph.tweenIn = game.add.tween(this.joseph.sprite).to({alpha:1, x:this.joseph.position.x}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    this.paperBack.tweenIn = game.add.tween(this.paperBack.sprite).to({alpha:1, y:this.paperBack.position.y}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    this.topTxtBack.tweenIn = game.add.tween(this.topTxtBack.sprite).to({alpha:1, y:this.topTxtBack.position.y}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    this.topTxt.tweenIn = game.add.tween(this.topTxt.sprite).to({alpha:1, y:this.topTxt.position.y}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);

    // wait a sec
    this.lineA.tweenIn = game.add.tween(this.lineA.sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay);
    this.lineA.tweenInScale = game.add.tween(this.lineA.sprite).to({width:this.lineA.width}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay);
    this.friendlyCityTxt.tweenIn = game.add.tween(this.friendlyCityTxt.sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 2);
    this.lineB.tweenIn = game.add.tween(this.lineB.sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 2);
    this.lineB.tweenInScale = game.add.tween(this.lineB.sprite).to({width:this.lineB.width}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 2);
    this.lineC.tweenIn = game.add.tween(this.lineC.sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 3);
    this.lineC.tweenInScale = game.add.tween(this.lineC.sprite).to({width:this.lineC.width}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 3);

    for (var i = 0; i < 3; i++) {
      this.stars.unfilled[i].tweenIn = game.add.tween(this.stars.unfilled[i].sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 2);
      this.stars.unfilled[i].tweenOut = game.add.tween(this.stars.unfilled[i].sprite).to({alpha:0}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false, this.tween.lineDelay * 2);
      this.stars.filled[i].tweenIn = game.add.tween(this.stars.filled[i].sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
      this.stars.filled[i].tweenInScale = game.add.tween(this.stars.filled[i].sprite.scale).to({x:1, y:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    }
     
    // wait a sec
    this.cityTxtBack.tweenIn = game.add.tween(this.cityTxtBack.sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    this.city_level.title.tweenIn = game.add.tween(this.city_level.title.sprite).to({alpha:1}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    this.city_level.title.tweenInScale = game.add.tween(this.city_level.title.sprite.scale).to({x:1, y:1}, this.tween.scoreUISpeed, this.tween.method.backOut, false);
    this.city_level.title.tweenAway = game.add.tween(this.city_level.title.sprite).to({y: this.city_level.title.position.y}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
    this.city_level.text.tweenIn = game.add.tween(this.city_level.text.sprite).to({alpha:1, y:this.city_level.text.position.y}, this.tween.scoreUISpeed, this.tween.method.cubicOut, false);
  },

  makeEndTween:function(){
    // fade in bad stuffs! explaination boxes
    // this.nextButtonIn = game.add.tween(this.next_button).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.makeButtonsTween();
    // fade in brown BG as ending
    this.endingBrownBGIn = game.add.tween(this.endingBrownBG).to({alpha:1}, this.tween.speed, this.tween.method.linear, false, this.endingDelay);
    this.endingBrownBGIn.onComplete.add(this.switchScene, this);
  },
  makeButtonsTween:function(){
    this.buttons.plan.buttonTweenIn = game.add.tween(this.buttons.plan.button).to({alpha:1, y:this.buttons.plan.buttonPosition.y}, this.buttons.tween.speed, this.tween.method.cubicOut, false);
    this.buttons.plan.spriteTweenIn = game.add.tween(this.buttons.plan.sprite).to({alpha:1, y:this.buttons.plan.spritePosition.y}, this.buttons.tween.speed, this.tween.method.cubicOut, false);
    this.buttons.share.buttonTweenIn = game.add.tween(this.buttons.share.button).to({alpha:1, y:this.buttons.share.buttonPosition.y}, this.buttons.tween.speed, this.tween.method.cubicOut, false, this.buttons.tween.delay);
    this.buttons.share.spriteTweenIn = game.add.tween(this.buttons.share.sprite).to({alpha:1, y:this.buttons.share.spritePosition.y}, this.buttons.tween.speed, this.tween.method.cubicOut, false, this.buttons.tween.delay);
    this.buttons.replay.buttonTweenIn = game.add.tween(this.buttons.replay.button).to({alpha:1, y:this.buttons.replay.buttonPosition.y}, this.buttons.tween.speed, this.tween.method.cubicOut, false, this.buttons.tween.delay * 2);
    this.buttons.replay.spriteTweenIn = game.add.tween(this.buttons.replay.sprite).to({alpha:1, y:this.buttons.replay.spritePosition.y}, this.buttons.tween.speed, this.tween.method.cubicOut, false, this.buttons.tween.delay * 2);

    this.buttons.fb.buttonTweenIn = game.add.tween(this.buttons.fb.button).to({alpha:1}, this.buttons.tween.speed, this.tween.method.cubicOut, false);
    this.buttons.gicuma.buttonTweenIn = game.add.tween(this.buttons.gicuma.button).to({alpha:1}, this.buttons.tween.speed, this.tween.method.cubicOut, false);
  },

  startScoreUITween1:function(){
    this.paperBack.tweenIn.start();
    this.joseph.tweenIn.start();
    this.topTxtBack.tweenIn.start();
    this.topTxt.tweenIn.start();
    this.friendlyCityTxt.tweenIn.start();
    this.lineA.tweenIn.start();
    this.lineB.tweenIn.start();
    this.lineC.tweenIn.start();
    this.lineA.tweenInScale.start();
    this.lineB.tweenInScale.start();
    this.lineC.tweenInScale.start();
    this.stars.unfilled[0].tweenIn.start();
    this.stars.unfilled[1].tweenIn.start();
    this.stars.unfilled[2].tweenIn.start();
    game.time.events.add(Phaser.Timer.SECOND * this.tween.scoreUI2Delay, this.startScoreUITween2, this);
  },

  startScoreUITween2:function(){
    // this.score_ind // 1, 2, 3
    for (var i = 0; i < this.score_ind; i++) {
      this.stars.filled[i].tweenIn.start();
      this.stars.filled[i].tweenInScale.start();
      this.stars.unfilled[i].tweenOut.start();
      // TODO sound
    }
    game.time.events.add(Phaser.Timer.SECOND * this.tween.scoreUI2Delay, this.startCityTxtTween, this);
  },

  startCityTxtTween:function(){
    this.cityTxtBack.tweenIn.start();
    this.city_level.title.tweenIn.start();
    this.city_level.title.tweenInScale.start();

    game.time.events.add(Phaser.Timer.SECOND * this.tween.scoreUI2Delay * 2, this.startCityTxtTween2, this);
  },
  startCityTxtTween2:function(){
    this.city_level.title.tweenAway.start();
    this.city_level.text.tweenIn.start();
    game.time.events.add(Phaser.Timer.SECOND * this.tween.scoreUI2Delay, this.startButtonTween, this);
  },

  startButtonTween:function(){
    this.buttons.plan.buttonTweenIn.start();
    this.buttons.plan.spriteTweenIn.start();
    this.buttons.share.buttonTweenIn.start(); 
    this.buttons.share.spriteTweenIn.start(); 
    this.buttons.replay.buttonTweenIn.start(); 
    this.buttons.replay.spriteTweenIn.start(); 

    this.buttons.fb.buttonTweenIn.start();
    this.buttons.gicuma.buttonTweenIn.start();

    // TODO
    game.time.events.add(Phaser.Timer.SECOND * (this.buttons.tween.speed + this.buttons.tween.delay * 3)/1000, this.enableAllButtons, this);
  },

  // ******************
  // BUTTONS functions
  // ******************
  planOnClick:function(){
    // TODO
    window.open('https://www.zeczec.com/projects/guidedog-joseph');

  },
  shareOnClick:function(){
    // TODO
    FB.ui({
        method: 'share',
        href: 'Joseph-red-cape.com',
      }, function(response){});
  },
  replayOnClick:function(){
    // TODO
    this.ResetVars();
    game.state.start("GameMenu");
  },
  fbOnClick:function(){
    window.open('https://www.facebook.com/gicumadesignstudio/');
  },
  gicumaOnClick:function(){
    window.open('https://www.gicumastudio.com/');
  },

  disableAllButtons:function(){
    this.disableButton(this.buttons.plan.button);
    this.disableButton(this.buttons.replay.button);
    this.disableButton(this.buttons.share.button);
    this.disableButton(this.buttons.fb.button);
    this.disableButton(this.buttons.gicuma.button);
  },
  enableAllButtons:function(){
    this.enableButton(this.buttons.plan.button);
    this.enableButton(this.buttons.replay.button);
    this.enableButton(this.buttons.share.button);
    this.enableButton(this.buttons.fb.button);
    this.enableButton(this.buttons.gicuma.button);
  },
  enableButton:function(button){
    button.inputEnabled = true; 
  },

  disableButton:function(button){
    button.inputEnabled = false; 
  },

  // ******************
  // HELPER functions
  // ******************

  ResetVars:function(){
    total_score = 0;

    bgmPlaying = false;
    bgmPlayer.stop();
    // bgmPlayer.fadeOut(musicFadeSpeed);

    // Phaser.signal.removeAll();
  },

  checkStartingTxtStyleInd:function(i_id){
    if(i_id > this.startingTxtList.styles.switchInd){
      this.startingTxtList.styles.ind = 1;
    }
  },

  SetStartingTxt:function(){
    this.startingTxtLength = this.startingTxtList[this.score_ind].length;
  },

  CheckScore:function(){
    if(total_score < this.score_level[0]){
      this.score_ind = 1;
    }else if(total_score < this.score_level[1]){
      this.score_ind = 2;
    }else{
      this.score_ind = 3;
    }
  },

  nextOnClick: function (){
    this.disableAllButtons();
    this.endingBrownBGIn.start();
  },

  switchScene:function(){
    this.ResetVars();

    game.state.start("GameMenu");
  },

  ResetVars:function(){
    this.startingTxtInd = 0;
    this.styles.ind = 0;
  },

  activateNextButton:function(){
    this.nextButtonIn.start();
    this.enableButton(this.next_button);
  },

  loadJson:function(){
    // this.pawBlinkSpeed = settingsJSON.arcade_scene.paw_blink_speed;
    // this.option.inDelay = settingsJSON.arcade_scene.option_in_delay;
    // this.tween.txtSpeed = settingsJSON.arcade_scene.txt_speed;
  }
};
