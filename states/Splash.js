var Splash = function () {};

Splash.prototype = {

  init: function () {
    this.logo       = game.make.sprite(game.world.centerX, game.world.centerY, 'gicumaLogo');
    this.logo.alpha = 0;
    this.logo.anchor.setTo(0.5);
    this.makeTween();
  },

  preload: function () {
    game.add.sprite(0, 0, 'loadingBG');
    game.add.existing(this.logo);

    // load imgs for loading scene
    this.loadImages();

    // loadFonts
    this.loadFonts();
  },

  create: function() {
    this.fadeLogoIn.start();
    game.state.add('Loading', Loading);
  },

  makeTween:function(){
    this.fadeLogoIn = game.add.tween(this.logo).to({ alpha: 1 }, splashSpeed, Phaser.Easing.Linear.None);
    this.fadeLogoOut = game.add.tween(this.logo).to({ alpha: 0 }, splashSpeed, Phaser.Easing.Linear.None, false, splashDelay); 
    utils.chainTween(this.fadeLogoIn,this.fadeLogoOut);
    this.fadeLogoOut.onComplete.add(this.startLoading, this);
  },

  loadFonts: function () {
    // WebFontConfig = {
    //   custom: {
    //     families: ['SansCJK'],
    //     urls: ['assets/style/sanscjk.css']
    //   }
    // }
  },

  loadImages:function(){
    // loading Scene
    game.load.image('loadingJoseph', 'assets/images/loading/Loading_Joseph.png');
    game.load.image('loadingFill', 'assets/images/loading/Loading_color.png');

    // menu sprites
    game.load.image('menu_bg', 'assets/images/menu/bg2.png');
    game.load.image('menu_traffic_light', 'assets/images/menu/traffic-light.png');
    game.load.image('menu_joseph', 'assets/images/menu/Joseph.png');
  },

  startLoading: function(){
    game.state.start('Loading'); 
  }
};
