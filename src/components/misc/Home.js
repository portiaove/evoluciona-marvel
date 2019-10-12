import React from 'react'
import Characters from '../characters/Characters'
import MarvelService from '../../services/MarvelService'

class Home extends React.Component {

  state= {
    characters: []
  }

  fetchCharacters = () => {
    MarvelService.listCharacters()
    .then(res => console.log(`the response is ${res}`))
    .catch(err => console.log(`the error is ${err}`))
  }

  componentDidMount() {
    this.fetchCharacters()
  }

  render() {
    return(
      <div className='Home'>
        <h1>Home Again</h1>
        <Characters />
      </div>
    )
  }
}

export default Home