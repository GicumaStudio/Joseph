var Loading = function () {};

Loading.prototype = {
  logoPosition: {
    x: game.world.centerX,
    y: game.world.centerY + 240
  },
  percentagePosition: {
    x: game.world.centerX + 10,
    y: game.world.centerY + 240 + 85
  },
  txtLinePosition: {
    x: game.world.centerX + 40,
    y: game.world.centerY + 240 - 250
  },
  trafficLightPosition: {
    x: 320,
    y: 150
  },
  txt: [
    'Joseph～走吧！',
    '準備開始今天的冒險'
  ],

  init: function () {
    // load Json setting
    this.loadJson();

    // make bg
    this.loadingBG = game.make.sprite(0, 0, 'loadingBG');

    // pre make menu stuff
    this.menuBG = game.make.sprite(0, 0, 'menu_bg');
    this.menuJoseph = game.make.sprite(this.logoPosition.x, this.logoPosition.y, 'menu_joseph');
    this.menuTrafficLight = game.make.sprite(this.trafficLightPosition.x, this.trafficLightPosition.y, 'menu_traffic_light');

    // 2 txt lines
    this.txtLine1 = this.txt[0];
    this.txtLine2 = this.txt[1];

    // make txts 
    this.percentage = game.make.text(this.percentagePosition.x, this.percentagePosition.y, '0%', {font: "40px SansCJK", fill: 'white'});
    this.txt     = game.make.text(this.txtLinePosition.x, this.txtLinePosition.y, this.txtLine1, {font: "32px SansCJK", fill: 'white'});
    this.txt2     = game.make.text(this.txtLinePosition.x, this.txtLinePosition.y, this.txtLine2, {font: "32px SansCJK", fill: 'white'});

    // alphaMask
    this.aMask = game.make.bitmapData(236, 334);
    this.rect1 = new Phaser.Rectangle(0,334 - 250, 236, 350);
    this.aMask.alphaMask('loadingFill', 'loadingJoseph',this.rect1);
    this.loadingLogo = game.make.sprite(this.logoPosition.x, this.logoPosition.y, this.aMask);

    // make tweens
    this.makeStartTween();
    this.makeEndTween();

    // set anchor and alpha
    utils.centerGameObjects([this.txt, this.txt2, this.percentage, this.loadingLogo, this.menuJoseph]);
    utils.zeroAlpha([this.menuBG, this.menuJoseph, this.menuTrafficLight, this.txt, this.txt2, this.percentage, this.loadingLogo]);
  },

  preload: function () {
    // object z axis is set to when object was added
    game.add.existing(this.loadingBG);

    // loading Logo
    game.add.existing(this.loadingLogo);

    // texts
    game.add.existing(this.percentage);
    game.add.existing(this.txt);
    game.add.existing(this.txt2);

    // menu stuff
    game.add.existing(this.menuBG);
    game.add.existing(this.menuTrafficLight);
    game.add.existing(this.menuJoseph);

    this.loadEverything();
  },

  loadUpdate:function(){  
    // update the loading percentage
    this.percentage.setText(this.load.progress + '%');

    // update alpha mask
    this.rect1.y = 334 - (this.load.progress * 3.4);
    this.aMask.alphaMask('loadingFill', 'loadingJoseph',this.rect1, this.rect2);
  },

  create: function() {
    // start blinking
    this.percentage.setText('100%');
    this.percentageOut.start();

    // set logo full
    this.rect1.y = -16;
    this.aMask.alphaMask('loadingFill', 'loadingJoseph',this.rect1, this.rect2);

    this.addGameStates();
    this.addGameMusic();

    if (settingsJSON.check_loading == false) {
      this.menuBGIn.start();
      this.menuTrafficLightIn.start();
      this.menuJosephIn.start();
    }
  },

  makeStartTween:function(){
    // tween loading logo and percentage in, chain txts later
    this.logoIn = game.add.tween(this.loadingLogo).to({ alpha: 1 }, tweenSpeed, Phaser.Easing.Linear.None, true, tweenDelay);
    this.percentageIn = game.add.tween(this.percentage).to({ alpha: 1 }, tweenSpeed, Phaser.Easing.Linear.None, true, tweenDelay);
    // txts
    this.txtIn = game.add.tween(this.txt).to({ alpha: 1 }, tweenSpeed, Phaser.Easing.Linear.None);
    this.txtOut = game.add.tween(this.txt).to({ alpha: 0 }, tweenSpeed, Phaser.Easing.Linear.None, false, txtDelay);
    this.txtIn2 = game.add.tween(this.txt2).to({ alpha: 1 }, tweenSpeed, Phaser.Easing.Linear.None,false);
    this.txtOut2 = game.add.tween(this.txt2).to({ alpha: 0 }, tweenSpeed, Phaser.Easing.Linear.None, false, txtDelay);
    // chain tweens
    utils.chainTween(this.percentageIn,this.txtIn);
    utils.chainTween(this.txtIn,this.txtOut);
    utils.chainTween(this.txtOut,this.txtIn2);
    utils.chainTween(this.txtIn2,this.txtOut2);
    utils.chainTween(this.txtOut2, this.txtIn);
  },

  makeEndTween:function(){
    // percentage blinking
    this.percentageOut = game.add.tween(this.percentage).to({ alpha: 0 }, tweenSpeed, Phaser.Easing.Linear.None, false);
    this.percentageIn2 = game.add.tween(this.percentage).to({ alpha: 1 }, tweenSpeed, Phaser.Easing.Linear.None, false);
    utils.chainTween(this.percentageOut,this.percentageIn2);
    utils.chainTween(this.percentageIn2,this.percentageOut);

    // tween in [menu bg],[traffic_light] and [Joseph], then switch state!
    this.menuBGIn = game.add.tween(this.menuBG).to({ alpha: 1}, tweenSpeed, Phaser.Easing.Linear.None, false, tweenDelay); 
    this.menuTrafficLightIn = game.add.tween(this.menuTrafficLight).to({ alpha: 1}, tweenSpeed, Phaser.Easing.Linear.None, false, tweenDelay); 
    this.menuJosephIn = game.add.tween(this.menuJoseph).to({ alpha: 1}, tweenSpeed, Phaser.Easing.Linear.None, false, tweenDelay); 
    this.menuJosephIn.onComplete.add(this.startMenu,this);
  },

  loadEverything: function(){
    this.loadScripts();
    this.loadImages();
    this.loadBgm();
    this.loadSprites();
  },

  addGameStates: function () {
    //game.state.add("Credits",Credits);
    game.state.add("GameMenu",GameMenu);
    game.state.add("HomeScene",HomeScene);

    // WORK
    this.addWorkStates();

    this.addTransitionScenes();
  },

  addWorkStates:function(){
    game.state.add("WorkChooseScene",WorkChooseScene);
    game.state.add("ArcadeScene",ArcadeScene);
    game.state.add("CrossroadScene",CrossroadScene);
    game.state.add("BreakfastScene",BreakfastScene);
    game.state.add("FastfoodScene",FastfoodScene);
    game.state.add("MrtStationScene",MrtStationScene);
    game.state.add("BusStationScene",BusStationScene);
    game.state.add("MrtScene",MrtScene);
    game.state.add("BusScene",BusScene);
    game.state.add("DogSchoolScene",DogSchoolScene);
  },
  addTransitionScenes:function(){
    game.state.add("ArcadeTransition",ArcadeTransition);
    game.state.add("CrossroadTransition",CrossroadTransition);
    game.state.add("BusTransition",BusTransition);
    game.state.add("MrtTransition",MrtTransition);
    game.state.add("BusStationTransition",BusStationTransition);
    game.state.add("MrtStationTransition",MrtStationTransition);
    game.state.add("BreakfastTransition",BreakfastTransition);
    game.state.add("FastfoodTransition",FastfoodTransition);
  },
  addGameMusic: function () {
    // musicPlayer = game.add.audio('start_demo');
    // musicPlayer.loop = true;
    // musicPlayer.play();
  },

  loadScripts: function () {
    //game.load.script('style', 'lib/style.js');
    //game.load.script('mixins', 'lib/mixins.js');
    //game.load.script('credits', 'states/Credits.js');
    game.load.script('game_menu','states/GameMenu.js');
    game.load.script('home_scene','states/HomeScene.js');
    this.loadWorkScripts();
    this.loadTransitionScripts();
  },

  loadWorkScripts:function(){
    game.load.script('work_choose_scene','states/Work/WorkChooseScene.js');
    game.load.script('arcade_scene','states/Work/ArcadeScene.js');
    game.load.script('crossroad_scene','states/Work/CrossroadScene.js');
    game.load.script('mrt_station_scene','states/Work/MrtStationScene.js');
    game.load.script('mrt_scene','states/Work/MrtScene.js');
    game.load.script('bus_station_scene','states/Work/BusStationScene.js');
    game.load.script('bus_scene','states/Work/BusScene.js');
    game.load.script('breakfast_scene','states/Work/BreakfastScene.js');
    game.load.script('fastfood_scene','states/Work/FastfoodScene.js');
    game.load.script('dogschool_scene','states/Work/DogSchoolScene.js');
  },

  loadTransitionScripts:function(){
    game.load.script('arcade_transition','states/Work/ArcadeTransition.js');
    game.load.script('crossroad_transition','states/Work/CrossroadTransition.js');
    game.load.script('bus_station_transition','states/Work/BusStationTransition.js');
    game.load.script('bus_transition','states/Work/BusTransition.js');
    game.load.script('mrt_station_transition','states/Work/MrtStationTransition.js');
    game.load.script('mrt_transition','states/Work/MrtTransition.js');
    game.load.script('breakfast_transition','states/Work/BreakfastTransition.js');
    game.load.script('fastfood_transition','states/Work/FastfoodTransition.js');

  },
  loadBgm: function () {
    game.load.audio('bgm_menu','assets/bgm/start_demo.wav'); // use until finish selecting items
    game.load.audio('bgm_mood_high','assets/bgm/R1High_demo.wav'); 
    game.load.audio('bgm_mood_low','assets/bgm/R1Low_demo.wav'); 

    this.loadWorkBgm();


  },
  loadWorkBgm:function(){
    game.load.audio('work_arcade', 'assets/bgm/work/Arcade.wav');
    game.load.audio('work_crossroad', 'assets/bgm/work/Crossroad.wav');
    game.load.audio('work_bus_station', 'assets/bgm/work/BusStation.wav');
    game.load.audio('work_bus', 'assets/bgm/work/Bus.wav');
    game.load.audio('work_mrt_station', 'assets/bgm/work/MRTStation.wav');
    game.load.audio('work_mrt', 'assets/bgm/work/MRT.wav');
    game.load.audio('work_breakfast', 'assets/bgm/work/Breakfast.wav');
    game.load.audio('work_fastfood', 'assets/bgm/work/Fastfood.wav');

    game.load.audio('work_fin_low', 'assets/bgm/work/fin_demo.wav');
    game.load.audio('work_fin_mid', 'assets/bgm/work/FinMid_Demo.wav');
    game.load.audio('work_fin_high', 'assets/bgm/work/FinHigh_demo.wav');

  },

  loadSprites: function () {
    // start button
    game.load.spritesheet('menu_start_sprite', 'assets/images/menu/Start_sprite.png', 441, 173);

    // home items
    game.load.spritesheet('home_document_sprite', 'assets/images/home/Document_Sprite.png', 219, 176);
    game.load.spritesheet('home_saddle_sprite', 'assets/images/home/saddle_sprite.png', 306, 158);
    game.load.spritesheet('home_stick_sprite', 'assets/images/home/guidecane_sprite.png', 120, 240);
    game.load.spritesheet('home_hat_sprite', 'assets/images/home/hat_sprite.png', 93, 199);
    game.load.spritesheet('home_raincoat_sprite', 'assets/images/home/raincoat_sprite.png', 148, 78);
    game.load.spritesheet('home_umbrella_sprite', 'assets/images/home/umbrella_sprite.png', 57, 216);

    // arcade
    game.load.spritesheet('arcade_next_sprite', 'assets/images/arcade/next_sprite.png', 435, 175);
    game.load.spritesheet('arcade_dialogue_sprite', 'assets/images/arcade/dialogue.png', 1300, 469);

    this.loadChooseSprites();
    this.loadItemSprites();
  },

  loadItemSprites:function(){
    this.loadWorkItemSprites(); 
  },

  loadWorkItemSprites:function(){
    // arcade
    game.load.spritesheet('arcade_brighter_box', 'assets/images/arcade/brighter/storefronts_brighter_box.png', 543, 357);
    game.load.spritesheet('arcade_brighter_burner', 'assets/images/arcade/brighter/storefronts_brighter_burner.png', 263, 280);
    game.load.spritesheet('arcade_brighter_motorcycle', 'assets/images/arcade/brighter/storefronts_brighter_motorcycle.png', 579, 515);
    game.load.spritesheet('arcade_brighter_shelf', 'assets/images/arcade/brighter/storefronts_brighter_shelf.png', 374, 396);
    game.load.spritesheet('arcade_brighter_sign_phone', 'assets/images/arcade/brighter/storefronts_brighter_sign_and_payphone.png', 744, 556);
    game.load.spritesheet('arcade_brighter_steps', 'assets/images/arcade/brighter/storefronts_brighter_steps.png', 647, 330);

    // crossroad
    game.load.spritesheet('crossroad_brighter_ats', 'assets/images/work/crossroad/brighter/crossroad_brighter_ATS.png', 196, 162);
    game.load.spritesheet('crossroad_brighter_bike', 'assets/images/work/crossroad/brighter/crossroad_brighter_bike.png', 493, 484);
    game.load.spritesheet('crossroad_brighter_construction', 'assets/images/work/crossroad/brighter/crossroad_brighter_construction.png', 835, 405);
    game.load.spritesheet('crossroad_brighter_pedestrian', 'assets/images/work/crossroad/brighter/crossroad_brighter_pedestrian.png', 289, 564);

    // bus station
    game.load.spritesheet('busstation_brighter_bus_stop', 'assets/images/work/bus_station/brighter/bus_station_bus_stop.png', 314, 791);
    game.load.spritesheet('busstation_brighter_bus', 'assets/images/work/bus_station/brighter/bus_station_bus.png', 815, 778);
    game.load.spritesheet('busstation_brighter_pedestrian', 'assets/images/work/bus_station/brighter/bus_station_pedestrian.png', 463, 576);
    game.load.spritesheet('busstation_brighter_pocket', 'assets/images/work/bus_station/brighter/bus_station_pocket.png', 105, 102);

    // bus
    game.load.spritesheet('bus_brighter_seat', 'assets/images/work/bus/brighter/bus_brighter_01.png', 580, 304);
    game.load.spritesheet('bus_brighter_nanny', 'assets/images/work/bus/brighter/bus_brighter_02.png', 403, 364);
    game.load.spritesheet('bus_brighter_driver', 'assets/images/work/bus/brighter/bus_brighter_03.png', 393, 421);
    game.load.spritesheet('bus_brighter_sign', 'assets/images/work/bus/brighter/bus_brighter_04.png', 145, 144);

    // mrt station
    game.load.spritesheet('mrtstation_brighter_button', 'assets/images/work/mrt_station/brighter/MRT_station_brighter_button.png', 143, 126);
    game.load.spritesheet('mrtstation_brighter_gate', 'assets/images/work/mrt_station/brighter/MRT_station_brighter_gate.png', 494, 443);
    game.load.spritesheet('mrtstation_brighter_guide_bricks', 'assets/images/work/mrt_station/brighter/MRT_station_brighter_guide_bricks.png', 1688, 299);
    game.load.spritesheet('mrtstation_brighter_manager', 'assets/images/work/mrt_station/brighter/MRT_station_brighter_manager.png', 208, 253);

    // mrt
    game.load.spritesheet('mrt_brighter_TTC', 'assets/images/work/mrt/brighter/MRT_brighter_TTC.png', 347, 277);
    game.load.spritesheet('mrt_brighter_wait', 'assets/images/work/mrt/brighter/MRT_brighter_wait.png', 175, 154);
    game.load.spritesheet('mrt_brighter_baggage', 'assets/images/work/mrt/brighter/MRT_brighter_baggage.png', 427, 403);

    // breakfast
    game.load.spritesheet('breakfast_brighter_sandwich', 'assets/images/work/breakfast/brighter/breakfast_brighter_sandwich.png', 179, 111);
    game.load.spritesheet('breakfast_brighter_seat', 'assets/images/work/breakfast/brighter/breakfast_brighter_seat.png', 910, 322);
    game.load.spritesheet('breakfast_brighter_server', 'assets/images/work/breakfast/brighter/breakfast_brighter_server.png', 436, 247);
    game.load.spritesheet('breakfast_brighter_stand', 'assets/images/work/breakfast/brighter/breakfast_brighter_stand.png', 374, 470);

    // fastfood
    game.load.spritesheet('fastfood_brighter_menu', 'assets/images/work/fast_food/brighter/fast_food_brighter_menu.png', 634, 193);
    game.load.spritesheet('fastfood_brighter_server', 'assets/images/work/fast_food/brighter/fast_food_brighter_server.png', 667, 304);


  },

  loadChooseSprites:function(){
    // hometown, leisure, towork
    game.load.spritesheet('home_hometown_sprite', 'assets/images/home/hometown_sprite.png', 470, 470);
    game.load.image('home_hometown_hover', 'assets/images/home/hometown_hover.png');
    game.load.spritesheet('home_leisure_sprite', 'assets/images/home/leisure_sprite.png', 470, 470);
    game.load.image('home_leisure_hover', 'assets/images/home/leisure_hover.png');
    game.load.spritesheet('home_to_work_sprite', 'assets/images/home/go_to_work_sprite.png', 470, 470);
    game.load.image('home_to_work_hover', 'assets/images/home/go_to_work_hover.png');

    // work choose, cross/arcade
    game.load.spritesheet('wc_option_sprite', 'assets/images/work_choose/option.png', 1060, 425);
    game.load.spritesheet('arcade_sprite', 'assets/images/work_choose/arcade_sprite.png', 470, 470);
    game.load.image('arcade_hover', 'assets/images/work_choose/arcade_hover.png');
    game.load.spritesheet('cross_sprite', 'assets/images/work_choose/cross_sprite.png', 470, 470);
    game.load.image('cross_hover', 'assets/images/work_choose/cross_hover.png');

    // transition to bus/mrt
    game.load.spritesheet('bus_station_sprite', 'assets/images/work/transition/arcade_transition/bus_station.png', 470, 470);
    game.load.image('bus_station_hover', 'assets/images/work/transition/arcade_transition/bus_station_hover.png');
    game.load.spritesheet('mrt_station_sprite', 'assets/images/work/transition/arcade_transition/mrt_station.png', 470, 470);
    game.load.image('mrt_station_hover', 'assets/images/work/transition/arcade_transition/mrt_station_hover.png');

    // transition to breakfast/fastfood
    game.load.spritesheet('breakfast_sprite', 'assets/images/work/transition/bus_transition/breakfast.png', 470, 470);
    game.load.image('breakfast_hover', 'assets/images/work/transition/bus_transition/breakfast_hover.png', 470, 470);
    game.load.spritesheet('fastfood_sprite', 'assets/images/work/transition/bus_transition/fastfood.png', 470, 470);
    game.load.image('fastfood_hover', 'assets/images/work/transition/bus_transition/fastfood_hover.png', 470, 470);
  },

  loadImages: function () {
    // main menu
    game.load.image('menu_bus', 'assets/images/menu/bus.png');
    game.load.image('menu_car', 'assets/images/menu/car.png');
    game.load.image('menu_logo', 'assets/images/menu/logo.png');
    game.load.image('menu_motor', 'assets/images/menu/motor.png');
    game.load.image('menu_motor2', 'assets/images/menu/motor2.png');
    game.load.image('menu_people_left', 'assets/images/menu/people_left.png');
    game.load.image('menu_people_man', 'assets/images/menu/people_man.png');
    game.load.image('menu_people_mother_and_son', 'assets/images/menu/people_mother-and-son.png');
    game.load.image('menu_people_right', 'assets/images/menu/people_right.png');
    game.load.image('menu_people_student1', 'assets/images/menu/people_student1.png');
    game.load.image('menu_people_student2', 'assets/images/menu/people_student2.png');
    game.load.image('menu_people_woman', 'assets/images/menu/people_woman.png');
    game.load.image('menu_youbike', 'assets/images/menu/youbike.png');
    game.load.image('menu_start', 'assets/images/menu/Start.png');
    game.load.image('menu_start_hover', 'assets/images/menu/Start_hover.png');

    // home scene
    game.load.image('home_a_dialog_box', 'assets/images/home/A_Dialog-box.png');
    // game.load.image('home_b_dialog_box', 'assets/images/home/B_Dialog-box.png');
    game.load.image('home_b_dialog_box', 'assets/images/home/dialog.png');
    game.load.image('home_back', 'assets/images/home/back.png');
    game.load.image('home_c_cover', 'assets/images/home/C_Cover.png');
    game.load.image('home_c_icon_to_work_dialog', 'assets/images/home/C_icon_to-work_Dialog.png');
    game.load.image('home_home', 'assets/images/home/home.png');
    game.load.image('home_Joseph', 'assets/images/home/Joseph1.png');
    game.load.image('home_Joseph2', 'assets/images/home/Joseph2.png');

    game.load.image('home_leisure_lock', 'assets/images/home/leisure_lock.png');
    game.load.image('home_hometown_lock', 'assets/images/home/hometown_lock.png');

    this.loadWorkImages();
    this.loadEventImages();
    this.loadEndingUIImages();
  },

  loadEndingUIImages:function(){
    // 3 score types of joseph
    game.load.image('end_joe_low', 'assets/images/score_prompt/joseph/END_low.png');
    game.load.image('end_joe_mid', 'assets/images/score_prompt/joseph/END_mid.png');
    game.load.image('end_joe_high', 'assets/images/score_prompt/joseph/END_high.png');

    // UI Stuff 
    game.load.image('end_paper_back', 'assets/images/score_prompt/UI_END_back.png');
    game.load.image('end_star_unfilled', 'assets/images/score_prompt/UI_END_star_unfilled.png');
    game.load.image('end_star_filled', 'assets/images/score_prompt/UI_END_star_filled.png');
    game.load.image('end_lineA', 'assets/images/score_prompt/UI_END_line_A.png');
    game.load.image('end_lineB', 'assets/images/score_prompt/UI_END_line_B.png');
    game.load.image('end_lineC', 'assets/images/score_prompt/UI_END_line_C.png');
    game.load.image('end_top_txt_back', 'assets/images/score_prompt/UI_END_Top_Color.png');
    game.load.image('end_top_txt', 'assets/images/score_prompt/UI_END_Top_sentence.png');
    game.load.image('end_friendly_city_txt', 'assets/images/score_prompt/UI_END_Friendly-City_sentence.png');
    game.load.image('end_city_description_back', 'assets/images/score_prompt/UI_END_City_Color.png');

    game.load.image('end_city_txt_bad', 'assets/images/score_prompt/UI_END_City_sentence_Bad.png');
    game.load.image('end_city_title_bad', 'assets/images/score_prompt/UI_END_City_Title_Bad.png');
    game.load.image('end_city_txt_normal', 'assets/images/score_prompt/UI_END_City_sentence_Normal.png');
    game.load.image('end_city_title_normal', 'assets/images/score_prompt/UI_END_City_Title_Normal.png');
    game.load.image('end_city_txt_good', 'assets/images/score_prompt/UI_END_City_sentence_Good.png');
    game.load.image('end_city_title_good', 'assets/images/score_prompt/UI_END_City_Title_Good.png');

    // score UI buttons
    game.load.image('end_button_plan', 'assets/images/score_prompt/buttons/UI_END_Plan-page.png');
    game.load.image('end_button_replay', 'assets/images/score_prompt/buttons/UI_END_Replay.png');
    game.load.image('end_button_share', 'assets/images/score_prompt/buttons/UI_END_Share.png');
    game.load.spritesheet('end_button_back', 'assets/images/score_prompt/buttons/UI_END_Button.png', 385, 122);
    game.load.spritesheet('end_button_gicuma', 'assets/images/score_prompt/buttons/UI_END_Gicuma.png', 75, 62.5);
    game.load.spritesheet('end_button_fb', 'assets/images/score_prompt/buttons/UI_END_facebook.png', 50, 62);
  },

  loadWorkImages:function(){
    // work choose scene
    game.load.image('wc_bg', 'assets/images/work_choose/bg.png');
    game.load.image('wc_cross_choose', 'assets/images/work_choose/choose.png');
    game.load.image('wc_cover', 'assets/images/work_choose/cover.png');
    game.load.image('wc_joseph', 'assets/images/work_choose/Joseph.png');
    game.load.image('wc_option', 'assets/images/work_choose/option.png');

    // Arcade scene
    game.load.image('arcade_joseph_bad', 'assets/images/joseph/Joseph_Bad.png');
    game.load.image('arcade_joseph_good', 'assets/images/joseph/Joseph_Good.png');
    game.load.image('arcade_bg_good', 'assets/images/arcade/bgs/storefronts.png');
    game.load.image('arcade_bg_bad', 'assets/images/arcade/bgs/storefronts_bad.png');
    game.load.image('arcade_bg_bright', 'assets/images/arcade/bgs/storefronts_bright.png');
    game.load.image('arcade_black_back', 'assets/images/arcade/back.png');
    game.load.image('arcade_grey_cover', 'assets/images/arcade/cover.png');
    game.load.image('arcade_dialogue_paw', 'assets/images/arcade/dialogue-footprint.png');
    game.load.image('arcade_dialogue_box', 'assets/images/arcade/dialogue.png');
    game.load.image('arcade_bad_mood', 'assets/images/arcade/mood.png');
    game.load.image('arcade_next', 'assets/images/arcade/next.png');
    game.load.image('arcade_next_hover', 'assets/images/arcade/next_hover.png');
    game.load.image('arcade_option_box', 'assets/images/arcade/Option.png');
    game.load.image('arcade_situation_grey_back', 'assets/images/arcade/Situation.png');
    game.load.image('arcade_description_box', 'assets/images/arcade/motor-description.png');
    // top left
    game.load.image('arcade_status', 'assets/images/arcade/status.png');
    game.load.image('arcade_sun_icon', 'assets/images/arcade/sunny.png');
    game.load.image('arcade_time_0800', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('arcade_time_0810', 'assets/images/arcade/1020.png');

    // Crossroad Scene
    game.load.image('crossroad_bg_good', 'assets/images/work/crossroad/bgs/crossroad_01.png');
    game.load.image('crossroad_bg_good_0', 'assets/images/work/crossroad/bgs/crossroad_02.png');
    game.load.image('crossroad_bg_good_1', 'assets/images/work/crossroad/bgs/crossroad_bright_01.png');
    game.load.image('crossroad_bg_good_2', 'assets/images/work/crossroad/bgs/crossroad_bright_02.png');
    game.load.image('crossroad_bg_bad', 'assets/images/work/crossroad/bgs/crossroad_bad_01.png');
    game.load.image('crossroad_bg_bad_0', 'assets/images/work/crossroad/bgs/crossroad_bad_02.png');
    game.load.image('crossroad_bg_bad_1', 'assets/images/work/crossroad/bgs/crossroad_bad_03.png');
    game.load.image('crossroad_bg_bad_2', 'assets/images/work/crossroad/bgs/crossroad_bad_04.png');
    game.load.image('crossroad_status', 'assets/images/arcade/status.png');
    game.load.image('crossroad_sun_icon', 'assets/images/arcade/sunny.png');
    game.load.image('crossroad_time_0800', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('crossroad_time_0810', 'assets/images/arcade/1020.png');

    // Mrt Station
    game.load.image('mrtstation_bg_good', 'assets/images/work/mrt_station/bgs/MRT_station_ord.png');
    game.load.image('mrtstation_bg_good_bright', 'assets/images/work/mrt_station/bgs/MRT_station_ord_bright.png');
    game.load.image('mrtstation_bg_good_gate_woman', 'assets/images/work/mrt_station/bgs/MRT_station_ord_gate_woman.png');
    game.load.image('mrtstation_bg_bad', 'assets/images/work/mrt_station/bgs/MRT_station_bad.png');
    game.load.image('mrtstation_bg_bad_gate_woman', 'assets/images/work/mrt_station/bgs/MRT_station_bad_gate_woman.png');
    // top left
    game.load.image('mrtstation_status', 'assets/images/arcade/status.png');
    game.load.image('mrtstation_sun_icon', 'assets/images/arcade/sunny.png');
    game.load.image('mrtstation_time_0830', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('mrtstation_time_0845', 'assets/images/arcade/1020.png');

    // Bus Station
    game.load.image('busstation_bg_good', 'assets/images/work/bus_station/bgs/bus_station_ord.png');
    game.load.image('busstation_bg_good_01', 'assets/images/work/bus_station/bgs/bus_station_ord_02.png');
    game.load.image('busstation_bg_good_bright_01', 'assets/images/work/bus_station/bgs/bus_station_bright_01.png');
    game.load.image('busstation_bg_good_bright_02', 'assets/images/work/bus_station/bgs/bus_station_bright_02.png');
    game.load.image('busstation_bg_bad', 'assets/images/work/bus_station/bgs/bus_station_bad.png');
    game.load.image('busstation_bg_bad_01', 'assets/images/work/bus_station/bgs/bus_station_bad_02.png');
    game.load.image('busstation_bg_bad_02', 'assets/images/work/bus_station/bgs/bus_station_bad_03.png');
    // top left
    game.load.image('busstation_status', 'assets/images/arcade/status.png');
    game.load.image('busstation_sun_icon', 'assets/images/arcade/sunny.png');
    game.load.image('busstation_time_0830', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('busstation_time_0845', 'assets/images/arcade/1020.png');

    // Bus 
    game.load.image('bus_joe_good', 'assets/images/work/bus/bgs/bus_good_Joe.png');
    game.load.image('bus_joe_bad', 'assets/images/work/bus/bgs/bus_good_Joe.png');
    game.load.image('bus_good_bg', 'assets/images/work/bus/bgs/bus_good_01.png');
    game.load.image('bus_good_fg', 'assets/images/work/bus/bgs/bus_good_02.png');
    game.load.image('bus_bright_seat', 'assets/images/work/bus/bgs/bus_bright_01.png');
    game.load.image('bus_bright_nanny', 'assets/images/work/bus/bgs/bus_bright_02.png');
    game.load.image('bus_bad_bg', 'assets/images/work/bus/bgs/bus_bad.png');
    game.load.image('bus_bad_fg', 'assets/images/work/bus/bgs/bus_bad_01.png');
    game.load.image('bus_bad_nanny', 'assets/images/work/bus/bgs/bus_bad_02.png');
    // top left
    game.load.image('bus_status', 'assets/images/arcade/status.png');
    game.load.image('bus_gloomy_icon', 'assets/images/arcade/sunny.png');
    game.load.image('bus_time_0850', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('bus_time_0900', 'assets/images/arcade/1020.png');

    // MRT
    game.load.image('mrt_good_bg', 'assets/images/work/mrt/bgs/MRT.png');
    game.load.image('mrt_bad_bg', 'assets/images/work/mrt/bgs/MRT_bad.png');
    game.load.image('mrt_bright', 'assets/images/work/mrt/bgs/MRT_bright.png');
    // top left
    game.load.image('mrt_status', 'assets/images/arcade/status.png');
    game.load.image('mrt_gloomy_icon', 'assets/images/arcade/sunny.png');
    game.load.image('mrt_time_0850', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('mrt_time_0900', 'assets/images/arcade/1020.png');

    // Breakfast
    game.load.image('breakfast_good_bg', 'assets/images/work/breakfast/bgs/breakfast_good.png');
    game.load.image('breakfast_bad_bg', 'assets/images/work/breakfast/bgs/breakfast_bad.jpg'); // this uses jpg?
    game.load.image('breakfast_bright', 'assets/images/work/breakfast/bgs/breakfast_bright.png');
    // top left
    game.load.image('breakfast_status', 'assets/images/arcade/status.png');
    game.load.image('breakfast_gloomy_icon', 'assets/images/arcade/sunny.png');
    game.load.image('breakfast_time_0910', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('breakfast_time_0930', 'assets/images/arcade/1020.png');

    // Fastfood
    game.load.image('fastfood_good_bg', 'assets/images/work/fast_food/bgs/fast_food.png');
    game.load.image('fastfood_bad_bg', 'assets/images/work/fast_food/bgs/fast_food_bad.png');
    game.load.image('fastfood_bright', 'assets/images/work/fast_food/bgs/fast_food_bright.png');
    // top left
    game.load.image('fastfood_status', 'assets/images/arcade/status.png');
    game.load.image('fastfood_gloomy_icon', 'assets/images/arcade/sunny.png');
    game.load.image('fastfood_time_0910', 'assets/images/arcade/1015.png'); // has the localtion in it
    game.load.image('fastfood_time_0930', 'assets/images/arcade/1020.png');

    // Dog School
    game.load.image('dogschool_bg_bright', 'assets/images/work/dog_school/UI_END_light.png');
    game.load.image('dogschool_bg_blur', 'assets/images/work/dog_school/UI_END_darken_blur.png');

  },
  loadEventImages:function(){
    this.loadWorkEventIamges();
    // this.loadLeisureEventImages();
    // this.loadHomeEventImages();
  },


  loadWorkEventIamges:function(){
    // arcade
    game.load.image('event_04', 'assets/images/events/work/arcade/04_step_drop.png');
    game.load.image('event_05', 'assets/images/events/work/arcade/05_shop_stuff.png');
    game.load.image('event_06', 'assets/images/events/work/arcade/06_low_sign.png');
    game.load.image('event_07', 'assets/images/events/work/arcade/07_messy_motors.png');
    game.load.image('event_08', 'assets/images/events/work/arcade/08_sidewalk_bike.png');
    game.load.image('event_67', 'assets/images/events/work/arcade/67_messy_garbage.png');
    game.load.image('event_68', 'assets/images/events/work/arcade/68_broken_slope.png');
    game.load.image('event_69', 'assets/images/events/work/arcade/69_truck_back.png');

    // crossroad
    game.load.image('event_01', 'assets/images/events/work/crossroad/01_dog_stop.png');
    game.load.image('event_02', 'assets/images/events/work/crossroad/02_loud_noise.png');
    game.load.image('event_03', 'assets/images/events/work/crossroad/03_motor_turn.png');

    // bus_station
    game.load.image('event_16', 'assets/images/events/work/bus_station/16_check_time.png');
    game.load.image('event_17', 'assets/images/events/work/bus_station/17_check_bus.png');
    game.load.image('event_18', 'assets/images/events/work/bus_station/18_bus_drove_away.png');

    // bus
    game.load.image('event_20', 'assets/images/events/work/bus/20_find_seat.png');
    game.load.image('event_21', 'assets/images/events/work/bus/21_too_stink.png');
    game.load.image('event_22', 'assets/images/events/work/bus/22_specific_location.png');
    game.load.image('event_23', 'assets/images/events/work/bus/23_dog_touched.png');
    game.load.image('event_24', 'assets/images/events/work/bus/24_if_bite.png');
    game.load.image('event_25', 'assets/images/events/work/bus/25_good_driver.png');

    //mrt_station
    game.load.image('event_09', 'assets/images/events/work/mrt_station/09_crowded_gate.png');
    game.load.image('event_10', 'assets/images/events/work/mrt_station/10_elevator_down.png');
    game.load.image('event_11', 'assets/images/events/work/mrt_station/11_staff_help.png');
    game.load.image('event_12', 'assets/images/events/work/mrt_station/12_people_pet_dog.png');
    
    // mrt
    game.load.image('event_13', 'assets/images/events/work/mrt/13_mrt_seats.png');
    game.load.image('event_14', 'assets/images/events/work/mrt/14_tail_stepped.png');
    game.load.image('event_15', 'assets/images/events/work/mrt/15_scared_kid.png');

    // fast_food
    game.load.image('event_26', 'assets/images/events/work/fast_food/26_kid_feed.png');
    game.load.image('event_27', 'assets/images/events/work/fast_food/27_guest_talk.png');
    game.load.image('event_28', 'assets/images/events/work/fast_food/28_clerk_help.png');

    // breakfast
    game.load.image('event_29', 'assets/images/events/work/breakfast/29_door_bike_motor.png');
    game.load.image('event_30', 'assets/images/events/work/breakfast/30_store_take_arcade.png');
    game.load.image('event_31', 'assets/images/events/work/breakfast/31_guest_feed_dog.png');
  },

  startMenu: function(){
    // whether to jump set in Json
    game.state.start(settingsJSON.debug_jump);
  },

  loadJson:function(){
    this.txt[0] = settingsJSON.loading_texts[0];
    this.txt[1] = settingsJSON.loading_texts[1];
  }
};
