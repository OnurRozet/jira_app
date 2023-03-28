import React from "react";
import TaskShow from "./TaskShow";

export default function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="taskList">
      {tasks.map((task) => {
        return (
          <TaskShow
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}
