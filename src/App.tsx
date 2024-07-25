import { useState, useEffect } from 'react';
import './App.css';
import './assets/css/style.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Pokemons from './components/Pokemons';
import Teams from './components/Teams';
import Types from './components/Types';
import Modal from './components/Modal';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import { Ipokemons } from './@types/pokemons';
import { Iteam } from './@types/team';

import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState<Ipokemons[]>([]);
  // const [team, setTeam] = useState<Iteam[]>([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // on fetch l'API
        const response = await axios.get('http://localhost:3000/pokemons');

        // on recupère les pokemons
        const pokemonArray = response.data;

        // on vire le premier pke c'est le bug avec tout à null
        // pokemonArray.shift();

        // on enregistre les pokemons dans le state
        setPokemons(pokemonArray);
      } catch (e) {
        console.log('erreur');
      }
    };
    fetchPokemons();
  }, []);

  const [modalState, setModalState] = useState(false);
  function toggleModal() {
    setModalState(!modalState);
  }
  const [modalContent, setModalContent] = useState({
    content: 'pokemon',
    id: 3,
  });
  function changeModalContent(newContent: string, newId: number) {
    setModalContent({
      content: newContent,
      id: newId,
    });
  }
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Pokemons
              toggleModal={toggleModal}
              changeModalContent={changeModalContent}
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
        <Route path="/page_not_found" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate to="/page_not_found" />} />
      </Routes>

      <Footer />
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        modalContent={modalContent}
      />
    </>
  );
}

export default App;
