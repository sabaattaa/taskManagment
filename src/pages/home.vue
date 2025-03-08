<script setup>
import { ref, watch } from 'vue';
import Column from '../components/column.vue';
import TaskModal from '../components/taskModal.vue';
import { columns } from '../utils/card';
import { getTasks } from '../apiCalls.ts';

const addtask = ref(false)


function toggleModal() {
  addtask.value = !addtask.value;
}

watch(() => {
   console.log("Something changed");
});

watch(()=>{
  getTasks();
  
})



</script>

<template>
  <div style="display: flex; justify-content: space-around; width: 100%;" class="">
    <Column v-for="(item, index) in columns" :key="index" :status="item.status" @close="toggleModal" />
  </div>
  <TaskModal v-if="addtask" @close="toggleModal" />
</template>

<style></style>