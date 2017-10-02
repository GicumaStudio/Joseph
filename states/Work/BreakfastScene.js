var BreakfastScene = function() {};

// ***********
// TODO:
// 
// ***********

BreakfastScene.prototype = {
  nextScene:'BreakfastTransition',
  musicName:'work_breakfast',
  background_good:{
    size: 1,
    fore: 1,
    0:{
      name:'breakfast_good_bg',
      sprite: null,
      position:{
        x: 0,y: 0
      },
      center_anchor: false,
      tweenIn: null,
      tweenOut: null
    },
  },
  background_bad:{
    size: 1,
    fore: 1,
    0:{
      name:'breakfast_bad_bg',
      sprite: null,
      position:{
        x: 0,y: 0
      },
      center_anchor: false,
      tweenIn: null,
      tweenOut: null
    }
  },
  background_bright:{
    size: 1,
    fore: 0,
    0:{
      name:'breakfast_bright',
      sprite: null,
      position:{
        x: 0,y: 0
      },
      center_anchor: false,
      tweenIn: null,
      tweenOut: null
    }
  },
  status:{
    distance: 25,
    weather_icon:{
      location:{x: 41,y: 24}
    },
    time:{
      location:{x: 103,y: 25}
    }, 
  },
  nextButtonLocation:{x: 1702,y: 977},
  pawBlinkSpeed : 1000,
  pawLocation:{
    x:1847,
    y:982
  },
  dialogue:{
    currentTxt: null,
    currentTxtInd:0,
    txtLocation:{
      x:1020,
      y:918
    },
    txt:{
      start:[
        '「還是這間早餐店烤的巧克力厚片最好吃了！',
        '有時候老闆娘還會送 Joseph 一些土司邊呢，\n看看你今天有沒有口福可以得到吧！」'
      ]
    }
  },
  joseph:{
    sprite:{
      good: 'arcade_joseph_good',
      bad:'arcade_joseph_bad'
    },
    distance: 25,
    location:{
      x: 247.5, y:722.5
    }
  },
  brighter_items:{
    size: 4,
    foreGroundId: 1, // starting from this is foreground
    prefix: 'breakfast_brighter_', 
    item:{
      0:{
        name:'sandwich',
        position:{
          x: 900,y: 570
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -200},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          groupTweenIn: null,
          groupTweenOut: null,
          txt:'導盲犬是不能吃人類的食物的，\n別拿人類的美食來獎勵牠們喔。' // 17 chars about
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      1:{
        name:'seat',
        position:{
          x: 574,y: 922.5
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'店家常在騎樓放置座位，散置的桌椅也\n可能造成視障朋友的危險喔。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      2:{
        name:'server',
        position:{
          x: 661,y: 455.5
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'「帥哥，今天要吃什麼？」'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      3:{
        name:'stand',
        position:{
          x: 1604,y: 769
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'店家常在騎樓放置座位，散置的桌椅也\n可能造成視障朋友的危險喔。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      }
    }
  }, 
  events:{
    size: 2,
    // size: 3,
    bad_mood_list:[15],
    // bad_mood_list:[0],
    // 0:{
    //   name: "door_bike_motor",
    //   number: "29",
    //   score: -1,
    //   starting_txts:[
    //     '你拿出手機正想用APP查公車還有多久會到，\n同時聽到長椅旁邊有兩個人開心地聊天，'
    //   ],
    //   options:null,
    //   ending_txts:null,
    // },
    0:{
      name: "store_take_arcade",
      number: "30",
      score: 1,
      starting_txts:[
        '「天啊，生意也太好了吧……」',
        '一走到早餐店邊馬上聽到人聲鼎沸，\n想要走到櫃檯去點餐，卻一直踢到椅子，',
        '看來能通行的路都給座位擋去了大半，\n連Joseph要通過都很困難了，',
        '「欸！帶狗的那個男生！今天也一樣嗎？」',
        '早餐店老闆娘很有朝氣地對著你大喊，\n你有些不好意思地答了聲：「對！」',
        '「欸，年輕人這樣子沒精神不可以吶！\n阿姨再多煎一顆蛋送你吃！」',
        '早餐店老闆娘手腳俐落地做好了你的餐點，\n拿在手上的厚實重量讓你不禁笑了出來，',
        '老闆娘接著說：\n「你跟你這隻都太瘦了啦！要多吃一點嘿！」',
        '但是老闆娘，狗吃得太胖的話，\n會被導盲犬學校的人罵的啦！'
      ],
      options:null,
      ending_txts:null
    },
    1:{
      name: "guest_feed_dog",
      number: "31",
      score:{A: -2,B: -3},
      starting_txts:[
        '「欸，丟給牠牠都不吃耶～」\n「可是他一直在看我耶，牠一定很想吃啦！」'
      ],
      options:{
        Q:'剛點完餐的你，正在一旁等著餐點，\n卻聽到想偷餵食物給 Joseph 的對話，你會：',
        A:'[ 制止他們 ]',
        B:'[ 不理會他們 ]',
        bad_option:'Both' // None?
      },
      ending_txts:{
        A:['「牠在工作中，請你們不要餵牠吃東西。」\n你馬上出聲制止，卻惹來他們不屑的回嘴：',
          '「兇什麼啊奇怪耶，\n你又看不到怎麼知道我們是要餵你的狗咧？」',
          '「噢好可憐喔，狗狗想要吃東西都沒辦法～」',
          '你想要再跟他們進一步解釋緣由，\n他們卻早嚷嚷著「好可憐」之類的話離去了。'],
        B:['你繼續等著你的餐點，卻聽到他們繼續說：',
        '「都放在牠頭上了，牠也還是不吃耶～」\n「好奇怪喔，怎麼有狗不喜歡吃肉啊～」',
        '你朝 Joseph 頭上一摸還真的摸到一小塊肉：\n「請你們不要餵牠吃東西，牠…」',
        '「是你自己顧不好狗，還怪我們想要餵牠喔！」\n「好心被雷親啦！」',
        '沒想到還沒聽你解釋，\n那兩個人早已開始自顧自地酸言酸語。',
        '早餐店的聲音很嘈雜，\n但他們的一字一句你都聽得非常清楚。']
      }
    }
  },
  choseEventNumber: -1,
  choseEvent:{
    sprite: null,
    tweenIn: null,
    tweenOut: null
  },
  option:{
    inDelay: 1000,
    currentOption: null,
    currentAnswer: null,
    location:{
      Q:{ x: 1000, y:676},
      A:{ x: 1000, y:894},
      B:{ x: 1000, y:972}
    }
  },
  tween:{
    dialogueDistance: 25,
    startDelay: 500,
    startSpeed: 1000,
    speed:500,
    txtSpeed:1000,
    method:{
      expOut: Phaser.Easing.Exponential.Out,
      cubicOut: Phaser.Easing.Cubic.Out,
      quad:{
        out: Phaser.Easing.Quadratic.Out
      },
      linear: Phaser.Easing.Linear.None
    }
  },
  description_box:'arcade_description_box',
  mood:{
    location:{x:210, y:190},
    status:'good'
  },

  init: function () {
    // load settings from json
    this.loadJson();

    // random choose and set event
    this.setRandomEvent();

    this.brownBG = game.make.sprite(0, 0, 'loadingBG');

    // Background!!!!!! this.bg
    for (var i = 0; i < this.background_good.size; i++) {
      this.background_good[i].sprite = game.make.sprite(this.background_good[i].position.x, this.background_good[i].position.y, this.background_good[i].name);
      if(this.background_good[i].center_anchor){
        utils.centerGameObjects([this.background_good[i].sprite]);
      }
      utils.zeroAlpha([this.background_good[i].sprite]);
    }
    for (var i = 0; i < this.background_bad.size; i++) {
      this.background_bad[i].sprite = game.make.sprite(this.background_bad[i].position.x, this.background_bad[i].position.y, this.background_bad[i].name);
      if(this.background_bad[i].center_anchor){
        utils.centerGameObjects([this.background_bad[i].sprite]);
      }
      utils.zeroAlpha([this.background_bad[i].sprite]);
    }
    for (var i = 0; i < this.background_bright.size; i++) {
      this.background_bright[i].sprite = game.make.sprite(this.background_bright[i].position.x, this.background_bright[i].position.y, this.background_bright[i].name);
      if(this.background_bright[i].center_anchor){
        utils.centerGameObjects([this.background_bright[i].sprite]);
      }
      utils.zeroAlpha([this.background_bright[i].sprite]);
    }

    // anchor 0
    this.status_box = game.make.sprite(0, 0 - this.status.distance, 'arcade_status');
    this.sunny_icon = game.make.sprite(this.status.weather_icon.location.y, this.status.weather_icon.location.x - this.status.distance, 'arcade_sun_icon');
    this.status_time_1015 = game.make.sprite(this.status.time.location.x, this.status.time.location.y - this.status.distance, 'arcade_time_1015');
    this.status_time_1020 = game.make.sprite(this.status.time.location.x, this.status.time.location.y, 'arcade_time_1020');

    // anchor 0.5
    this.joseph_good = game.make.sprite(this.joseph.location.x - this.joseph.distance, this.joseph.location.y, this.joseph.sprite.good);
    this.joseph_bad = game.make.sprite(this.joseph.location.x, this.joseph.location.y, this.joseph.sprite.bad);
    this.next_button = game.make.button(this.nextButtonLocation.x, this.nextButtonLocation.y, 'arcade_next_sprite', this.nextOnClick, this, 1, 0); 
    this.bad_mood = game.make.sprite(this.mood.location.x, this.mood.location.y, 'arcade_bad_mood')

    this.dialogue_paw = game.make.sprite(this.pawLocation.x, this.pawLocation.y + this.tween.dialogueDistance, 'arcade_dialogue_paw');
    this.dialogue_button = game.make.button(1920, 1080 + this.tween.dialogueDistance, 'arcade_dialogue_sprite', this.dialogueOnClick, this, 0, 0); 
    this.dialogue_button.anchor.setTo(1);

    this.dialogue_txt_style = {font: "38px SansCJK", fill: 'Black'};
    this.dialogue_txt = game.make.text(this.dialogue.txtLocation.x, this.dialogue.txtLocation.y + this.tween.dialogueDistance, "Starting text, shouldn't see this.", this.dialogue_txt_style);

    this.option_txt_Q_style = {font: "38px SansCJK", fill: 'Black'};
    this.option_txt_AB_style = {font: "38px SansCJK", fill: 'Black'};
    this.option_box = game.make.sprite(1920, 1080 + this.tween.dialogueDistance, 'arcade_option_box');
    this.option_box.anchor.setTo(1);
    this.option_txt_Q = game.make.text(this.option.location.Q.x, this.option.location.Q.y + this.tween.dialogueDistance, "Question ", this.option_txt_Q_style);
    this.option_txt_A = game.make.text(this.option.location.A.x, this.option.location.A.y + this.tween.dialogueDistance, "A. ", this.option_txt_AB_style);
    this.option_txt_B = game.make.text(this.option.location.B.x, this.option.location.B.y + this.tween.dialogueDistance, "B. ", this.option_txt_AB_style);

    this.grey_cover = game.make.sprite(0, 0, 'arcade_grey_cover');
    this.situation_grey_back = game.make.sprite(game.world.centerX, game.world.centerY, 'arcade_situation_grey_back');

    this.endingBrownBG = game.make.sprite(0, 0, 'loadingBG');

    this.makeItemButtons();

    // set anchor and alpha
    utils.centerGameObjects([this.joseph_good, this.joseph_bad, this.next_button, this.dialogue_paw, this.situation_grey_back,
      this.bad_mood, this.choseEvent.sprite]);
    utils.zeroAlpha([this.status_box, this.status_time_1015, this.status_time_1020, this.sunny_icon, this.bad_mood,
      this.joseph_good, this.joseph_bad, this.dialogue_button, this.dialogue_txt, this.dialogue_paw, this.next_button, this.option_box,
      this.situation_grey_back, this.choseEvent.sprite, this.grey_cover, this.option_txt_Q, this.option_txt_A, this.option_txt_B, this.endingBrownBG]);
  },


  preload: function () {  
    // set option AB events
    this.setOptionABEvents();

    utils.addExistingMultiple([this.brownBG])

    // utils.addExistingMultiple([this.joseph_good, this.joseph_bad]);
    // add background
    for (var i = 0; i < this.background_good.fore; i++) {
      utils.addExistingMultiple([this.background_good[i].sprite]);
    }
    for (var i = 0; i < this.background_bad.fore; i++) {
      utils.addExistingMultiple([this.background_bad[i].sprite]);
    }
    for (var i = 0; i < this.background_bright.fore; i++) {
      utils.addExistingMultiple([this.background_bright[i].sprite]);
    }

    utils.addExistingMultiple([this.status_box, this.status_time_1015, this.status_time_1020, this.sunny_icon]);

    // this.addItemButtons();

    utils.addExistingMultiple([this.joseph_good, this.joseph_bad]);

    // add foreground
    for (var i = this.background_good.fore; i < this.background_good.size; i++) {
      utils.addExistingMultiple([this.background_good[i].sprite]);
    }
    for (var i = this.background_bad.fore; i < this.background_bad.size; i++) {
      utils.addExistingMultiple([this.background_bad[i].sprite]);
    }
    for (var i = this.background_bright.fore; i < this.background_bright.size; i++) {
      utils.addExistingMultiple([this.background_bright[i].sprite]);
    }

    this.addItemButtons();

    utils.addExistingMultiple([this.bad_mood, this.grey_cover, this.situation_grey_back, this.choseEvent.sprite, 
      this.dialogue_button, this.dialogue_txt, this.dialogue_paw,
      this.option_box, this.option_txt_A, this.option_txt_B, this.option_txt_Q, this.next_button, this.endingBrownBG]);

    // set up item txt box groups
    this.makeItemDescriptionGroups();

    // disable buttons
    this.disableAllButtons();

    // make tweens
    this.makeStartTween();
    this.makeItemTween();
    this.makeItemDescriptionGroupTweens();
    this.makeEndTween();
  },

  create: function () {
    game.time.events.add(Phaser.Timer.SECOND * 1.5, this.initDialogue, this);

    this.CheckMusic(); 
  },

  CheckMusic:function(){
    if(musicPlaying1){
      if (musicPlayer1.name !== this.musicName && gameOptions.playMusic) {
        // musicPlayer.stop();
        musicPlayer1.fadeOut(musicFadeSpeed);
        musicPlaying1 = false;
        musicPlaying2 = true;
        musicPlayer2 = game.add.audio(this.musicName);
        musicPlayer2.loop = true;
        // musicPlayer.play();
        musicPlayer2.fadeIn(musicFadeSpeed);
      }
    }else if(musicPlaying2){
      if (musicPlayer2.name !== this.musicName && gameOptions.playMusic) {
        // musicPlayer.stop();
        musicPlayer2.fadeOut(musicFadeSpeed);
        musicPlaying2 = false;
        musicPlaying1 = true;
        musicPlayer1 = game.add.audio(this.musicName);
        musicPlayer1.loop = true;
        // musicPlayer.play();
        musicPlayer1.fadeIn(musicFadeSpeed);
      }
    }else{
      musicPlaying1 = true;
      musicPlayer1 = game.add.audio(this.musicName);
      musicPlayer1.loop = true;
      // musicPlayer.play();
      musicPlayer1.fadeIn(musicFadeSpeed);
    }
  },
  // ******************
  // BRIGHTER ITEM functions
  // ******************

  makeItemButtons:function(){
    // make all the "bright" stuff here 
    for (var i = 0; i < this.brighter_items.size; i++) {
      this.brighter_items.item[i].button = game.make.button(this.brighter_items.item[i].position.x, this.brighter_items.item[i].position.y
        , this.brighter_items.prefix + this.brighter_items.item[i].name); // , this.dummyOnClick, this, 0, 0); 

      this.brighter_items.item[i].button.onInputOver.add(this.itemOnOver, this);
      this.brighter_items.item[i].button.onInputOut.add(this.itemOnOut, this);

      // set anchor, alpha; disabled in diableAllButtons
      this.brighter_items.item[i].button.alpha = 0;
      this.brighter_items.item[i].button.anchor.setTo(0.5);
    }
  },

  makeItemDescriptionGroups:function(){
    // Should call this in preload
    // group have relative postion to the center of Items, set alpha to 0
    // group = [box, description txts] (both (0,0) and anchor 0.5)
    for (var i = 0; i < this.brighter_items.size; i++) {
      // make group
      this.brighter_items.item[i].description.group = game.add.group();
      this.brighter_items.item[i].description.group.x = this.brighter_items.item[i].position.x + this.brighter_items.item[i].description.relative_position.x + this.brighter_items.item[i].description.tween_distance.x;
      this.brighter_items.item[i].description.group.y = this.brighter_items.item[i].position.y + this.brighter_items.item[i].description.relative_position.y + this.brighter_items.item[i].description.tween_distance.y;

      // make box and txt
      this.brighter_items.item[i].description.box = game.make.sprite(0, 0, this.description_box);

      this.box_txt_style = {font: "38px SansCJK", fill: 'White'};
      this.brighter_items.item[i].description.box_txt = game.make.text(0, 0, this.brighter_items.item[i].description.txt, this.box_txt_style);

      // center box and box_txt, zero alpha description group 
      utils.centerGameObjects([this.brighter_items.item[i].description.box, this.brighter_items.item[i].description.box_txt]);  
      utils.zeroAlpha([this.brighter_items.item[i].description.group]);

      // add here should on top of everything
      utils.addExistingMultiple([this.brighter_items.item[i].description.box, this.brighter_items.item[i].description.box_txt]);

      // add to group
      this.brighter_items.item[i].description.group.addMultiple([this.brighter_items.item[i].description.box, this.brighter_items.item[i].description.box_txt]);
    }
  },

  itemOnOver:function(button){
    this.buttonId = this.getButtonId(button);
    this.brighter_items.item[this.buttonId].tweenIn.start();
    this.brighter_items.item[this.buttonId].description.boxTweenIn.start();
  },

  itemOnOut:function(button){
    this.buttonId = this.getButtonId(button);
    this.brighter_items.item[this.buttonId].tweenOut.start();
    this.brighter_items.item[this.buttonId].description.boxTweenOut.start();
  },

  addItemButtons:function(){
    for (var i = 0; i < this.brighter_items.size; i++) {
      // if(i == this.brighter_items.foreGroundId){
      //   utils.addExistingMultiple([this.bg_bright]);
      // }
      utils.addExistingMultiple([this.brighter_items.item[i].button]);
    }
  },

  disableItemButtons:function(){
    for (var i = 0; i < this.brighter_items.size; i++) {
      this.disableButton(this.brighter_items.item[i].button);
    }
  },

  enableItemButtons:function(){
    for (var i = 0; i < this.brighter_items.size; i++) {
      this.enableButton(this.brighter_items.item[i].button);
    }
  },

  getButtonId:function(button){
    for (var i = 0; i < this.brighter_items.size; i++) {
      if (button == this.brighter_items.item[i].button){
        return i; 
      }
    }
  },

  // ******************
  // TWEENING functions
  // ******************

  makeStartTween:function(){
    // tween in bg
    // game.add.tween(this.bg_good).to({alpha:1}, this.tween.speed, this.tween.method.linear, true);
    for (var i = 0; i < this.background_good.size; i++) {
      this.background_good[i].tweenIn = game.add.tween(this.background_good[i].sprite).to({alpha:1}, this.tween.speed, this.tween.method.linear, true); 
    }
    game.add.tween(this.status_box).to({alpha:1, y:0}, this.tween.startSpeed, this.tween.method.cubicOut, true, this.tween.startDelay);
    game.add.tween(this.sunny_icon).to({alpha:1, y:24}, this.tween.startSpeed, this.tween.method.cubicOut, true, this.tween.startDelay);
    game.add.tween(this.status_time_1015).to({alpha:1, y:25}, this.tween.startSpeed, this.tween.method.cubicOut, true, this.tween.startDelay);
    game.add.tween(this.joseph_good).to({alpha:1, x:this.joseph.location.x}, this.tween.startSpeed, this.tween.method.cubicOut, true, this.tween.startDelay);

    //dialogues
    this.pawIn = game.add.tween(this.dialogue_paw).to({alpha:1}, this.pawBlinkSpeed, this.tween.method.linear, false);
    this.pawOut = game.add.tween(this.dialogue_paw).to({alpha:0}, this.pawBlinkSpeed, this.tween.method.linear, false);
    utils.chainTween(this.pawOut, this.pawIn);
    this.pawOutOnly = game.add.tween(this.dialogue_paw).to({alpha:0}, this.pawBlinkSpeed, this.tween.method.linear, false);
    // blink paw
    this.makePawOutBlink();
    this.pawIn.onComplete.add(this.startPawOutBlink,this);

    this.dialogueBoxIn = game.add.tween(this.dialogue_button).to({alpha:1}, this.tween.txtSpeed, this.tween.method.cubicOut, false);
    this.dialogueBoxOut = game.add.tween(this.dialogue_button).to({alpha:0}, this.tween.txtSpeed, this.tween.method.cubicOut, false);
    this.dialogueTxtIn = game.add.tween(this.dialogue_txt).to({alpha:1}, this.tween.textSpeed, this.tween.method.cubicOut, false)
    this.dialogueTxtIn.onComplete.add(this.enableDialogueButton, this);
    this.dialogueTxtOutOnly = game.add.tween(this.dialogue_txt).to({alpha:0}, this.tween.textSpeed, this.tween.method.cubicOut, false)
    this.dialogueTxtOut = game.add.tween(this.dialogue_txt).to({alpha:0}, this.tween.textSpeed, this.tween.method.cubicOut, false)
    this.dialogueTxtOut.onComplete.add(this.switchDialogueTxt, this);

    // situation
    this.makeEventTween();

    this.greyCoverIn = game.add.tween(this.grey_cover).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.greyCoverOut = game.add.tween(this.grey_cover).to({alpha:0}, this.tween.speed, this.tween.method.linear, false);

    this.situationBoxIn = game.add.tween(this.situation_grey_back).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.situationBoxOut = game.add.tween(this.situation_grey_back).to({alpha:0}, this.tween.speed, this.tween.method.linear, false);
    this.greyCoverIn.onComplete.add(this.situationFadeIn, this);

    // situation options
    this.optionBoxIn = game.add.tween(this.option_box).to({alpha:1, y: 1080}, this.tween.txtSpeed, this.tween.method.cubicOut, false, this.option.inDelay);
    this.optionBoxOut = game.add.tween(this.option_box).to({alpha:0}, this.tween.txtSpeed, this.tween.method.cubicOut, false);
    this.optionQIn = game.add.tween(this.option_txt_Q).to({alpha:1, y: this.option.location.Q.y}, this.tween.textSpeed, this.tween.method.cubicOut, false, this.option.inDelay);
    this.optionQOut = game.add.tween(this.option_txt_Q).to({alpha:0}, this.tween.txtSpeed, this.tween.method.cubicOut, false);
    this.optionAIn = game.add.tween(this.option_txt_A).to({alpha:1, y: this.option.location.A.y}, this.tween.textSpeed, this.tween.method.cubicOut, false, this.option.inDelay);
    this.optionAOut = game.add.tween(this.option_txt_A).to({alpha:0}, this.tween.txtSpeed, this.tween.method.cubicOut, false);
    this.optionBIn = game.add.tween(this.option_txt_B).to({alpha:1, y: this.option.location.B.y}, this.tween.textSpeed, this.tween.method.cubicOut, false, this.option.inDelay);
    this.optionBOut = game.add.tween(this.option_txt_B).to({alpha:0}, this.tween.txtSpeed, this.tween.method.cubicOut, false);

  },

  makeEventTween:function(){
    this.choseEvent.tweenIn = game.add.tween(this.choseEvent.sprite).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    this.choseEvent.tweenOut = game.add.tween(this.choseEvent.sprite).to({alpha:0}, this.tween.speed, this.tween.method.linear, false);

    // this.situationInMotor = game.add.tween(this.situation_motor).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);
    // this.situationOutMotor = game.add.tween(this.situation_motor).to({alpha:0}, this.tween.speed, this.tween.method.linear, false);
  },

  makeItemTween:function(){
    for (var i = 0; i < this.brighter_items.size; i++) {
      this.brighter_items.item[i].tweenIn = game.add.tween(this.brighter_items.item[i].button).to({alpha:1}, this.tween.speed, this.tween.method.cubicOut, false);
      this.brighter_items.item[i].tweenOut = game.add.tween(this.brighter_items.item[i].button).to({alpha:0}, this.tween.speed, this.tween.method.cubicOut, false);
    }
  },

  makeEndTween:function(){
    this.badMoodIn = game.add.tween(this.bad_mood).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);

    // fade in bad stuffs! explaination boxes
    this.nextButtonIn = game.add.tween(this.next_button).to({alpha:1}, this.tween.speed, this.tween.method.linear, false);

    // fade in brown BG as ending
    this.endingBrownBGIn = game.add.tween(this.endingBrownBG).to({alpha:1}, this.tween.speed, this.tween.method.linear, false, this.endingDelay);
    this.endingBrownBGIn.onComplete.add(this.switchScene, this);

  },
  
  makeItemDescriptionGroupTweens:function(){
    // make groups tween in, out 

    for (var i = 0; i < this.brighter_items.size; i++) {
        // description:{
        //   group: null,
        //   relative_position:{x: 0,y: -200},
        //   tween_distance:{x: 0, y: 50},
        //   box: null,
        //   box_txt:null,
        //   boxTweenIn: null,
        //   boxTweenOut: null
        //   txt:'臨時放置的家庭垃圾和回收物除了不雅觀，也可能造成視障朋友移動時的阻礙與危險。',
        // },
      this.brighter_items.item[i].description.boxTweenIn = game.add.tween(this.brighter_items.item[i].description.group).
      to({alpha:1,
        x: this.brighter_items.item[i].position.x + this.brighter_items.item[i].description.relative_position.x,
        y: this.brighter_items.item[i].position.y + this.brighter_items.item[i].description.relative_position.y},
        this.tween.speed, this.tween.method.cubicOut, false);

      this.brighter_items.item[i].description.boxTweenOut = game.add.tween(this.brighter_items.item[i].description.group).
      to({alpha:0,
        x: this.brighter_items.item[i].position.x + this.brighter_items.item[i].description.relative_position.x + this.brighter_items.item[i].description.tween_distance.x ,
        y: this.brighter_items.item[i].position.y + this.brighter_items.item[i].description.relative_position.y + this.brighter_items.item[i].description.tween_distance.y},
        this.tween.speed, this.tween.method.cubicOut, false);
    }
  },

  fadeInEndingObstacles:function(){
    // fade in "bright" items

    this.enableItemButtons();

    game.time.events.add(Phaser.Timer.SECOND * 0.5, this.activateNextButton, this);
  },

  // ******************
  // DIALOGUE functions
  // ******************

  initDialogue:function(){
    if(this.events[this.choseEventNumber].options){
      this.dialogue.currentTxt = this.dialogue.txt.start.concat(this.events[this.choseEventNumber].starting_txts);
    }else{
      this.dialogue.currentTxt = this.dialogue.txt.start;
    }
    this.dialogue_txt.text = this.dialogue.currentTxt[this.dialogue.currentTxtInd];
    game.add.tween(this.dialogue_button).to({alpha:1, y:1080}, this.tween.txtSpeed, this.tween.method.cubicOut,true);
    game.add.tween(this.dialogue_txt).to({alpha:1, y:this.dialogue.txtLocation.y}, this.tween.txtSpeed, this.tween.method.cubicOut,true);
    // game.add.tween(this.dialogue_paw).to({alpha:1, y:this.pawLocation.y}, this.tween.speed, this.tween.method.cubicOut,true);
    this.pawIn.start();
    this.enableDialogueButton();
  },

  startDialogueBox:function(){
    this.dialogue.currentTxtInd = 0
    this.dialogue_txt.text = this.dialogue.currentTxt[this.dialogue.currentTxtInd];

    // check if 2 \n
    if(this.dialogue.currentTxt[this.dialogue.currentTxtInd].split('\n').length > 2){
      this.dialogue_txt.y = this.dialogue.txtLocation.y - thirdLineOffset;
    }else{
      this.dialogue_txt.y = this.dialogue.txtLocation.y;
    }
    
    this.dialogueTxtIn.start();
    this.pawIn.start();
    this.dialogueBoxIn.start();

    this.enableDialogueButton();
  },

  endDialogue:function(){
    // double check
    if(this.pawOutBlink.isRunning){
      this.pawOutBlink.stop();
    }
    this.pawOutOnly.start();
    this.dialogueTxtOutOnly.start();
    this.dialogueBoxOut.start();
  },

  switchDialogueTxt:function(){
    this.dialogue.currentTxtInd ++;
    // check if 2 \n
    if(this.dialogue.currentTxt[this.dialogue.currentTxtInd].split('\n').length > 2){
      this.dialogue_txt.y = this.dialogue.txtLocation.y - thirdLineOffset;
    }else{
      this.dialogue_txt.y = this.dialogue.txtLocation.y;
    }
    this.dialogue_txt.text = this.dialogue.currentTxt[this.dialogue.currentTxtInd]; 
    this.dialogueTxtIn.start();
  },

  dialogueOnClick: function (){
    // stop paw blinking
    this.stopPawBlink();
    this.disableButton(this.dialogue_button);

    // check if text reaches ending
    if (this.dialogue.currentTxtInd >=  this.dialogue.currentTxt.length - 1) {
      this.endDialogue();

      if (this.option.currentOption == 'end'){
        // end
        this.changeTime();
        this.checkMood();
        this.situationFadeOut();
      }else{
        this.option.currentOption = this.events[this.choseEventNumber].number;
        this.startSituationOption();
      }
    } else{
      // fade out ==> change txt ==> fade in
      this.pawOut.start();
      this.dialogueTxtOut.start();
    }
  },

  // ******************
  // SITUATIONS functions
  // ******************

  setRandomEvent:function(){
    // set random number, test first
    // this.choseEventNumber = 3;
    // this.choseEventNumber = 1;
    this.choseEventNumber = utils.getRandomInt(this.events.size);

    // set mood in front if no options
    if(this.events[this.choseEventNumber].options == null){
      if (this.events.bad_mood_list.includes(this.choseEventNumber)){
        this.mood.status = 'bad'; // get the mood 
      }
      total_score += this.events[this.choseEventNumber].score;
    }
    
    this.choseEvent.sprite = game.make.sprite(960, 540, 'event_' + this.events[this.choseEventNumber].number);
  },

  startSituationOption:function(){
    // fade in grey_cover, situation_back & situation , option box & options
    this.greyCoverIn.start();

  },

  situationFadeIn:function(){
    this.situationBoxIn.start();
    this.choseEvent.tweenIn.start();

    if(this.events[this.choseEventNumber].options != null){
      this.setOptionQAB();
      game.time.events.add(Phaser.Timer.SECOND * 0.5, this.startOptionTxts, this);
    }else{
      this.finishOptionTxts();
    }
  },

  situationFadeOut:function(){
    this.situationBoxOut.start();
    this.greyCoverOut.start();

    this.choseEvent.tweenOut.start();

    game.time.events.add(Phaser.Timer.SECOND * 1, this.fadeInEndingObstacles, this);
  },

  // ******************
  // OPTIONS functions
  // ******************

  setOptionABEvents:function(){
    this.option_txt_A.events.onInputOver.add(this.optionTxtOver, this);
    this.option_txt_B.events.onInputOver.add(this.optionTxtOver, this);
    this.option_txt_A.events.onInputOut.add(this.optionTxtOut, this);
    this.option_txt_B.events.onInputOut.add(this.optionTxtOut, this);
    this.option_txt_A.events.onInputUp.add(this.optionTxtUpA, this);
    this.option_txt_B.events.onInputUp.add(this.optionTxtUpB, this);
  },

  optionTxtOver:function(txt){
    txt.fill = "#d97257";
  },

  optionTxtOut:function(txt){
    txt.fill = "Black";  
  },

  optionTxtUpA:function(txt){
    this.option.currentAnswer = 'A';
    // set mood
    if(this.events[this.choseEventNumber].options.bad_option == 'A' || this.events[this.choseEventNumber].options.bad_option == 'Both'){
      this.mood.status = 'bad'; 
    }
    total_score += this.events[this.choseEventNumber].score.A;
    this.finishOptionTxts();
  },

  optionTxtUpB:function(){
    this.option.currentAnswer = 'B';
    if(this.events[this.choseEventNumber].options.bad_option == 'B' || this.events[this.choseEventNumber].options.bad_option == 'Both'){
      this.mood.status = 'bad'; 
    }
    total_score += this.events[this.choseEventNumber].score.B;
    this.finishOptionTxts();
  },

  enableOptionTxts:function(){
    this.option_txt_A.inputEnabled = true;
    this.option_txt_B.inputEnabled = true;
  },

  disableOptionTxts:function(){
    this.option_txt_A.inputEnabled = false;
    this.option_txt_B.inputEnabled = false;
  },

  startOptionTxts:function(){
    this.optionBoxIn.start();
    this.optionQIn.start();
    this.optionAIn.start();
    this.optionBIn.start();
    this.enableOptionTxts();
  },

  finishOptionTxts:function(){
    if(this.events[this.choseEventNumber].options != null){
      this.optionBoxOut.start();
      this.optionQOut.start();
      this.optionAOut.start();
      this.optionBOut.start();
    }
    this.disableOptionTxts();

    if(this.events[this.choseEventNumber].options != null){
      this.dialogue.currentTxt = this.events[this.choseEventNumber].ending_txts[this.option.currentAnswer];
    }else{
      this.dialogue.currentTxt = this.events[this.choseEventNumber].starting_txts;
    }

    this.option.currentOption = 'end';
    game.time.events.add(Phaser.Timer.SECOND * 1, this.startDialogueBox, this);
  },

  setOptionQAB:function(){
    this.option_txt_Q.text = this.events[this.choseEventNumber].options.Q;
    this.option_txt_A.text = "A.   " + this.events[this.choseEventNumber].options.A;
    this.option_txt_B.text = "B.   " + this.events[this.choseEventNumber].options.B;
  }, 

  // ******************
  // BUTTONS functions
  // ******************

  enableButton:function(button){
    button.inputEnabled = true; 
  },

  disableButton:function(button){
    button.inputEnabled = false; 
  },

  disableAllButtons:function(){
    this.next_button.inputEnabled = false;
    this.dialogue_button.inputEnabled = false;
    this.disableItemButtons();
  },

  enableOptionButtons:function(){
    // this.optionButton.inputEnabled = true;
  },

  enableDialogueButton:function(){
    this.dialogue_button.inputEnabled = true;
  },

  // ******************
  // HELPER functions
  // ******************

  nextOnClick: function (){
    this.disableAllButtons();
    this.endingBrownBGIn.start();
  },
  switchScene:function(){
    game.state.start(this.nextScene);
  },

  changeTime:function(){
    this.status_time_1015.alpha = 0;
    this.status_time_1020.alpha = 1;
  },

  checkMood:function(){
    if(this.mood.status == 'bad'){
      for (var i = 0; i < this.background_good.size; i++) {
        this.background_good[i].sprite.alpha = 0;
      }
      for (var i = 0; i < this.background_bad.size; i++) {
        this.background_bad[i].sprite.alpha = 1;
      }
      // this.bg_good.alpha = 0;
      // this.bg_bad.alpha = 1;
      this.joseph_good.alpha = 0;
      this.joseph_bad.alpha = 1;
      this.badMoodIn.start();
    }else{
      //  
      for (var i = 0; i < this.background_bright.size; i++) {
        this.background_bright[i].sprite.alpha = 1;
      }
      // this.bg_bright.alpha = 1;
    }
  },

  activateNextButton:function(){
    this.nextButtonIn.start();
    this.enableButton(this.next_button);
  },

  makePawOutBlink:function(){
    this.pawOutBlink = game.add.tween(this.dialogue_paw).to({alpha:0}, this.pawBlinkSpeed, this.tween.method.linear, false, 0, -1, true);
  },

  startPawOutBlink:function(){
    this.makePawOutBlink();
    this.pawOutBlink.start();
  },

  stopPawBlink:function(){
    this.pawOutBlink.stop();
    // this.pawOutBlink.pendingDelete = false;
  },

  loadJson:function(){
    this.pawBlinkSpeed = settingsJSON.arcade_scene.paw_blink_speed;
    this.option.inDelay = settingsJSON.arcade_scene.option_in_delay;
    this.tween.txtSpeed = settingsJSON.arcade_scene.txt_speed;
  }
};
