import React from 'react'
import './Card.scss'


function Card ({name, artist, link, id}) {
return (
  <div className='each-card'>
<h2>{name}</h2>
<h3>{artist}</h3>
<a href={link}>{link}</a>
<h6>{id}</h6>
</div>
)
}

export default Card