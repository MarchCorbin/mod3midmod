import React from 'react';
import Card from '../Card/Card.js'


class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allsongs: []
    }
  }

  mapSongs = () => {
    return this.props.allSongs.map(song => 
    <Card
    songname={song.songName}
    artist={song.artistName}
    link={song.link}
    id={song.id}
    key={song.id}
    />)
    
  }

  render() {
    return <div>
      {this.mapSongs()}
    </div>
  }

}


export default Songs