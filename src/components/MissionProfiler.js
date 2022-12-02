import { useSelector } from 'react-redux';
import './missions.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const tourists = missions.filter((visit) => visit.mission);
  return (
    <div>
      <h1 className="head-text">My Missions</h1>
      <table className="tour_list">
        <tbody className="tour_body">
          {tourists.map(({ id, name }) => (
            <tr className="tour" key={id}>{name}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyProfile;
