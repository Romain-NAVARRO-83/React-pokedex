import { Link } from 'react-router-dom';
import axios from 'axios';
import { IPokemon } from '../@types/pokemon';
import { IType } from '../@types/type';

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
  type: IType | null;
  setType: React.Dispatch<React.SetStateAction<IType | null>>;
}
export default function CardPokemon({
  cardPokemon,
  modalState,
  setModalState,
  setModalContent,
  pokemon,
  setPokemon,
  type,
  setType,
}: IPokemonProps) {
  function toggleModal() {
    setModalState(!modalState);
  }
  function changeModalContent(newContent: string) {
    setModalContent({
      content: newContent,
    });
  }
  // Fetch One Type
  const fetchType = async (typeName: string) => {
    try {
      const response = await axios.get(
        `https://tyradex.vercel.app/api/v1/types/${typeName}`
      );
      if (response.data) {
        setType(response.data);
      }
    } catch (e) {
      console.log('Error fetching type:', e);
    }
  };
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
          changeModalContent('pokemon');
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
        {cardPokemon.types?.map((oneType) => {
          return (
            <Link
              type="button"
              className={`type${oneType.name} typebtn`}
              title={oneType.name}
              aria-label={oneType.name}
              key={oneType.name}
              onClick={() => {
                fetchType(oneType.name);
              }}
              to={`/types/${oneType.name}`}
            >
              <img src={oneType.image} alt={oneType.name} width={30} />
            </Link>
          );
        })}
      </div>
    </article>
  );
}
