import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTask from './components/EditTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const addTask = (taskName) => {
    const newTask = { name: taskName };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingTaskIndex(index);
  };

  const saveTask = (index, editedTaskName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = editedTaskName;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
  };

  const cancelEdit = () => {
    setEditingTaskIndex(null);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
      {editingTaskIndex !== null && (
        <EditTask
          taskIndex={editingTaskIndex}
          task={tasks[editingTaskIndex]}
          onSaveTask={saveTask}
          onCancel={cancelEdit}
        />
      )}
    </div>
  );
}

export default App;
