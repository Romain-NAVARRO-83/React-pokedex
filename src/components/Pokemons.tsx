import CardPokemon from './CardPokemon';
import pokemons from '../assets/data/pokemons.json';

interface Ipokemons {
  toggleModal: () => void;
  changeModalContent: (content: string, id: number) => void;
}

export default function Pokemons({
  toggleModal,
  changeModalContent,
}: Ipokemons) {
  return (
    <main className="flexmaster gap">
      <h2>Tous les pokemons</h2>
      {pokemons.map((pokemon) => {
        return (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}
            toggleModal={toggleModal}
            changeModalContent={changeModalContent}
          />
        );
      })}
    </main>
  );
}
