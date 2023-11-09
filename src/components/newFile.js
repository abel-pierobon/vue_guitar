export default (() => {
const __VLS_setup = async () => {
const props = defineProps({
guitarra: {
type: Object,
required: true
}
});

defineEmits(['agregar-carrito']);
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
$props: (await import('./__VLS_types.js')).makeOptional(defineProps({
guitarra: {
type: Object,
required: true
}
})),
$emit: defineEmits(['agregar-carrito']),
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'guitarra';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-6 col-lg-4 my-4 row align-items-center"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-4"), };
{
({} as JSX.IntrinsicElements).img;
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("img-fluid"), src: (('/img/' + __VLS_ctx.guitarra.imagen + '.jpg')), alt: (('imagen guitarra' + __VLS_ctx.guitarra.nombre)), };
// @ts-ignore
[guitarra, guitarra,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-8"), };
{
({} as JSX.IntrinsicElements).h3;
({} as JSX.IntrinsicElements).h3;
(__VLS_x as JSX.IntrinsicElements)['h3'] = { class: ("text-black fs-4 fw-bold text-uppercase"), };
(__VLS_ctx.guitarra.nombre);
// @ts-ignore
[guitarra,];
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
(__VLS_ctx.guitarra.descripcion);
// @ts-ignore
[guitarra,];
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("fw-black text-primary fs-3"), };
(__VLS_ctx.guitarra.precio);
// @ts-ignore
[guitarra,];
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("button"), class: ("btn btn-dark w-100 "), };
type __VLS_0 = JSX.IntrinsicElements['button'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_0['onClick']> = {
click: $event => {
__VLS_ctx.$emit('agregar-carrito', __VLS_ctx.guitarra);
}
};
// @ts-ignore
[$emit, guitarra,];
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
...props,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
