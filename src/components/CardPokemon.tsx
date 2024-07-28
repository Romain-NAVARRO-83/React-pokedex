import { useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { IPokemon } from '../@types/pokemon';
import { Link } from 'react-router-dom';
// import { Iteam } from '../@types/team';

interface IPokemonProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<
    React.SetStateAction<{
      content: string;
    }>
  >;
  cardPokemon: IPokemon;

  pokemon: IPokemon;
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
}
export default function CardPokemon({
  cardPokemon,
  modalState,
  setModalState,
  setModalContent,
  pokemon,
  setPokemon,
}: IPokemonProps) {
  function toggleModal() {
    setModalState(!modalState);
  }
  function changeModalContent(newContent: string) {
    setModalContent({
      content: newContent,
    });
  }
  // Fetch One Pokemon

  async function fetchPokemon(idPokemon: number) {
    try {
      const response = await axios.get(
        `https://tyradex.vercel.app/api/v1/pokemon/${idPokemon}`
      );
      if (response.data) {
        setPokemon(response.data);
        console.log(pokemon);
      }
    } catch (e) {
      console.log('Error fetching pokemon:', e);
    }
  }
  return (
    <article className="card l3 m4 s12 cardpokemon">
      <button
        className="groundshadow"
        type="button"
        onClick={() => {
          toggleModal();
          fetchPokemon(cardPokemon.pokedex_id);
        }}
      >
        <img
          src={cardPokemon.sprites.regular}
          alt={cardPokemon.name.fr}
          width={100}
          height={100}
          className="pokemon breathover"
        />
      </button>
      <h3>{cardPokemon.name.fr}</h3>
      <div className="pokemon-types">
        {cardPokemon.types?.map((type) => {
          return (
            <Link
              type="button"
              className={`type${type.name} typebtn`}
              title={type.name}
              aria-label={type.name}
              key={type.name}
              // onClick={() => {
              //   toggleModal();
              //   changeModalContent('pokemon');
              // }}
              to={`/type/${type.name}`}
            >
              <img src={type.image} alt={type.name} width={30} />
            </Link>
          );
        })}
      </div>
    </article>
  );
}
