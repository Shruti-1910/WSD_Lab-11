import React, { useState } from 'react';

const EditTask = ({ taskIndex, task, onSaveTask, onCancel }) => {
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleSave = () => {
    if (editedTaskName.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }
    onSaveTask(taskIndex, editedTaskName);
  };

  return (
    <div className="edit-task">
      <h2>Edit Task</h2>
      <input
        type="text"
        value={editedTaskName}
        onChange={(e) => setEditedTaskName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTask;
