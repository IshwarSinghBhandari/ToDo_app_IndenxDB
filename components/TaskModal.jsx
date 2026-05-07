import { X } from "lucide-react";
import React, { useState } from "react";
import { createTask } from "../indexDB";

function TaskModal({ title, setTask, getData }) {
  const [description, setDescription] = useState("");

  async function handleCreateTask() {
    const taskData = {
      id: Date.now(),
      taskName: title,
      taskDescription: description,
      time: Date.now(),
    };

    await createTask(taskData);

    await getData();
    
    document.getElementById("todomodel").style.display = "none";
  }

  function onClose() {
    document.getElementById("todomodel").style.display = "none";
  }

  return (
    <div
      id="todomodel"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 "
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3">
          <h3 className="text-xl font-semibold text-gray-800">
            Create New Task
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X size={30} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="space-y-5">
            {/* Input Group */}
            <div>
              <input
                type="text"
                placeholder="Task Name..."
                value={title}
                onChange={(e) => setTask(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-black"
              />
            </div>

            {/* Textarea Group */}
            <div>
              <textarea
                placeholder="What needs to be done?"
                rows="5"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all  resize-none text-black"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateTask}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-95"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
