$(document).ready(function(){
  getSongs();
});

var audio, music;

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
  $('#playlist li').click(function(){ //It'll play the selected song when the user clicks a name song
    var selectedSong = $(this).attr('id');
    console.log(selectedSong);
  });
};
