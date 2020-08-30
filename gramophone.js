function gramophone(nameOfBand, nameOfAlbum, SongName) {
  let songDuration =
    (nameOfAlbum.length * nameOfBand.length * SongName.length) / 2;
  let rotation = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${rotation} times.`);
}
