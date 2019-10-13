import React from 'react'
import Characters from '../characters/Characters'
import MarvelService from '../../services/MarvelService'

class Home extends React.Component {

  state= {
    characters: []
  }

  fetchCharacters = () => {
    MarvelService.listCharacters()
    .then(res => res.data.data.results.map(el => this.setState({ characters: el })))
    .catch(err => console.log(`the error is ${err}`))
  }

  componentDidMount() {
    this.fetchCharacters()
  }

  render() {
    console.log(this.state.characters)
    return(
      <div className='Home'>
        <h1>Home Again</h1>
        <Characters />
      </div>
    )
  }
}

export default Home