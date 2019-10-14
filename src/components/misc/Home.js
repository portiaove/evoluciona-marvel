import React from 'react'
import Characters from '../characters/Characters'
import MarvelService from '../../services/MarvelService'

class Home extends React.Component {

  state= {
    characters: [],
    search: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { search } = this.state
    this.setState({characters: []})
    MarvelService.listCharacters(search)
    .then(res => res.data.data.results.map(el => this.setState({ characters: [...this.state.characters, el] })))
    .catch(err => console.log(`the error is ${err}`))
  }

  handleChange = (e) => {    
    this.setState({search: e.target.value})
  }

  render() { 
    const chars = this.state.characters.map(c => (<Characters key={c.id} character={c} />))

    return(
      <div className='Home'>
        <form onSubmit={this.handleSubmit} className='Search-Bar' >
          <input onChange={this.handleChange} placeholder='Character Name' className='Search-Input' />
          <button type='submit' className='Search-Button' >	&#128269;</button>
        </form>
        <div className='Characters-List'>
          {chars}
        </div>
      </div>
    )
  }
}

export default Home