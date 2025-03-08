<script setup>
import { priorities, status,onSubmit,taskData, } from '../utils/card';

const props = defineProps({
    cardType:String,
})

const emit = defineEmits(["close"])
taskData.cardType= props.cardType;

</script>

<template>
{{ cardType }}
<div style="display: flex;position: absolute; height: 95vh; width: 99%; justify-content: center;align-items: center; background-color: rgb(255 251 251 / 82%); top: 0px;" class=" ">
    <form @submit.prevent="() => { onSubmit(); }" style="display: flex; flex-direction: column; font-family: sans-serif; font-size: 13px; padding: 30px; border: 1px solid gray; background-color:white;border-radius: 10px; gap: 10px;" >    
        <label for="name">Task Name</label>
        <input id="name" style="padding: 5px; outline: none;" v-model="taskData.taskName"/>
        <label for="desc">Task Description</label>
        <textarea name="desc"  style="padding: 5px; outline: none;" v-model="taskData.taskDesc"></textarea>
        <label for="desc">Task Priority</label>
        <div style="display: flex; gap: 10px;">
            <div v-for="(item, index) in priorities" :key="index" style="display: flex; gap: 3px; align-items: center;">
                <input type="radio" v-model="taskData.taskPriority" :value="item.priority"/>
                <span>{{ item.priority }}</span>
            </div>
        </div>
        <div style="display: flex; gap: 10px;">
            <div v-for="(item, index) in status" :key="index" style="display: flex; gap: 3px; align-items: center;">
                <input type="radio" :value="item.status" v-model="taskData.taskStatus"/>
                <span>{{ item.status }}</span>
            </div>
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 3px;" class="">
            <button type="button" style="padding: 5px; outline: none; border: 1px solid gray; border-radius: 5px;" @click="emit('close')">Cancel</button>
            <button type="submit" style="padding: 5px; outline: none; border: 1px solid gray; border-radius: 5px;">Add Task</button>
        </div>
    </form>
</div>
</template>