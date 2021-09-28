const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Pokecard = ({pokemon}) => {
    let pad = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    let imgSrc= `${POKE_API}${pad(pokemon.id)}.png`;
        return (
            <div>
                <div className="card">
                    <div className="card-title">
                        <p>{pokemon.name}</p>
                    </div>
                    <div className="card-body">
                        <div className="card-image">
                            <img src={imgSrc} alt={pokemon.name} />
                        </div>
                        <div className="card-text">
                            <span>Type:{pokemon.type}</span>
                            <span>XP:{pokemon.base_experience}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Pokecard;