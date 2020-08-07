import { defineComponent, h } from '@vue/runtime-core';
export default defineComponent({

    render() {
        const vNode = h("div");
        console.log(vNode);
        return vNode
    }
})