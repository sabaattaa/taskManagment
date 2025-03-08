<script setup>
import { ref } from 'vue';
import { menueTack,  sampleText, wordsLimit, topbr, dotsValue } from '../utils/card';
 const openCardManu = ref(false)
 const openManu=(index)=>{
    console.log("im clicking",openCardManu.value,index)

    if(index===3|| index===10){
        openCardManu.value=!openCardManu.value;
        console.log("im clicking",openCardManu.value)
    }
}
</script>

<template>
    <div class="main " style="margin-top: 25px;">
        <div v-if="openCardManu" style="display: flex;flex-direction: column; position: absolute; right: 10px; top: 35px;background-color: white; padding: 7px; border-radius: 10px;width: 110px; 
            transition: height 3s ease-in-out; box-shadow: 0px 1px 10px #d3d3d3;
            ">
            <span v-for="(item, index) in dotsValue" class="menu" style=" border-bottom: 1px solid rgb(233 233 233); padding:7px; font-size: 13px;
               " @click="() => {
                openManu(10), menueTack(item)
            }">{{ item }}</span>
        </div>
        <div
            style="display: flex; gap:5px; justify-content: space-between; padding: 0px; color: var(--p-text);font-weight: 600;">
            <span v-for="(item, index) in topbr" class="redx" :style="{ cursor: index === 3 ? 'pointer' : 'default' }"
                @click="openManu(index)">{{ item }}</span>
        </div>
        <hr />
        <h2 style="margin: 0px;">Software development</h2>
        <!-- max limit 302 -->
        <h5 style="margin: 7px; font-weight: 500;">
            {{ wordsLimit(sampleText, 265) }}
        </h5>
        <img src="../assets/card.png" height="50" width="50" style="border-radius: 999px; 
            margin-bottom: 16px;
            position: absolute;
            bottom: -8px; 
            left: 12px; 
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);object-fit: contain;
            background-color: white;" />
    </div>
</template>
<style>
.main {
    position: relative;
    height: 215px;
    width: 350px;
    /* background-image: url("../assets/card.png"); */
    background-color: #f5f3f5;
    padding: 13px;
    border-radius: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-shadow: 0px 2px 5px var(--p-text);
}

.main:hover {
    box-shadow: 0px 4px 6px rgb(109, 107, 107);
    transform: scale(1.01)
}

.menu:hover {
    background-color: #f5f3f5;
    cursor: pointer;
    color: var(--p-text);

}
</style>