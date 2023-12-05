const STORAGE_NAME = "todo-list"

const getTasks = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(tasks))
}

const getTask = (id) => {
  const tasks = getTasks()
  return tasks.find((task) => task.id == id)
}

export { getTasks, saveTasks, getTask }
