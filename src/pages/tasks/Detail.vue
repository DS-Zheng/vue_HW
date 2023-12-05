<script setup>
import { getTask } from "@/auo-lib/storage"
import { useRoute } from "vue-router"
import { onBeforeMount, reactive } from "vue"

let task = reactive({})

const route = useRoute()
onBeforeMount(() => {
  const { params } = route
  task = getTask(params.auo)
})
</script>

<template>
  <h1 class="text-3xl">{{ task.title }}</h1>
</template>
