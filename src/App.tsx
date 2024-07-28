import { useState, useEffect } from 'react';
import './App.css';
import './assets/css/style.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Pokemons from './components/Pokemons';
import Teams from './components/Teams';
import Types from './components/Types';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { IPokemon } from './@types/pokemon';
// import { IPokemon } from './@types/pokemon';
// import { Iteam } from './@types/team';

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([]);
  const [pokemon, setPokemon] = useState<IPokemon>(pokemons[1]);
  // Fetch All Pokemons
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          'https://tyradex.vercel.app/api/v1/pokemon'
        );
        if (response.data) {
          setPokemons(response.data);
        }
      } catch (e) {
        console.log('Error fetching pokemons:', e);
      }
    };
    fetchPokemons();
  }, []);
  // Fetch One Pokemon
  // useEffect(() => {
  //   const fetchPokemon = async (idPokemon: number) => {
  //     try {
  //       const response = await axios.get(
  //         `https://tyradex.vercel.app/api/v1/pokemon/${idPokemon}`
  //       );
  //       if (response.data) {
  //         setPokemon(response.data);
  //         console.log(pokemon);
  //       }
  //     } catch (e) {
  //       console.log('Error fetching pokemon:', e);
  //     }
  //   };
  //   fetchPokemon(1);
  // }, [pokemon]);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({
    content: 'pokemon',
  });

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const changeModalContent = (newContent: string) => {
    setModalContent({
      content: newContent,
    });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Pokemons
              setModalState={setModalState}
              modalState={modalState}
              // changeModalContent={changeModalContent}
              // modalContent={modalContent}
              setModalContent={setModalContent}
              pokemons={pokemons}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          }
        />
        <Route
          path="/teams"
          element={
            <Teams
              toggleModal={toggleModal}
              changeModalContent={changeModalContent}
            />
          }
        />
        <Route path="/types" element={<Types />} />
        {/* <Route path="/page_not_found" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to="/page_not_found" />} />
      </Routes>
      <Footer />
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        modalContent={modalContent}
        pokemon={pokemon}
      />
    </>
  );
}

export default App;
