import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import TeamList from './TeamList';
import './App.css'; 

const employeesData = [
  { id: 1, first_name: 'Abhishek', age: 24, added: false },
  { id: 2, first_name: 'Ankit', age: 25, added: false },
  { id: 3, first_name: 'Anurag', age: 21, added: false },
  { id: 4, first_name: 'Dhiraj', age: 25, added: false },
  { id: 5, first_name: 'Monica', age: 22, added: false },
  { id: 6, first_name: 'Ankush', age: 24, added: false }
];

const App = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [team, setTeam] = useState([]);

  const handleAdd = (employee) => {
    setTeam([...team, employee]);
    setEmployees(
      employees.map((emp) =>
        emp.id === employee.id ? { ...emp, added: true } : emp
      )
    );
  };

  const handleRemove = (employee) => {
    setTeam(team.filter((member) => member.id !== employee.id));
    setEmployees(
      employees.map((emp) =>
        emp.id === employee.id ? { ...emp, added: false } : emp
      )
    );
  };

  const handleSort = () => {
    const sortedTeam = [...team].sort((a, b) => a.age - b.age);
    setTeam(sortedTeam);
  };

  const averageAge = team.length
    ? team.reduce((sum, member) => sum + member.age, 0) / team.length
    : 0;

  return (
    <div className="app">
      <EmployeeList employees={employees} onAdd={handleAdd} />
      <TeamList team={team} onRemove={handleRemove} averageAge={averageAge} onSort={handleSort} />
    </div>
  );
};

export default App;
