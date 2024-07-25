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
        id="underlay"
        onClick={() => {
          toggleModal();
        }}
      />
      <div id="modal" className={modalState && 'active'}>
        {modalContent.content === 'pokemon' && (
          <ModalPokemon modalContent={modalContent} toggleModal={toggleModal} />
        )}
        {modalContent.content === 'team' && (
          <ModalTeam modalContent={modalContent} toggleModal={toggleModal} />
        )}
      </div>
    </>
  );
}
