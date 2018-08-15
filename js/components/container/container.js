import template from '../../templates/container.html'
import styles from './computed-styles'
import Dropdown from '../../mixins/dropdown'
import Child from '../child/child'
export default {
    name: "container",
    template,
    extends: Dropdown,
    components: { Child },
    data() {
        return {
            list: [1,2,3,4]
        }
    }
}
