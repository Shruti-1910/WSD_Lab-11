import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name}
            <button onClick={() => onDeleteTask(index)}>Delete</button>
            <button onClick={() => onEditTask(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
