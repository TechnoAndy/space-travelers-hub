import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission, missionSpace } from '../redux/missions/missions';
import './missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMission());
  }, [loading, dispatch]);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  const jetclick = (id) => {
    dispatch(missionSpace(id));
  };

  return (
    <table className="missions-tab" id="tab">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({
          id, name, description, mission,
        }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              {mission ? <p className="non_member active">Active Member</p> : <p className="non_member">Not A Member</p>}
            </td>
            <td>
              {mission
                ? (
                  <button
                    onClick={() => {
                      jetclick(id);
                    }}
                    type="button"
                    className="join leave"
                  >
                    Leave Mission
                  </button>
                )
                : (
                  <button
                    onClick={() => {
                      jetclick(id);
                    }}
                    type="button"
                    className="join"
                  >
                    Join Mission
                  </button>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Mission;
