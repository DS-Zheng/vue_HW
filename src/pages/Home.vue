<script setup>
import { v4 as uuid } from "uuid"
import { getTasks, saveTasks } from "@/auo-lib/storage"
import { reactive, onBeforeMount } from "vue"
import Header from "@/components/infomation/Header.vue"
import TaskItem from "@/components/tasks/Item.vue"
import AddTaskForm from "@/components/forms/AddTask.vue"

const title = "Bruce 的 TODO LIST"
const tasks = reactive([])

const removeTask = (id) => {
  if (id) {
    const taskIndex = tasks.findIndex((task) => task.id == id)

    if (taskIndex >= 0) {
      tasks.splice(taskIndex, 1)
      saveTasks(tasks)
    }
  }
}

const addTask = (taskName) => {
  if (taskName != "") {
    const task = {
      id: uuid(),
      title: taskName,
      taskstatus: false,
    }

    tasks.unshift(task)

    // save
    saveTasks(tasks)
  }
}

onBeforeMount(() => {
  const data = getTasks()
  if (data) {
    tasks.push(...data)
  }
})
</script>

<template>
  <h1 class="title">{{ title }}</h1>

  <AddTaskForm @add-task="addTask" />

  <div class="divider"></div>
  <div>
    <Header :tasks="tasks" />
    <ul>
      <TaskItem @remove-task="removeTask" v-for="task in tasks" :task="task" />
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
