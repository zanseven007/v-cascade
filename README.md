# v-cascade
[![npm](https://img.shields.io/npm/v/v-cascade.svg?style=flat-square)](https://www.npmjs.com/package/v-cascade)
[![npm](https://img.shields.io/npm/dt/v-cascade.svg?style=flat-square)](https://www.npmjs.com/package/v-cascade)
[![npm](https://img.shields.io/npm/l/v-cascade.svg?style=flat-square)](https://github.com/zanseven007/v-cascade/blob/master/LICENSE)

A lovely component of cascade selector with vue.js (Support both of PC and Mobile) [中文文档](https://github.com/zanseven007/v-cascade/blob/master/READMME-CN.md)

### Introduction

[Demo](https://zanseven007.github.io/v-cascade/)

### Screenshot

#### basic-selector
![Screenshot-basic](http://images.zanyuyu.com/v-cascade-screenshot-1.gif)

#### remote-selector
![Screenshot-remote](http://images.zanyuyu.com/v-cascade-screenshot-2.gif)

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
| v-model| Boolean | false | Cascade display and hide |
| data | Array | [] | Cascade list data, Must use a fixed format.{'key':key,'label','children':[]},`children` is a option key|
| title | Array | [] | Cascade top title |
| addClass | String | '' | Add an extra outer class to the cascade|
| filterable | Boolean | false | enable the cascade's local search,if it is true,there are a input of search in cascade  |
| remote | Boolean | false | enable the cascade's remote search,if this item is true, you need to add a `remoteMethod` to the cascade to get the remote data|
| remoteMethod | Function | none | A function to get remote data,you need format the reponse data to accepted format of the cascade (See `data` prop for details) |
| loading | Boolean | false | enable the loader display or hide |
| scrollable | Boolean | false | whether the document page can be scrolled |
| placeholder | String | Please enter... | default placeholder for the search box |
| noFoundStr | String | Nothing found, click Button to use custom content | No search returns a copy when the result is empty |
| spLevel | Number | 9999 | Maximum number of levels selected |

### Events

| Name | Description  | return |
| ---- | ------------ | ------ |
| success | Callback function after successful cascade selection  | Json of Selected value |
| cancel | Callback function after cancel cascade selection  | none |
| on-query-change | Callback function after search query changed  | query value |

## Todo

- [x] Transitions, Animations
- [ ] Multiple
- [ ] Globle event
- [ ] ...

## Contribute

Feel free to [open an issue](https://github.com/zanseven007/v-cascade/issues) if you find a bug.

Feature requests and PRs are welcome.

## LICENSE

MIT Licensed. See [LICENSE](https://github.com/zanseven007/v-cascade/blob/master/LICENSE).
