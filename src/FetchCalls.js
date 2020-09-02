export const getAllSongs = () => {
  return fetch('http://localhost:8080/api/v1/playlist')
  .then((response) => response.json())
}

export const postNewSong = (song, artist, link) => {
return fetch('http://localhost:8080/api/v1/playlist', {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json'
  },
  body: JSON.stringify({
      "songName": song,
      "artistName": artist,
      "link": link
    }),
  })
  .then((response) => response.json())
}
