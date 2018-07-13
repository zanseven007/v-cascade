# v-cascade
[![npm](https://img.shields.io/npm/v/v-cascade.svg?style=flat-square)](https://www.npmjs.com/package/v-cascade)
[![npm](https://img.shields.io/npm/dt/v-cascade.svg?style=flat-square)](https://www.npmjs.com/package/v-cascade)
[![npm](https://img.shields.io/npm/l/v-cascade.svg?style=flat-square)](https://github.com/zanseven007/v-cascade/blob/master/LICENSE)

一个可爱的级联选择器(跨平台：PC，Mobile) [Eng docs](https://github.com/zanseven007/v-cascade)

### 介绍

[例子](https://zanseven007.github.io/v-cascade/)

### 组件截图

#### 地区选择
![Screenshot-basic](http://images.zanyuyu.com/v-cascade-screenshot-1.gif)

#### 远程搜索
![Screenshot-remote](http://images.zanyuyu.com/v-cascade-screenshot-2.gif)


## 安装

```
// npm
$ npm install v-cascade --save

// or

// cdn
<script src="https://unpkg.com/v-cascade/lib/v-cascade.min.js"></script>
```

## 使用

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


| 字段名 | 类型 | 默认值 | 描述 |
| ---- | ---- | ------- | ----------- |
| v-model| Boolean | false | 控制组件显示和隐藏 |
| data | Array | [] | 组件的数据字段，必须使用固定的 json 格式，如{'key':key,'label','children':[]}, `children` 是一个可选择的 key 值|
| title | Array | [] | 组件顶部显示的标题 |
| addClass | String | '' | 为组件添加一个额外的 class |
| filterable | Boolean | false | 是否开启组件本地搜索 |
| remote | Boolean | false | 是否开启组件的远程搜索，如果开启此项，那么需要额外添加一个 `remoteMethod` 方法来获取远程的数据 |
| remoteMethod | Function | none | 获取远程数据并且获取的数据也需要遵从 `data` 的格式规范(详情看 `data` 属性的描述，或看远程搜索的例子代码) |
| loading | Boolean | false | 显示和隐藏 loading 图标 |
| scrollable | Boolean | false | 背景页面是否可以滚动 |
| placeholder | String | Please enter... | 指定没有搜索框的默认值 |
| noFoundStr | String | Nothing found, click Button to use custom content | 指定没有搜索返回结果为空时的文案 |
| spLevel | Number | 9999 | 指定最多选择的层级数 |

### Events

| Name | Description  | return |
| ---- | ------------ | ------ |
| success | 成功选择后的回调函数  | 选择数据的json |
| cancel | 关闭组件的回调函数  | 无 |
| on-query-change | 搜索字段变化后的回调函数  | query值 |

## Todo

- [x] 过渡动画
- [ ] 多选
- [ ] 全局事件
- [ ] ...

## 贡献

Feel free to [open an issue](https://github.com/zanseven007/v-cascade/issues) if you find a bug.

Feature requests and PRs are welcome.

## LICENSE

MIT Licensed. See [LICENSE](https://github.com/zanseven007/v-cascade/blob/master/LICENSE).
