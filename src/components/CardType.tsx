import pokemons from '../assets/data/pokemons.json';

interface IcardType {
  type: {
    id: number;
    name: string;
    color: string;
  };
}
export default function CardType({ type }: IcardType) {
  const typePokemons = pokemons
    .filter((pokemon) =>
      pokemon.types.some((oneType) => oneType.id === type.id)
    )
    .slice(0, 5);
  const CountPokemons = pokemons.filter((pokemon) =>
    pokemon.types.some((oneType) => oneType.id === type.id)
  ).length;
  return (
    <div className="card l3 m4 s12 typecard">
      <div className={`card-header type${type.name}`}>
        {typePokemons.map((typePokemon) => (
          // <>
          <img
            key={typePokemon.id}
            src={`/static/images/${typePokemon.id}.webp`}
            width={70}
            height={70}
            alt={typePokemon.name}
          />
          // </>
        ))}
      </div>
      <h3>{type.name}</h3>
      <p>{CountPokemons} Pokemons</p>
    </div>
  );
}
