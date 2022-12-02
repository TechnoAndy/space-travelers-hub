import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MissionProfiler from './MissionProfiler';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocks) => rocks.active);

  return (
    <div className="profile">
      <div className="rockets">
        <h1 className="head-text">My Rockets</h1>
        {reservedRockets.length === 0 ? (
          <div className="noReservations">
            <p>No Reservations Made</p>
            <Link className="reserveRocketsLink" to="/">Make Reservations</Link>
          </div>
        ) : (
          <div className="activeRockets">
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <MissionProfiler />
    </div>
  );
};

/* import MyProfile from './MissionProfiler';

const Profile = () => (
  <div className="container">
    <MyProfile />
  </div>
); */

export default Profile;
