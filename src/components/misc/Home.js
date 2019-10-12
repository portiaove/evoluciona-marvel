import React, { Fragment } from 'react'
import Characters from '../characters/Characters'

class Home extends React.Component {
  render() {
    return(
      <Fragment className='Home'>
        <h1>Home Again</h1>
        <Characters />
      </Fragment>
    )
  }
}

export default Home