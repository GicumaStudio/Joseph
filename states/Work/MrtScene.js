var MrtScene = function() {};

// ***********
// TODO:
// 
// ***********

MrtScene.prototype = {
  nextScene:'MrtTransition',
  musicName:'work_mrt',
  background_good:{
    size: 1,
    fore: 1,
    0:{
      name:'mrt_good_bg',
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
      name:'mrt_bad_bg',
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
    fore: 1,
    0:{
      name:'mrt_bright',
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
        '呼～還好順利趕上這班捷運了。'
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
    size: 3,
    foreGroundId: 1, // starting from this is foreground
    prefix: 'mrt_brighter_', 
    item:{
      0:{
        name:'baggage',
        position:{
          x: 959.5,y: 883.5
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -200},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          groupTweenIn: null,
          groupTweenOut: null,
          txt:'擺放行李至適當位置，避開通行要道，\n不僅友善視障朋友更是對每個乘客貼心。' // 17 chars about
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      1:{
        name:'TTC',
        position:{
          x: 710.5,y: 570.5
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'僅靠外觀能判斷的事情有限，只要是\n有需求的人都可以使用。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      2:{
        name:'wait',
        position:{
          x: 1460.5,y: 387
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'月臺的最前端有視障者引導區，視障朋友\n到這裡按鈴請站務人員協助搭乘。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      }
    }
  }, 
  events:{
    // size: 2,
    size: 3,
    // bad_mood_list:[1],
    bad_mood_list:[0,1],
    0:{
      name: "mrt_seats",
      number: "13",
      score: -1,
      starting_txts:[
        '等等還要走好一段路，趕快找座位休息吧！\nJoseph，find the seat！」',
        '你馬上下指令讓 Joseph 去找空的座位，\n但原本筆直朝向某處前進的牠突然停了下來。',
        '原先並不在意的你，卻聽到有人破口大罵：\n「沒看到有盲人嗎？你還搶人家博愛座？」',
        '貌似是有人先你們一步找到博愛座坐下，\n路見不平的乘客決定幫你教訓那個人。',
        '「博愛座只是要禮讓，又不是一定要讓！」\n「欸年輕人，你哪個學校的這麼沒禮貌！」',
        '『唉，其實，我們再找其他位子就可以了啦！』\n只不過想讓 Joseph 休息一下的你無奈地想著。'
      ]
    },
    1:{
      name: "tail_stepped",
      number: "14",
      score: 0,
      starting_txts:[
        '進入車廂之後，\n感覺到身邊的人自動讓出了一條路。',
        'Joseph一如往常筆直地引導你到了座位，\n開心地被你稱讚完後，立刻趴在座位下睡覺。',
        '坐著坐著，突然聽到有位乘客跟另外一個人說：\n「先生，你從剛剛就一直踩到牠的尾巴了。」',
        '向出聲的乘客簡單點頭致謝之後，\n你才知道Joseph 居然一聲不吭地忍受痛楚。'
      ],
      options:null,
      ending_txts:null
    },
    2:{
      name: "scared_kid",
      number: "15",
      score: {A: 1,B: 3},
      starting_txts:[
        '「哇啊啊啊──！」才剛剛踏進車廂，\n立刻迎面傳來小女孩慘烈地哭號聲。'
      ],
      options:{
        Q:'「對不起，我的小孩子怕狗」\n一位年輕媽媽的聲音傳來，這時候你：',
        A:'[ 在同車廂找座位 ]',
        B:'[ 到其他車廂找座位 ]',
        bad_option:'None' // None?
      },
      ending_txts:{
        A:['「Joseph, find the chair.」\n你彷彿小女孩不存在一般，平靜地下著指令，',
          'Joseph 也很快地找到了座位，\n你順著牠的背摸到頭、再摸到了椅子，\n接著坐下，一切是如此自然。',
          '「Good boy！」\n被稱讚完的 Joseph 將身體蜷曲在座位底下，\n舒服地睡去。',
          '「那個狗狗好厲害喔！好像在變魔術！」\n小女孩小聲地跟她媽媽說著，\n車廂裡的人們，臉上不禁都勾起了一抹微笑。'],
        B:['當你正準備到其他車廂找座位前，\n那個媽媽卻挽留了你，並說：',
          '「妹妹，你知道嗎？這個是『導盲犬』喔，\n跟鄰居的狗狗不一樣，牠絕對不會咬人喔！」',
          '沒想到這位媽媽居然開始了機會教育，\n講完之後甚至還把座位讓了出來。',
          '「狗狗要加油喔！」',
          '雖然聽得出來小女孩的聲音還有些害怕，\n但這對母女的舉動令人感覺十分窩心。']
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

    this.addItemButtons();

    // utils.addExistingMultiple([this.joseph_good, this.joseph_bad]);

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

    utils.addExistingMultiple([this.joseph_good, this.joseph_bad]);

    // utils.addExistingMultiple([this.
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
  CheckMusicMood:function(){
    if(this.mood.status == 'bad'){
      game.add.tween(moodPlayerHigh).to({volume:0}, musicFadeSpeed, this.tween.method.linear, true);
      game.add.tween(moodPlayerLow).to({volume:1}, musicFadeSpeed, this.tween.method.linear, true);
      moodPlayingHigh = false;
      moodPlayingLow = true;
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

      // pixel perfect
      this.brighter_items.item[i].button.input.pixelPerfectOver = true;
      //
      
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

      // make box and txt
      this.brighter_items.item[i].description.box = game.make.sprite(0, 0, this.description_box);

      this.box_txt_style = {font: "38px SansCJK", fill: 'White'};
      this.brighter_items.item[i].description.box_txt = game.make.text(0, 0, this.brighter_items.item[i].description.txt, this.box_txt_style);

      //
      // adjust positions, rela x = 0 , y = -250 ususally
      if(this.brighter_items.item[i].position.y + this.brighter_items.item[i].description.relative_position.y - this.brighter_items.item[i].description.box.height/2 < 0){
        this.brighter_items.item[i].description.relative_position.y = this.brighter_items.item[i].description.relative_position.y * (-1);
        this.brighter_items.item[i].description.tween_distance.y = this.brighter_items.item[i].description.tween_distance.y * (-1);
      }
      if(this.brighter_items.item[i].position.x - this.brighter_items.item[i].description.box.width/2 < 80){
        this.brighter_items.item[i].description.relative_position.x = 80 + this.brighter_items.item[i].description.box.width/2 - this.brighter_items.item[i].position.x;
      }else if(this.brighter_items.item[i].position.x + this.brighter_items.item[i].description.box.width/2 > WIDTH - 80){
        this.brighter_items.item[i].description.relative_position.x = WIDTH - 80 - this.brighter_items.item[i].description.box.width/2 - this.brighter_items.item[i].position.x;
      }
      //
      //

      this.brighter_items.item[i].description.group.x = this.brighter_items.item[i].position.x + this.brighter_items.item[i].description.relative_position.x + this.brighter_items.item[i].description.tween_distance.x;
      this.brighter_items.item[i].description.group.y = this.brighter_items.item[i].position.y + this.brighter_items.item[i].description.relative_position.y + this.brighter_items.item[i].description.tween_distance.y;

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
        this.CheckMusicMood();
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
    // texts json
    thisScene = "Mrt";
    
    this.dialogue.txt.start = textsJSON.work[thisScene].dialogueStart; 

    for (var i = 0; i < this.brighter_items.size; i++) {
      this.brighter_items.item[i].description.txt = textsJSON.work[thisScene].brighterItems[i];
    }

    for (var i = 0; i < this.events.size; i++) {
      this.events[i].starting_txts = textsJSON.work[thisScene].events[i].starting;
      if(this.events[i].options){
        this.events[i].options = textsJSON.work[thisScene].events[i].options;
        this.events[i].ending_txts = textsJSON.work[thisScene].events[i].ending;
      }
    }
  }
};
