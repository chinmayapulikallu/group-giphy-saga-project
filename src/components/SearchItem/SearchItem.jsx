import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchItem extends Component {

    render() {
        return (
            <div>
                {this.props.gif.url}
            </div>
        );
    }

}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(SearchItem);