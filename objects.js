var playlist = {
  cultura: "espera",
  gomba: "ruffrebel"
};

function updatePlaylist(playlist, cafres, momento) {
  playlist[cafres] = "momento";
  return playlist;
}

function removeFromPlaylist(playlist, cafres) {
  delete playlist.cafres;
  return playlist;
}