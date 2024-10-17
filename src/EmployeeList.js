import React from 'react';

const EmployeeList = ({ employees, onAdd }) => {
  return (
    <div className="list-container">
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            className={employee.added ? 'employee added' : 'employee'}
          >
            <span>{employee.first_name}</span>
            <span>{employee.age}</span>
            {!employee.added && (
              <button onClick={() => onAdd(employee)} className="add-btn">
                ADD
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
