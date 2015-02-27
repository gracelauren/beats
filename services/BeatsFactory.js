beatsVine.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function() {
    factory.beats.push({ name: factory.beatName, id: factory.beats.length + 1, reporters: [] });
    factory.beatName = null;
  };

  //  factory.deleteBeat = function(beatToDelete) {
  //   var i = factory.beats.length;
  //   while(i--){
  //     if( factory.beats.length[i]
  //       && factory.beats.length[i].hasOwnProperty(attr)
  //       && (factory.beats.length[i][name] === beatToDelete ) ) {
  //         factory.beats.splice(i,1);
  //       }
  //     }
  //     return factory.beats;
  //   };

  return factory;
});
