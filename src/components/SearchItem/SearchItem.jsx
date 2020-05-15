import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchItem extends Component {

    render() {

        return (
            <div>
                Testing a {this.props.gif.id}
                <img src={this.props.gif.images.original.url}/>       
            </div>
        );
    }

}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(SearchItem);