import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, booksRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === null) {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const ManageBookings = (id) => {
    dispatch(booksRockets(id));
  };

  let content;
  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'rejected') {
    content = <p>Sorry, something seems to be wrong</p>;
  } else if (status === 'success') {
    content = <p />;
  }

  return (
    <div>
      {content}
      <div className="rocket-data">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket-Card">
            <img src={rocket.flickr_images[0]} alt="" />
            <div className="rocket-Content">
              <h3 className="rocket-Name">{rocket.rocket_name}</h3>
              <div className="rocket-Description">
                <p>
                  {rocket.active && <span className="status">Reserved</span>}
                  {rocket.description}
                </p>
              </div>
              <button className={rocket.active ? 'cancel' : 'reserve'} id={rocket.id} type="submit" onClick={() => ManageBookings(rocket.id)}>
                {rocket.active ? 'Cancel Reservations' : 'Reserve Rockets'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
