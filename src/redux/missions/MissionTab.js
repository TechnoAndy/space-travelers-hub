/* eslint-disable react/prop-types */
import React from 'react';

const MissionTab = ({ missions }) => (
  <table>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_name}</td>
          <td>{mission.description}</td>
          <td><p>Not a member</p></td>
          <td><button type="button">Join Mission</button></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MissionTab;
