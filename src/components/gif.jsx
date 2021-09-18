import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id)
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200w.gif`
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

// https://media2.giphy.com/media/l0HlNbeDtLwwkBUiI/200w.gif
