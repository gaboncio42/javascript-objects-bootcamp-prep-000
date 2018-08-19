var playlist = {
  cultura: "espera",
  gomba: "ruffrebel"
};

function updatePlaylist(playlist, cafres, momento) {
  playlist[cafres] = "momento";
  return playlist;
}

function removeFromPlaylist(playlist, cultura) {
  delete playlist.cultura;
  return playlist;
}