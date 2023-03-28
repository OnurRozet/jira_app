import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

export default function TaskShow({ task, onDelete, onUpdate }) {
  const [editForm, setEditForm] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setEditForm(!editForm);
  };

  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setEditForm(false);
    onUpdate(id, updatedTitle, updatedDesc);
  };
  return (
    <div className="task-show">
      {editForm ? (
        <TaskCreate task={task} taskEditForm={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.desc}</p>
          <div>
            <button className="taskDelete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="taskEdit" onClick={handleEditClick}>
              Düzenle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
