import React from 'react'
import {screen, render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Songs from './Songs.js'

describe('Songs', () => {
  it('should display all songs being given as props', async() => {
const mySongs = [{
      "songName": "Swear",
      "artistName": "Casiopea",
      "link": "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
      "id": 1
    },
    {
      "songName": "Autumn Leaves",
      "artistName": "Bill Evans Trio",
      "link": "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
      "id": 2
    }]
    render(<Songs allSongs={mySongs} />)

    const songName1 =  screen.getByText('Swear')
    const songName2 =  screen.getByText('Autumn Leaves')
    expect(songName1).toBeInTheDocument()
    expect(songName2).toBeInTheDocument()
    const artist1 = screen.getByText("Casiopea");
    const artist2 = screen.getByText("Bill Evans Trio");
    expect(artist1).toBeInTheDocument()
    expect(artist2).toBeInTheDocument()
  })
})