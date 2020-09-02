import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songName: '',
      artistName: '',
      link: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value })
  }

  clearInputs() {
    return this.setState({songName:'', artistName:'', link:''})
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    let songName = this.state.songName
    let artistName = this.state.artistName
    let link = this.state.link
    this.props.addSong(songName, artistName, link)
      await this.clearInputs()
  }

  render() {
    return <form>
      <input placeholder="Song Name" name="songName" className='song-name' onChange={this.handleChange} />
      <input placeholder='Artist Name' name="artistName" className='Artists Name' onChange={this.handleChange}/>
      <input placeholder='Link' name="link" className='link' onChange={this.handleChange} />
      <button onClick={this.handleSubmit} >Add Song!</button>
    </form>
  }
}

export default Form