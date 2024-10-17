import React from 'react';

const TeamList = ({ team, onRemove, averageAge, onSort }) => {
  return (
    <div className="list-container">
      <h2>TEAM</h2>
      <button onClick={onSort} className="sort-btn">Sort by Age</button>
      <ul>
        {team.map((member) => (
          <li key={member.id} className="team-member">
            <span>{member.first_name}</span>
            <span>{member.age}</span>
            <button onClick={() => onRemove(member)} className="remove-btn">
              REMOVE
            </button>
          </li>
        ))}
      </ul>
      <div className="average-age">
        <strong>Average Age</strong>
        <p>{averageAge.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default TeamList;
