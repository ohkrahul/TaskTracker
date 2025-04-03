import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, setCurrentTask, toggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-gray-700">No tasks found. Add a task to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          setCurrentTask={setCurrentTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;