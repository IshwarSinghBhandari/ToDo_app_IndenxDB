import React, { useEffect, useState } from "react";
import TaskModal from "../../components/TaskModal";

function todoapp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [createTask, setCreateTask] = useState();
  const [taskList,setTaskList] = useState([])

useEffect(()=>{
    const request = indexedDB.open("TodoDB", 1);

  request.onsuccess = (e) => {
    const db = e.target.result;

    // readonly transaction
    const tx = db.transaction("tasks", "readonly");
    // store access
    const store = tx.objectStore("tasks");
    // sara data lena
    const data = store.getAll();
    data.onsuccess = () => {
     setTaskList(data.result);
    };
  };
},[])
console.log("tasks = ", taskList)

  const handleCreatetask = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a task");
      return;
    }
    setCreateTask(true);
    document.getElementById("todomodel").style.display = "flex";
    console.log("Task Created");
  };

  return (
    <div className="min-h-[80vh]  flex flex-col items-center justify-center p-6">
      <div className="w-[40%] text-center border-2 p-6 rounded-lg ">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <input
                type="search"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-400"
                placeholder=" Tasks name...."
                required
              />
            </div>

            <button
              onClick={handleCreatetask}
              className="whitespace-nowrap cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all"
            >
              Create Task
            </button>
          </div>
        </div>
        {createTask && (
          // <diiv className='w-full mt-6 border-t-2 pt-4 flex justify-between'>
          //     <p>{searchTerm}</p>
          //     <p>delete</p>
          // </diiv>\
          <TaskModal title={searchTerm} setTask={setSearchTerm} />
        )}
      </div>
    </div>
  );
}

export default todoapp;
