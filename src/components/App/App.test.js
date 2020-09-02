import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";
import {getAllSongs, postNewSong} from '../../FetchCalls.js'
jest.mock('../../FetchCalls.js')

describe('App', () => {
  it('should be able to add a new song', async() => {
const mySongs = [
  {
    songName: "Swear",
    artistName: "Casiopea",
    link: "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
    id: 1,
  },
  {
    songName: "Autumn Leaves",
    artistName: "Bill Evans Trio",
    link: "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
    id: 2,
  },
];

const additionalSong = {
  songName: "Fly Like Bird",
  artistName: "Nelly Furtado",
  link: "bestModernClassics.biz",
  id: 1599069253020,
};
postNewSong.mockResolvedValue(additionalSong)


    getAllSongs.mockResolvedValue(mySongs)
    render(<App />)
const songInput = screen.getByPlaceholderText('Song Name')
const artistInput = screen.getByPlaceholderText('Artist Name')
const linkInput = screen.getByPlaceholderText('Link')
const submitButton = screen.getByRole('button')
expect(submitButton).toBeInTheDocument()

expect(songInput).toBeInTheDocument()
expect(artistInput).toBeInTheDocument()
expect(linkInput).toBeInTheDocument()


fireEvent.change(songInput, {target: {name:'songName', value:"Fly Like Bird"}})
expect(songInput.value).toEqual('Fly Like Bird')
fireEvent.change(artistInput, {target: {name:'artistName', value:"Nelly Furtado"}})
expect(artistInput.value).toEqual('Nelly Furtado')
fireEvent.change(linkInput, {target: {name:'link', value:"bestModernClassics.biz"}})
expect(linkInput.value).toEqual('bestModernClassics.biz')
fireEvent.click(submitButton)

const songName = await waitFor(() => screen.getByText('Fly Like Bird'))
const artistName = await waitFor(() => screen.getByText('Nelly Furtado'))


expect(songName).toBeInTheDocument()
expect(artistName).toBeInTheDocument()
  })
})
