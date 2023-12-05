<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: [],
  },
})

const taskCount = computed(() => {
  return props.tasks.filter((task) => !task.taskstatus &&task.title.length > 2).length
})
</script>

<template>
  <h2 class="text-2xl" v-if="tasks.length == 0">目前無任何待辦事項</h2>
  <h2 class="text-2xl" v-else>目前共有 {{ taskCount }} 項事項</h2>
</template>
