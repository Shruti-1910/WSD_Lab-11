import React, { useState } from 'react';

const EditTaskForm = ({ task, onSubmit }) => {
  const [name, setName] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditTaskForm;
