import React, { useEffect, useState } from "react";
import TaskModal from "../../components/TaskModal";
import { loadTasks } from "../../indexDB";

function todoapp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [createTask, setCreateTask] = useState();
  const [taskList, setTaskList] = useState([]);

  // show data------
  const getData = async () => {
    const tasks = await loadTasks();
    setTaskList(tasks);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("tasks = ", taskList);

  const handleCreatetask = () => {
    if (searchTerm.trim() === "") {
      // alert("Please enter a task");
      return;
    }
    setCreateTask(true);
    document.getElementById("todomodel").style.display = "flex";
    console.log("Task Created");
  };

  const dotColors = [
    "#C084FC",
    "#60A5FA",
    "#34D399",
    "#FBBF24",
    "#FB7185",
    "#22D3EE",
    "#A78BFA",
    "#F472B6",
  ];

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
          <TaskModal
            title={searchTerm}
            setTask={setSearchTerm}
            getData={getData}
          />
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {taskList?.map((data) => {
            return (
              <div
                key={data.id}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm cursor-pointer transition-all hover:opacity-80 text-white"
                style={{
                  backgroundColor: dotColors[data.id % dotColors.length] + "90",
                  border: `1px solid ${dotColors[data.id % dotColors.length]}40`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: dotColors[data.id % dotColors.length],
                  }}
                />
                {data.taskName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default todoapp;
