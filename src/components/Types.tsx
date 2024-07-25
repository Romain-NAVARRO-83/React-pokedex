import types from '../assets/data/types.json';
import CardType from './CardType';

export default function Types() {
  return (
    <main className="flexmaster gap">
      <h2>Tous les types de pokemons</h2>
      {types.map((type) => (
        // <div key={type.id}>{type.name}</div>
        <CardType key={type.id} type={type} />
      ))}
    </main>
  );
}
