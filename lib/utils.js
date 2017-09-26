var utils = {
  centerGameObjects: function (objects) {
    objects.forEach(function (object) {
      object.anchor.setTo(0.5);
    })
  },

  zeroAlpha: function (objects) {
    objects.forEach(function (object) {
      object.alpha = 0;
    })
  },

  addExistingMultiple: function (objects) {
    objects.forEach(function (object) {
      game.add.existing(object);
    })
  },

  chainTween: function(t1, t2){
    t1.chain(t2);
  },

  getRandomInt:function(max){
    return game.rnd.integerInRange(0, max - 1); //  0 <= return <= max
  }

};
