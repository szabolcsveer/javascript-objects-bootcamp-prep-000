var playlist = Object.assign({Nirvana: "Lithium"},{Foo_Fighters: "Learn_to_fly"});

function updatePlaylist(playlist,name,song){
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  
  delete Object[Nirvana];
  return playlist;
  
}