<script setup>
import { ref, defineEmits } from "vue"

const taskName = ref("")

const emits = defineEmits(["add-task"])

const addTask = () => {
  emits("add-task", taskName.value)
  taskName.value = ""
}
</script>

<template>
  <div class="flex items-center gap-2 mt-4">
    <input
      v-model.trim="taskName"
      @keydown.enter="addTask"
      type="text"
      class="w-full input input-bordered"
    />
    <button @click="addTask" class="btn btn-primary">新增</button>
  </div>
</template>
