var game = 
new Phaser.Game(1920, 1080, Phaser.AUTO, 'MainBody'), 
Main = function(){},
WIDTH = 1920,
HEIGHT = 1080,
total_score = 0,
gameOptions = {
    playSound: true,
    playMusic: true
},
musicFadeSpeed = 1000,
musicPlayer1,
musicPlaying1 = false,
musicPlayer2,
musicPlaying2 = false,
splashSpeed = 1000,
splashDelay = 1000,
tweenSpeed = 1000,
tweenDelay = 500,
txtDelay = 1500,
sceneSwitchSpeed = 300,
sceneSwitchDelay = 300,
settingsJSON,
textsJSON,
pathIndex,
sceneIndex,
thirdLineOffset = 30;

Main.prototype = {
    preload:function(){
        // set to show_all since 1920 * 1080 is too large
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.windowConstraints.bottom = "visual";
        game.scale.setShowAll();
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        window.addEventListener('resize', function () { 
            game.scale.refresh();
        });
        game.scale.refresh();

        //
        this.loadImgs();
        this.loadScripts(); 

        // load JSON file
        game.load.json("settings_json","settings.json");
        game.load.json("texts_json","texts.json");
    },

    create:function(){
        game.state.add('Splash', Splash);
        game.state.start('Splash');

        // JSON
        settingsJSON = game.cache.getJSON("settings_json");
        textsJSON = game.cache.getJSON("texts_json");
    },

    loadImgs:function(){
        game.load.image('gicumaLogo','assets/images/logo/gicuma.png');
        game.load.image('loadingBG', 'assets/images/loading/bg.png');
    },

    loadScripts:function(){
        game.load.script('loading', 'states/Loading.js');
        game.load.script('splash', 'states/Splash.js');
        game.load.script('utils', 'lib/utils.js');
        // game.load.script('polyfill','lib/polyfill.js');
        game.load.script('WebFont', 'vendor/webfontloader.js');
    }
};

game.state.add('Main',Main);
game.state.start('Main');