import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media1.giphy.com/media/gjgWQA5QBuBmUZahOP/giphy.gif?cid=ecf05e47odsi3wmtzq6fkzkmxo0qo8ykura8kssd8vug7hf2&rid=giphy.gif&ct=g"
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;

// https://media2.giphy.com/media/l0HlNbeDtLwwkBUiI/200w.gif
