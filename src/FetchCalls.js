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




// export const postComment = async (movieId, author, comment) => {
//   return await fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         "author": author,
//         "comment": comment
//       }),
//     })
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       } else {
//         throw alert('Invalid comment, Please try again')
//       }
//     })
// }