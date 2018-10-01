var playlist = Object.assign({Nirvana: "Lithium"},{Foo_Fighters: "Learn_to_fly"});

function updatePlaylist(playlist,name,song){
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  var dup_playlist = playlist.slice();
  delete dup_playlist[Nirvana];
  return playlist;
  
}