import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }


  search = (query) => {
    const giphyAPIKey = 'C1vXWS2OKAHc8s2BrRN1lqVAl9OcM4NQ';
    giphy(giphyAPIKey).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
      </div>
    </div>
    );
  }
}

export default App;
