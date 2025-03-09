import { ref, watch } from 'vue';
import Column from '../components/column.vue';
import TaskModal from '../components/taskModal.vue';
import { columns } from '../utils/card';
import { getTasks } from '../apiCalls.ts';
const addtask = ref(false);
function toggleModal() {
    addtask.value = !addtask.value;
}
watch(() => {
    console.log("Something changed");
});
watch(() => {
    getTasks();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
    ...{ class: "" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    /** @type {[typeof Column, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Column, new Column({
        ...{ 'onClose': {} },
        key: (index),
        status: (item.status),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClose': {} },
        key: (index),
        status: (item.status),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onClose: (__VLS_ctx.toggleModal)
    };
    var __VLS_2;
}
if (__VLS_ctx.addtask) {
    /** @type {[typeof TaskModal, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(TaskModal, new TaskModal({
        ...{ 'onClose': {} },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClose': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_10;
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = {
        onClose: (__VLS_ctx.toggleModal)
    };
    var __VLS_9;
}
/** @type {__VLS_StyleScopedClasses['']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Column: Column,
            TaskModal: TaskModal,
            columns: columns,
            addtask: addtask,
            toggleModal: toggleModal,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
