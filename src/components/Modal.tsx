import ModalPokemon from './ModalPokemon';
import ModalTeam from './ModalTeam';

interface Imodal {
  modalState: boolean;
  toggleModal: () => void;
  modalContent: {
    content: string;
    id: number;
  };
}

export default function Modal({
  modalState,
  toggleModal,
  modalContent,
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
        {modalContent.content === 'pokemon' && (
          <ModalPokemon modalContent={modalContent} />
        )}
        {modalContent.content === 'team' && (
          <ModalTeam modalContent={modalContent} toggleModal={toggleModal} />
        )}
      </div>
    </>
  );
}
