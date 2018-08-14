// nb. v-directive="binding"
export default {
    bind(el, binding, node) {
        console.log("BIND")
        console.dir(el.offsetHeight)
        el.addEventListener('load', () => {
            console.log("LOAD")
        })
    },
    unbind(el, binding) {

    }
}