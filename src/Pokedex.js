import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component  {
    render(){
        let title;
        if (this.props.isWinner){
            title = <h1>Winner</h1>
        } else {
            title = <h1>Loser</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h4>Total experience: {this.props.exp}</h4>
                <div >
                    <ul className="Pokedex-container">
                    {this.props.pokemon.map((pokemon) => (
                        <Pokecard key={pokemon.id} pokemon= {pokemon} />
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Pokedex
