export default {
    props: ['name'],
    data() {
        return {
            isDropdown: true,
            open: false,
            lastHeight: 0,
            children: []
        }
    },
    created() {
        window.addEventListener('resize', this.resize)
    },
    mounted() {
        this.lastHeight = this.$el.scrollHeight
        this.$nextTick(() => this.children = this.$children.map(child => child.$el.scrollHeight))        
    },
    computed: {
        childrenHeight() {
            return this.children.reduce((a, b) => a + b)
        },
        containerHeight() {
            return this.childrenHeight + this.lastHeight
        },
        styleHeight() {
            return this.open ? { height: `${this.childrenHeight}px` } : {}
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
            this.$emit('height')
            if(this.hasOwnProperty('name') && this.name === "parent") this.$children.forEach(recussiveClose)
        },
        update() {
            this.$nextTick(() => {
                this.children = []
                this.$children.forEach(child => {
                    if(child.open) this.children.push(child.containerHeight)
                    else this.children.push(child.lastHeight)
                })
            })
        },
        resize() {
            setTimeout(() => {
            this.$nextTick(() => {
                if(!this.open) this.lastHeight = this.$el.scrollHeight            
                this.children = this.$children.map(child => child.$el.scrollHeight)
            })
            }, 300)
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resize)
    }
}
function recussiveClose(child) {
    if(child.isDropdown) {
        if(child.open) child.toggle()
        child.$children.forEach(recussiveClose)
    }
}