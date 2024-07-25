import teams from '../assets/data/teams.json';
import CardTeam from './CardTeam';
interface Iteams {
  toggleModal: () => void;
  changeModalContent: (content: string, id: number) => void;
}
export default function Teams({ toggleModal, changeModalContent }: Iteams) {
  return (
    <main>
      <h2>Teams</h2>
      <div className="flexmaster gap">
        {teams.map((team) => (
          <CardTeam
            team={team}
            key={team.id}
            toggleModal={toggleModal}
            changeModalContent={changeModalContent}
          />
        ))}
      </div>
    </main>
  );
}
