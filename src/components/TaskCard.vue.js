import { ref } from 'vue';
import { menueTack, sampleText, wordsLimit, topbr, dotsValue } from '../utils/card';
const openCardManu = ref(false);
const openManu = (index) => {
    console.log("im clicking", openCardManu.value, index);
    if (index === 3 || index === 10) {
        openCardManu.value = !openCardManu.value;
        console.log("im clicking", openCardManu.value);
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "main " },
    ...{ style: {} },
});
if (__VLS_ctx.openCardManu) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: {} },
    });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.dotsValue))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ onClick: (() => {
                    __VLS_ctx.openManu(10), __VLS_ctx.menueTack(item);
                }) },
            ...{ class: "menu" },
            ...{ style: {} },
        });
        (item);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.topbr))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.openManu(index);
            } },
        ...{ class: "redx" },
        ...{ style: ({ cursor: index === 3 ? 'pointer' : 'default' }) },
    });
    (item);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({
    ...{ style: {} },
});
(__VLS_ctx.wordsLimit(__VLS_ctx.sampleText, 265));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/card.png",
    height: "50",
    width: "50",
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['redx']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            menueTack: menueTack,
            sampleText: sampleText,
            wordsLimit: wordsLimit,
            topbr: topbr,
            dotsValue: dotsValue,
            openCardManu: openCardManu,
            openManu: openManu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
