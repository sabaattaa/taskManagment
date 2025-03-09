import { ref } from 'vue';
import TaskCard from './TaskCard.vue';
const __VLS_props = defineProps({
    status: String,
});
const emit = defineEmits(['close']);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
    ...{ class: "" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
    ...{ style: {} },
});
(__VLS_ctx.status);
/** @type {[typeof TaskCard, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TaskCard, new TaskCard({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('close');
        } },
    ...{ style: {} },
    title: "Add Task",
    ...{ class: "" },
});
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: emit,
            TaskCard: TaskCard,
            emit: emit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: emit,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
