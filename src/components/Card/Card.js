import React from 'react'
import './Card.scss'


function Card ({songname, artist, link, id}) {
return (
<div className='each-card'>
<h2 alt='songName' >{songname}</h2>
<h3 alt='artistName'>{artist}</h3>
<a alt='linktoartist' href={link}>{link}</a>
<h6>{id}</h6>
</div>
)
}

export default Card