$(document).ready(function(){
  getSongs();
});

var audio = document.getElementById('player');
var music;

function getSongs(){
  $.getJSON("js/app.json", function(mjson){
    music = mjson;
    genList(music); //It generates the song list
  });
};

function genList(music) {
  console.log(music.songs);
  $.each(music.songs, function(i, song){
    $('#playlist').append('<li class="songs-li" id="' + i + '">' + song.name + '</li>');
  }); //It adds for each song a li tag

  $('#playlist li').click(function(){ //It'll play the selected song when the user clicks a song from the list
    var selectedSong = $(this).attr('id');
    playSong(selectedSong);
  });
};

function playSong(id){
  console.log(id);
  $('#img-album').attr('src', music.songs[id].img);
  $('#player').attr('src', music.songs[id].song);
  audio.play(); //this method belongs to the audio api, and it allows reproduce the song automatically
};
