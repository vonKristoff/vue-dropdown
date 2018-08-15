# vue-dropdown

Tree-node nested dropdown container that allows for animated heights.

_ruleset JS_

Extend your existing component to turn into a dropdown container 

```
import DropDown from './dropdown'
// component
extends: DropDown
```

_ruleset Vue app_

Name your root container in the template when issuing a dropdown component

```
container(name="parent")
```

_ruleset Template_

Rules for determining children

```
.my-component
  .dropdown-trigger(@click="toggle)
  .dropdown-children
    child-dropdown-component(v-for="item in collection" ":key"="item" @height="update")
```

