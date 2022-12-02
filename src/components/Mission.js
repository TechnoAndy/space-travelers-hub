import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionTab from '../redux/missions/MissionTab';

const Mission = () => {
  const { missions, status } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === null) {
      dispatch(fetchMissions);
    }
  }, [status, dispatch]);

  return (
    <div className="container">
      {status === 'pending' && <p className="loading">Loading...</p>}
      {status === 'rejected' && <p className="notRight">Ouch! Something is not right. Try again later.</p>}
      {status === 'success' && <MissionTab missions={missions} />}
    </div>
  );
};

export default Mission;
