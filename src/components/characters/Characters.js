import React from 'react'

const Characters = (props) => {

  const { name, description, thumbnail } = props.character

  const image = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div className='Characters'>
      <div className='Img-Container'>
          <img src={image} alt={name} />
      </div>
      <div className ='Characters-Info'>
        <h2>{name}</h2>
        <p>{description ? description : 'No description available at the moment :('}</p>
      </div>
    </div>
  )
}

export default Characters