import React, { PureComponent } from 'react';
import { getCharacters } from '../services/RickAndMortyAPI';
import Characters from '../components/characters/Characters';
import Loader from '../components/Loader';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    loader: true
  }

  fetchCharacters = () => {
    this.setState({ loader: true });
    getCharacters()
      .then(characters => this.setState({ characters, loader: false }));
  }
  
  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters, loader } = this.state;
    if(loader) return <Loader />;

    return <Characters characters={characters.characters} />;
  }
}
