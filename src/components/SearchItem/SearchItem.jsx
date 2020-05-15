import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class SearchItem extends Component {

    gifClick = () => {
        console.log("gif was clicked", this.props.gif.id);
        // AXIOS POST 
        let favoriteGif = {
            favorite: this.props.gif.id
        }
        axios.post('/api/favorite', favoriteGif)
            .then((response) => {
                console.log(response);
            }).catch((error => {
                console.log(error)
            })
            )
    }

    render() {
        return (
            <div>
                <img onClick={this.gifClick} src={this.props.gif.images.original.url} />
            </div>
        );
    }

}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(SearchItem);