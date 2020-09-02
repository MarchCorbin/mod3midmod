import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form.js'

describe('Form', () => {
  it('should have 3 inputs and a button', () => {
    const addSong = jest.fn()
    
    render(<Form addSong={addSong} />)
      const songInput = screen.getByPlaceholderText('Song Name')
      const artistInput = screen.getByPlaceholderText('Artist Name')
      const linkInput = screen.getByPlaceholderText('Link')

      expect(songInput).toBeInTheDocument()
      expect(artistInput).toBeInTheDocument()
      expect(linkInput).toBeInTheDocument()
  })

  it('should allow a user to enter a new song', () => {
    const addSong = jest.fn()
        
    render(<Form addSong={addSong} />)
    
const songInput = screen.getByPlaceholderText('Song Name')
const artistInput = screen.getByPlaceholderText('Artist Name')
const linkInput = screen.getByPlaceholderText('Link')

expect(songInput).toBeInTheDocument()
expect(artistInput).toBeInTheDocument()
expect(linkInput).toBeInTheDocument()

fireEvent.change(songInput, {target: {name:'songName', value:"Fly Like Bird"}})
expect(songInput.value).toEqual('Fly Like Bird')
fireEvent.change(artistInput, {target: {name:'artistName', value:"Nelly Furtado"}})
expect(artistInput.value).toEqual('Nelly Furtado')
fireEvent.change(linkInput, {target: {name:'link', value:"bestModernClassics.biz"}})
expect(linkInput.value).toEqual('bestModernClassics.biz')
  })
})
