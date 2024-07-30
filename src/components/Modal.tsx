import { IPokemon } from '../@types/pokemon';
import ModalPokemon from './ModalPokemon';
import ModalTeam from './ModalTeam';

interface Imodal {
  modalState: boolean;
  toggleModal: () => void;
  modalContent: {
    content: string;
  };
  pokemon: IPokemon;
}

export default function Modal({
  modalState,
  toggleModal,
  modalContent,
  pokemon,
}: Imodal) {
  // console.log(modalContent);
  return (
    <>
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleModal();
          }
        }}
        aria-label="Close modal"
        id="underlay"
        role="button"
        onClick={() => {
          toggleModal();
        }}
      />
      <div id="modal" className={modalState ? 'active' : ''}>
        {/* {JSON.stringify(pokemon)} */}
        {modalContent.content === 'pokemon' && pokemon && (
          <ModalPokemon
            pokemon={pokemon}
            toggleModal={toggleModal}
            modalState={modalState}
          />
        )}
        {/* {modalContent.content === 'team' &&
          <ModalTeam modalContent={modalContent} toggleModal={toggleModal} />
          } */}
      </div>
    </>
  );
}
