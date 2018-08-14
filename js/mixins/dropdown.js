export default {
    data() {
        return {
            isDropdown: true,
            open: false,
            closed: 0,
            children: []
        }
    },
    mounted() {
        this.closed = this.$el.scrollHeight
        this.$nextTick(() => this.children = this.$children.map(child => child.$el.scrollHeight))        
    },
    computed: {
        childrenHeight() {
            return this.children.reduce((a, b) => a + b)
        },
        containerHeight() {
            return this.childrenHeight + this.closed
        },
        styleOpen() {
            return this.open ? { height: `${this.childrenHeight}px` } : {}
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
            this.$emit('height')
            if(this.name === "parent") this.$children.forEach(recussiveClose)
        },
        update() {
            this.$nextTick(() => {
                this.children = []
                this.$children.forEach(child => {
                    if(child.open) this.children.push(child.containerHeight)
                    else this.children.push(child.closed)
                })
            })
        },
        resize() {
            this.closed = this.$el.scrollHeight            
            this.children = this.$children.map(child => child.$el.scrollHeight)
        }
    }
}
function recussiveClose(child) {
    if(child.isDropdown) {
        if(child.open) child.toggle()
        child.$children.forEach(recussiveClose)
    }
}