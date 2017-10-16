var BusStationScene = function() {};

// ***********
// TODO:
// 
// ***********

BusStationScene.prototype = {
  nextScene:'BusStationTransition',
  musicName:'work_bus_station',
  background_good:{
    size: 4,
    fore: 2,
    0:{
      name:'busstation_bg_good',
      sprite: null,
      position:{
        x: 0,y: 0
      },
      center_anchor: false,
      tweenIn: null,
      tweenOut: null
    },
    1:{
      name:'busstation_bg_good_bright_01', // bright stuff
      sprite: null,
      position:{
        x: 0, y: 0
      },
      center_anchor: false,
      tweenIn: null,
      tweenOut: null
    },
    2:{
      name:'busstation_bg_good_bright_02', // pocket
      sprite: null,
      position:{
        x: 124,y: 819.5
      },
      center_anchor: true,
      tweenIn: null,
      tweenOut: null
    },
    3:{
      name:'busstation_bg_good_01', // foreground
      sprite: null,
      position:{
        x: 1191.5, y: 778
      },
      center_anchor: true,
      tweenIn: null,
      tweenOut: null
    }
  },
  background_bad:{
    size: 3,
    fore: 1,
    0:{
      name:'busstation_bg_bad',
      sprite: null,
      position:{
        x: 0,y: 0
      },
      center_anchor: false,
      tweenIn: null,
      tweenOut: null
    },
    1:{
      name:'busstation_bg_bad_02', // pocket
      sprite: null,
      position:{
        x: 124,y: 819.5
      },
      middle_anchor: true,
      tweenIn: null,
      tweenOut: null
    },
    2:{
      name:'busstation_bg_bad_01', // foreground
      sprite: null,
      position:{
        x: 0, y: 0
      },
      middle_anchor: false,
      tweenIn: null,
      tweenOut: null
    }
  },
  status:{
    distance: 25,
    weather_icon:{
      location:{x: -410,y: -240}
    },
    time:{
      location:{x: 241.5,y: 36.5}
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
      '「好像越來越熱了，好想上公車吹冷氣啊～」',
      '「等等上車了你就可以休息一下了喔Joseph，\n再忍耐一下下吧！」'
      ]
    }
  },
  joseph:{
    distance: 25,
    location:{
      x:261.5,
      y:718
    }
  },
  brighter_items:{
    size: 4,
    foreGroundId: 1, // starting from this is foreground
    prefix: 'busstation_brighter_', 
    item:{
      0:{
        name:'bus',
        position:{
          x: 406,y: 394
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -200},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          groupTweenIn: null,
          groupTweenOut: null,
          txt:'遇到視障朋友等車，可以主動詢問他\n要搭哪班公車，幫助他順利搭上公車。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      1:{
        name:'bus_stop',
        position:{
          x:1698.5,y: 534
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'按下新型站牌的按鈕可以提醒司機注意\n該站有旅客候車，減少過站未停的情形。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      2:{
        name:'pocket',
        position:{
          x: 124,y: 819
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'手機裡有許多意想不到的App可以讓\n視障朋友的生活更便利喔，即時的公車動態也能得知。'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
      3:{
        name:'pedestrian',
        position:{
          x: 1313.5,y: 689.5
        },
        description:{
          group: null,
          relative_position:{x: 0,y: -250},
          tween_distance:{x: 0, y: 50},
          box: null,
          box_txt: null,
          boxTweenIn: null,
          boxTweenOut: null,
          txt:'「是導盲犬耶！」，「我們家的Ula\n跟Oki也可以成為導盲犬嗎？」'
        },
        button: null,
        tweenIn: null,
        tweenOut: null
      },
    }
  }, 
  events:{
    size:3,
    // size:4,
    bad_mood_list:[10],
    0:{
      name: "check_time",
      number: "16",
      score:{A: 1,B:1},
      starting_txts:[
        '你拿出手機正想用APP查公車還有多久會到，\n同時聽到長椅旁邊有兩個人開心地聊天，'
      ],
      options:{
        Q:'還是問問他們就好了呢？',
        A:'[ 用手機APP自己查 ]',
        B:'[ 問身旁兩位路人 ]',
        bad_option:'None' // None
      },
      ending_txts:{
        A:['聽聲音好像是小女孩在聊天，\n擔心嚇到她們，於是你從口袋拿出手機，',
        '點開App，將手機靠近耳邊聽到站提醒，\nApp告知你407號公車五分鐘後進站。',
        '約莫五分鐘後，公車進站。',
        '你握起導盲鞍讓Joseph引導你順利上車，\n內心讚嘆科技的發達，\n讓生活裡許多事物不再是難題。'],
        B:['「你們好，不好意思，\n可以幫我看一下407號公車多久到嗎？」',
        '「等等哦，我看一下，\n那個…站牌上寫還有四分鐘才會到哦！」',
        '「謝謝你們唷！」\n對於熱心的路人衷心感謝，\n同時也因為溫暖的人情感到開心。']
      }
    },
    1:{
      name: "check_bus",
      number: "17",
      score:{A: 1,B:3},
      starting_txts:[
        '此刻你聽到竟然有幾台公車一起進站了，',
      ],
      options:{
        Q:'一時無法分辨平常搭的公車是哪一台的你會：',
        A:'[ 靠近車門向司機詢問 ]',
        B:'[ 放心地讓 Joseph 決定 ]',
        bad_option:'None' // None?
      },
      ending_txts:{
        A:['「請問這邊哪一台是407號公車？」',
        '「這邊停的三台都是啦！你要上車嗎？」\n司機略帶笑意地回答你，',
        '你不好意思地搔了搔頭趕緊上車。'],
        B:['Joseph居然帶著你往馬路中間走去，',
        '你的心裡微微緊張了一下，但隨即恢復冷靜：\n『我要相信Joseph！』很快地你們停了下來，',
        '司機熟悉的聲音也從前面傳來：\n「唉唷！你這隻厲害喔！\n我今天停這麼外面牠也知道！」',
        '原來是公車站邊有違停的汽車，\n使得司機只能把車停得比較靠近馬路中間。',
        '『如果沒 Joseph 的話，我肯定會錯過的吧』\n你不禁在心裡這麼想著。']
      }
    },
    2:{
      name: "bus_drove_away",
      number: "18",
      score:{A: 1,B:1},
      starting_txts:[
        '「怎麼這麼慢啊？不會已經開走了吧？」',
      ],
      options:{
        Q:'你在公車站等了許久，\n卻等不到平常早該到站的那號公車，你決定：',
        A:'[ 向公車站的其他人詢問 ]',
        B:'[ 不死心繼續等 ]',
        bad_option:'None' // None?
      },
      ending_txts:{
        A:['「喔剛好，我也是要搭那號公車，\n不然等等公車到了我再跟你說。」',
        '那個人爽朗地答應要提醒你。\n公車到站時，他也很熱心地帶你到公車門口。'],
        B:['「我看你等很久了耶，你在等幾號公車啊？」',
        '有個歐巴桑突然走過來找你搭話，\n你簡單回答了之後，她又說：',
        '「那台公車的話十分鐘前就已經開走了耶，\n它剛剛停比較遠你可能沒有注意到。」',
        '正在懊惱這麼一來有可能破不了記錄的你，\n忽然又聽到她說：',
        '「欸好像又來一台了耶，我幫你招手攔車！」',
        '就這樣你一邊道謝一邊順利地搭上了公車，\n心裡很感激那個歐巴桑的熱心幫忙。']
      }
    },
    3:{
      name: "people_pet_dog",
      number: "19",
      score:{A: 1,B:1},
      starting_txts:[
        '靠近終點的公車站，會在這站搭乘的乘客本來就不多，'
      ],
      options:{
        Q:'現在好像只有我和Joseph在等車，\n要怎麼順利搭上正確的公車呢？',
        A:'[ 攔下每一輛公車後詢問 ]',
        B:'[ 按下新型站牌的按鈕 ]',
        bad_option:'None' // None?
      },
      ending_txts:{
        A:['聽見了公車靠近的聲音，\n你稍微踏上馬路，伸手攔下公車。',
        '「不好意思，請問有到小巨蛋嗎？」\n「沒有喔。」',
        '沒多久，下一輛公車靠近。\n「請問有到小巨蛋嗎？」\n「有喔，上車吧！」',
        '當你和Joseph踏上公車，公車司機對你說，\n「下次不要走到馬路上攔啦，小心危險。」\n「好，謝謝司機！」',
        'Joseph引導你到司機後方的座位後，\n等你坐下後，司機才發動車輛開離站牌，\n你默默在心中感謝這位司機的貼心。'],
        B:['印象最近新聞說有增設新型公車站牌，\n按下站牌按鈕可以提醒即將到站的公車司機。',
        '你伸手觸摸公車站牌們，\n發現其中一支跟之前圓柱狀的站牌不大一樣，\n再摸了摸，果然在上頭找到了一個按鈕，\n你按下按鈕後等待。',
        '過了會兒，聽見公車靠近的聲音，\n你沒有踏出去招手，公車自動地停在你的前方。',
        '「要搭車嗎？」\n「請問是407公車嗎？」\n「是的！」',
        '你順利搭上了車，想著新站牌還真是方便，\n之後應該不用踏到馬路上攔車了吧。']
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

    // anchor 0
    this.status_box = game.make.sprite(0, 0 - this.status.distance, 'busstation_status');
    this.sunny_icon = game.make.sprite(this.status.weather_icon.location.y, this.status.weather_icon.location.x - this.status.distance, 'busstation_sun_icon');
    this.status_time_1015 = game.make.sprite(this.status.time.location.x, this.status.time.location.y - this.status.distance, 'busstation_time_0830');
    this.status_time_1020 = game.make.sprite(this.status.time.location.x, this.status.time.location.y, 'busstation_time_0845');

    // anchor 0.5
    this.joseph_good = game.make.sprite(this.joseph.location.x - this.joseph.distance, this.joseph.location.y, 'arcade_joseph_good');
    this.joseph_bad = game.make.sprite(this.joseph.location.x, this.joseph.location.y, 'arcade_joseph_bad');
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
      this.bad_mood, this.choseEvent.sprite, this.status_time_1015, this.status_time_1020]);
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

    utils.addExistingMultiple([this.status_box, this.status_time_1015, this.status_time_1020, this.sunny_icon]);

    this.addItemButtons();

    utils.addExistingMultiple([this.joseph_good, this.joseph_bad]);

    // add foreground
    for (var i = this.background_good.fore; i < this.background_good.size; i++) {
      utils.addExistingMultiple([this.background_good[i].sprite]);
    }
    for (var i = this.background_bad.fore; i < this.background_bad.size; i++) {
      utils.addExistingMultiple([this.background_bad[i].sprite]);
    }

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
        musicPlayer2.loopFull();
        // musicPlayer.play();
        musicPlayer2.fadeIn(musicFadeSpeed, true);
      }
    }else if(musicPlaying2){
      if (musicPlayer2.name !== this.musicName && gameOptions.playMusic) {
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
    // this.choseEventNumber = 0;
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
    this.dialogue.currentTxtInd = 0;
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
    thisScene = "BusStation";
    
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
