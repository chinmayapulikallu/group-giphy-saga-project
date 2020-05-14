import React, { Component } from 'react';
import Search from '../Search/Search'
import { connect } from 'react-redux';

class App extends Component {

  handleClick = () => {
    console.log('Current Redux State:', this.props.reduxState)
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <p><button onClick={this.handleClick}>Check reduxState</button></p>
        <Search />
      </div>
    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);