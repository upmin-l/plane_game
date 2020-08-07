import { createRenderer } from "@vue/runtime-core";

const render = createRenderer({})

export function createApp(root) {
    return render.createApp(root)
}