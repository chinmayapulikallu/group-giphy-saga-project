import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem'

class SearchList extends Component {

    render() {
        return (
            <div>                
            {/* MAP HERE */}
            {/* In SearchList: {JSON.stringify(this.props.reduxState.reducerOne.data)} */}
                {this.props.reduxState.reducerOne.map((gif)=> {
                    return(
                        <div><SearchItem gif={gif}/></div>
                        )
                    })}
            </div>
        );
    }

}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(SearchList);