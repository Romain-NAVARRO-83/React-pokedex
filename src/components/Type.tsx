// import { useParams } from 'react-router-dom';
import { IType } from '../@types/type';

interface ITypeProps {
  type: IType | null;
}

export default function Type({ type }: ITypeProps) {
  // const { type } = useParams<{ type: string }>();
  // const foundType = types.find((oneType) => oneType.name.fr === type);

  if (type) {
    return (
      <main>
        <section className={`type-header type${type.name.fr}`}>
          <h2>Type {type.name.fr}</h2>
          <img src={type.sprites} alt={type.name.fr} />
        </section>
        <section>
          <div className="s12 m4 l4">
            <h3>Résistances</h3>
            <ul className="flexmaster gap">
              {type.resistances.map((resistance) => {
                return (
                  <li
                    key={resistance.name}
                    className={`resistance type${resistance.name} s6 m3 l2`}
                  >
                    <span>{resistance.name}</span>
                    <span>{resistance.multiplier}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="flexmaster">
          <h3>Tous les pokemons de type {type.name.fr}</h3>
          {type.pokemons.map((pokemon) => (
            <div key={pokemon.pokedex_id} className="s12 m4 l3">
              {pokemon.name.fr}
            </div>
          ))}
          {/* {JSON.stringify(type)} */}
        </section>
      </main>
    );
  }

  return <div>Aucun type trouvé</div>;
}
