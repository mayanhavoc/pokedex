import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Pokecard = ({pokemon}) => {
    let pad = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    let imgSrc= `${POKE_API}${pad(pokemon.id)}.png`;
        return (
            <div className="Pokecard">
                <div className="Pokecard-card">
                    <div className="Pokecard-card-title">
                        <p>{pokemon.name}</p>
                    </div>
                    <div className="Pokecard-card-body">
                        <div className="Pokecard-card-image">
                            <img src={imgSrc} alt={pokemon.name} />
                        </div>
                        <div className="Pokecard-card-text">
                            <span className="Pokecard-card-description">Type: {pokemon.type}</span>
                            <span className="Pokecard-card-description">XP: {pokemon.base_experience}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Pokecard;