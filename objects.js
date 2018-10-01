var playlist = Object.assign({Nirvana: "Lithium"},{Foo_Fighters: "Learn_to_fly"});

function updatePlaylist(playlist,name,song){
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist,name){
  
  delete playlist.Nirvana.Foo_Fighters;
  return playlist;
  
}