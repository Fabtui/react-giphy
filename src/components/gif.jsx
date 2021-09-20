import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseOver: false
    }
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id)
    }
  }

  onMouseEnter = () => {
    this.setState({ mouseOver: true })
  }

  onMouseOut = () => {
    this.setState({ mouseOver: false })
  }

  classeNames = () => {
    let classes = 'gif'
    if (this.state.mouseOver) {
      classes += ' over'
    } else classes += ' blur'
    return classes
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${this.props.id}/200w.gif`
    return (
      <img src={src} alt="" className={this.classeNames()} onClick={this.handleClick} onMouseOut={this.onMouseOut} onMouseEnter={this.onMouseEnter} />
    );
  }
}

export default Gif;

// https://media2.giphy.com/media/l0HlNbeDtLwwkBUiI/200w.gif
