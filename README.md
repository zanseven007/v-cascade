# vue-cascade
a lovely component of cascade selector with vue.js

### Introduction

[Demo-待补充](http://dxy.dog)

Screenshot

待补充

## Install

```
$ npm install v-cas --save
```

## Usage

```HTML
<v-cas
  v-model="locationModal"
  :data="location"
  :title="['省份','城市','区县']"
  addClass="cascade-location"
  @success="locationSuccess"
  @cancel="cancel"
>
```

```JS
// ES6
import Cas from 'v-cas'

Vue.use(Cas)
```

## Contribute

Feel free to [open an issue](https://github.com/zanseven007/vue-cascade/issues) if you find a bug.

Feature requests and PRs are welcome.

## LICENSE

MIT Licensed. See [LICENSE](https://github.com/zanseven007/vue-cascade/blob/master/LICENSE).
