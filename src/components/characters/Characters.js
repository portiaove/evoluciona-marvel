import React from 'react'

class Characters extends React.Component {

  state = {
    readMore: false
  }

  handleReadMore = () => {
    const { readMore } = this.state
    this.setState({readMore: !readMore})
  }

  render() {
  const { name, thumbnail } = this.props.character
  const image = `${thumbnail.path}.${thumbnail.extension}`

  const descriptionLong = this.props.character.description.replace(/<p class="Body">/g, '').replace(/<\/p>/g, '')
  const descriptionShort = `${descriptionLong.slice(0, 100)}...`

  const description = this.state.readMore ? descriptionLong : descriptionShort
  
  const text = description === '...' || description === ' ...'? 'No description available at the moment :(' : description
  const readText = this.state.readMore ? 'Show Less' : 'Show More'

  return (
    <div className='Characters'>
      <div className='Img-Container'>
          <img src={image} alt={name} />
      </div>
      <div className ='Characters-Info'>
        <h2>{name}</h2>
        <p>{text}</p>
        {text !== 'No description available at the moment :(' &&
        <div className='Btn-Container'>
         <button className='Btn-ReadMore' onClick={this.handleReadMore}>{readText}</button>
        </div>}
      </div>
    </div>
  )
  }
}

export default Characters