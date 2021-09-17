import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => {
     return <Gif id={gif.id} key={gif.id} />
      })
     }
  render() {
    return (
      <div className="gif-list" >
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
