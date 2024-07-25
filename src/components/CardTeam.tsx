interface Iteam {
  team: {
    id: number;
    name: string;
    description: string;
    pokemons: number[];
  };
  toggleModal: () => void;
  changeModalContent: (content: string, id: number) => void;
}
export default function CardTeam({
  team,
  toggleModal,
  changeModalContent,
}: Iteam) {
  return (
    <button
      className="card l3 m4 s12"
      type="button"
      onClick={() => {
        toggleModal();
        changeModalContent('team', team.id);
      }}
    >
      <h3>{team.name}</h3>
      <p>{team.description}</p>
      <p>
        <strong>{team.pokemons.length}</strong> pokemons
      </p>
    </button>
  );
}
