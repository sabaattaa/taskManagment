<script setup>
import { ref } from 'vue';
import TaskCard from './TaskCard.vue';

defineProps({
    status: String,
})

const emit = defineEmits(['close'])

</script>
<template>
    <div style=" width: 100%;
display: flex; align-items: center; flex-direction: column;border-right: 1px solid #efe0e0; padding: 2vw;" class="">
        <h4 style="font-family: sans-serif; margin: 0px;">{{ status }}</h4>
        <TaskCard />
        <h1 style="text-align: end; width: 90%;color: gray; cursor: pointer;" title="Add Task" class=""
            @click="emit('close')">+</h1>
    </div>
</template>