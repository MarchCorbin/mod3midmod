import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import { getAllSongs, postNewSong } from '../../FetchCalls.js'
import Songs from '../Songs/Songs.js'
import Form from '../Form/Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  addSong = (song, artist, link) => {
    postNewSong(song, artist, link)
    .then(data => this.setState({songQueue: [...this.state.songQueue, data]}))
    .catch(err => console.log(err))
  }

  componentDidMount = async() => {
   await getAllSongs()
    .then(data => this.setState({songQueue: data}))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Form addSong={this.addSong} />
            <Songs allSongs={this.state.songQueue} />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
