import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchList from '../SearchList/SearchList'
import axios from 'axios';

class Search extends Component {

    state = {
        search: '',
    }

    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({ search: event.target.value })
        console.log(this.state)
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.dispatch({ type: 'CLICK_SEARCH', payload: this.state.search });
    }

    render() {

        return (
            <div>
                <input onChange={this.handleChange} type="text" placeholder="Search for Things" />
                <button onClick={this.handleClick}>Find my stuff!</button>
                <div><SearchList /></div>
                {/* <h6>JSON STRING: {JSON.stringify(this.props.reduxState.reducerOne)}</h6> */}
            </div>
        );
    }

}

// MAGIC WORDS HERE
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Search);