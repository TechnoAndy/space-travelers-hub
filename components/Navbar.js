import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  <header>
    <nav>
      <ul className="NavLinks">
        <li>
          <NavLink>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink>
            My Profile
          </NavLink>
        </li>
      </ul>

    </nav>
  </header>;
};

export default Navbar;
