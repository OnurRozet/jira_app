import React from "react";
import { useState } from "react";

export default function TaskCreate({ onCreate, task, taskEditForm, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [desc, setDesc] = useState(task ? task.desc : "");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskEditForm) {
      onUpdate(task.id, title, desc);
    } else {
      onCreate(title, desc);
    }
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      {taskEditForm ? (
        <div className="task-edit">
          {" "}
          <h3>Lütfen Task Düzenleyiniz ! </h3>
          <form className="task-form">
            <label className="label-title">Başlık Düzenleyiniz !</label>
            <input
              className="task-text"
              value={title}
              type="text"
              onChange={handleTitle}
            />
            <label>Task Düzenleyiniz !</label>
            <textarea
              className="text-input"
              value={desc}
              rows="3"
              onChange={handleDesc}
            ></textarea>
            <button className="taskEditButton" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          {" "}
          <h2>Lütfen Task Ekleyiniz ! </h2>
          <form className="task-form">
            <label className="label-title">Başlık Giriniz !</label>
            <input
              className="task-text"
              value={title}
              type="text"
              onChange={handleTitle}
            />
            <label>Task Giriniz !</label>
            <textarea
              className="text-input"
              value={desc}
              rows="3"
              onChange={handleDesc}
            ></textarea>
            <button className="taskButton" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
