import template from '../../templates/child.html'
import styles from './computed-styles'
import Dropdown from '../../mixins/dropdown'
import innerChild from '../inner-child/component'
export default {
    name: "child",
    template,
    extends: Dropdown,
    props: ['name'],
    components: { innerChild },
    data() {
        return {}
    },
    computed: {
        ...styles
    }
}
