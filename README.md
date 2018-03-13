# v-cascade
[![npm](https://img.shields.io/npm/v/v-cascade.svg?style=flat-square)](https://www.npmjs.com/package/v-cascade)
[![npm](https://img.shields.io/npm/dt/v-cascade.svg?style=flat-square)](https://www.npmjs.com/package/v-cascade)
[![npm](https://img.shields.io/npm/l/v-cascade.svg?style=flat-square)](https://github.com/zanseven007/v-cascade/blob/master/LICENSE)

a lovely component of cascade selector with vue.js

### Introduction

[Demo](https://zanseven007.github.io/v-cascade/)

Screenshot

待补充

## Install

```
// npm
$ npm install v-cascade --save

// or

// cdn
<script src="https://unpkg.com/v-cascade/lib/v-cascade.min.js"></script>


```

## Usage

```HTML
<v-cascade
  v-model="locationModal"
  :data="location"
  :title="['省份','城市','区县']"
  addClass="cascade-location"
  @success="locationSuccess"
  @cancel="cancel"
></v-cascade>
```

```JS
// ES6
import vCascade from 'v-cascade'

Vue.use(vCascade)
```

### Props


| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| v-modal| Boolean | false | Cascade display and hide |
| data | Array | [] | Cascade list data, Must use a fixed format.{'key':key,'label','children':[]},children is a option key|
| title | Array | [] | Cascade top title |
| addClass | String | '' | Add an extra outer class to the cascade|
| filterable | Boolean | false | enable the cascade's local search,if it is true,there are a input of search in cascade  |
| remote | Boolean | false | enable the cascade's remote search,if this item is true, you need to add a `remoteMethod` to the cascade to get the remote data|
| remoteMethod | Function | none | A function to get remote data,you need format the reponse data to accepted format of the cascade (See `data` prop for details) |
| loading | Boolean | false | enable the loader display or hide |

## Todo

- [ ] Transitions
- [ ] Multiple
- [ ] Globle event
- [ ] ...

## Contribute

Feel free to [open an issue](https://github.com/zanseven007/v-cascade/issues) if you find a bug.

Feature requests and PRs are welcome.

## LICENSE

MIT Licensed. See [LICENSE](https://github.com/zanseven007/v-cascade/blob/master/LICENSE).
