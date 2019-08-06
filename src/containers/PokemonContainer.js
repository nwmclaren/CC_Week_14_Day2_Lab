import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector.js'
import PokemonDetail from '../components/PokemonDetail.js'
class PokemonContainer extends Component {

constructor(props){
  super(props);

  this.state = {
    pokemon : [],
    currentPokemon: null
  };
  this.handlePokemonSelected = this.handlePokemonSelected.bind(this)
}

  handlePokemonSelected(index){
    const selectedPokemonurl = this.state.pokemon[index].url
    fetch(selectedPokemonurl)
    .then(res => res.json())
    .then(currentPokemon => this.setState({currentPokemon:currentPokemon}))
  }

  componentDidMount() {
    console.log("Pokemon has landed");
    const url = "https://pokeapi.co/api/v2/pokemon"
    fetch(url)
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon:pokemon.results}))
    .catch(err => console.error)
}

render(){
  return(
    <div>
      <PokemonSelector
        onPokemonSelected={this.handlePokemonSelected}
        pokemon={this.state.pokemon}
      />
      <PokemonDetail pokemon={this.state.currentPokemon}/>
    </div>
  )
}
}

export default PokemonContainer;
