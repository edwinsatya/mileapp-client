"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var props = defineProps();
var emit = defineEmits(['submit']);
var form = (0, vue_1.reactive)(Object.fromEntries(props.fields.map(function (f) { return [f.name, '']; })));
function onSubmit() {
    emit('submit', __assign({}, form));
}
function getAutocomplete(name) {
    if (name === 'password')
        return 'current-password';
    return name;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)(__assign({ onSubmit: (__VLS_ctx.onSubmit) }));
// @ts-ignore
[onSubmit,];
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.fields)); _i < _a.length; _i++) {
    var field = _a[_i][0];
    // @ts-ignore
    [fields,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ key: (field.name) }, { class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ for: (field.name) }, { class: "block text-gray-700 mb-2" }));
    (field.label);
    __VLS_asFunctionalElement(__VLS_elements.input)(__assign(__assign({ id: (field.name), type: (field.type), placeholder: (field.placeholder), autocomplete: (__VLS_ctx.getAutocomplete(field.name)) }, { class: "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" }), { required: true }));
    (__VLS_ctx.form[field.name]);
    // @ts-ignore
    [getAutocomplete, form,];
}
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ type: "submit" }, { class: "w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" }));
(__VLS_ctx.buttonText);
// @ts-ignore
[buttonText,];
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    emits: {},
    __typeProps: {},
});
exports.default = {};
