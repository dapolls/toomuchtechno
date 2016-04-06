var audio;
var playlist;
var tracks;
var current;

var musicarr = ["techno.mp3",
                "techno1.mp3",
                "techno2.mp3",
                "techno3.mp3",
                "techno4.mp3",
                "techno5.mp3",
               ];
shuffle(musicarr);

init();
function init(){
    current = 0;
    audio = $('audio');
    audio[0].volume = .40;
    len = musicarr.length;
    
    run(musicarr[current], audio[0]);
}
$(document).keypress(handle_change_track);

function handle_change_track(e){
    var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '32' || keycode == '0' ){
        current++;
        if(current == len){
            current = 0;
        }
        run(musicarr[current],audio[0]);
      }
}

function run(link, player){
        player.src = link;
        audio[0].load();
        audio[0].play();
        $('#playing').html("<ul><li><a>" + link+ "</a></li></ul>");     
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}