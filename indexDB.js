import { openDB } from "idb";

const dbPromise = openDB("TodoDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("tasks")) {
      db.createObjectStore("tasks", {
        keyPath: "id",
      });
    }
  },
});

// CREATE
export async function createTask(taskData) {
  const db = await dbPromise;

  await db.add("tasks", taskData);
}

// READ
export async function loadTasks() {
  const db = await dbPromise;

  return await db.getAll("tasks");
}

// DELETE
export async function deleteTask(id) {
  const db = await dbPromise;

  await db.delete("tasks", id);
}

// UPDATE
export async function updateTask(taskData) {
  const db = await dbPromise;

  await db.put("tasks", taskData);
}