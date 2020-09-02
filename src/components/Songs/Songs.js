import React from 'react';
import Card from '../Card/Card.js'


class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allsongs: []
    }
  }

  componentDidMount() {
    
  }

  mapSongs = () => {
// this.props.allSongs.length > 1 &&
// this.setState({allsongs: this.props.allSongs
// })
    return this.props.allSongs.map(song => 
    <Card
    name={song.songname}
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