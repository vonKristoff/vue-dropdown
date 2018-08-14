import template from '../../templates/inner-child.html'
import styles from './computed-styles'
import Dropdown from '../../mixins/dropdown'
export default {
    name: "inner-child",
    template,
    data() {
        return {
            paragraphs: Math.ceil(Math.random()*5)
        }
    }
}
