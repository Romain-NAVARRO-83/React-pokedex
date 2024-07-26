import { useState } from 'react';
import './App.css';
import './assets/css/style.css';
import { Navigate, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import Header from './components/Header';
import Pokemons from './components/Pokemons';
import Teams from './components/Teams';
import Types from './components/Types';
import Modal from './components/Modal';
import Footer from './components/Footer';
// import { IPokemons } from './@types/pokemons';
// import { Iteam } from './@types/team';

function App() {
  // const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  // const [team, setTeam] = useState<Iteam[]>([]);
  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/pokemons');
  //       if (response.data) {
  //         setPokemons(response.data);
  //       }
  //     } catch (e) {
  //       console.log('Error fetching pokemons:', e);
  //     }
  //   };
  //   fetchPokemons();
  // }, []);

  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({
    content: 'pokemon',
    id: 3,
  });

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const changeModalContent = (newContent: string, newId: number) => {
    setModalContent({
      content: newContent,
      id: newId,
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
      />
    </>
  );
}

export default App;
