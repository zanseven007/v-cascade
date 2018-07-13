<template>
  <div class="app">
    <h1>V-cascade</h1>
    <h3>🍭 Wow, such a beautiful cascade selector. view on <a href="https://github.com/zanseven007/v-cascade">Github</a></h3>
    <h4>
      <a href="https://www.npmjs.com/package/v-cascade">
        <img src="https://img.shields.io/npm/v/v-cascade.svg?style=flat-square" alt="flat-square">
      </a>
      <a href="https://www.npmjs.com/package/v-cascade">
        <img src="https://img.shields.io/npm/dt/v-cascade.svg?style=flat-square" alt="flat-square">
      </a>
      <a href="https://github.com/zanseven007/v-cascade/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/v-cascade.svg?style=flat-square" alt="flat-square">
      </a>
    </h4>
    <div class="example example-1">
      <input class="select select-location" v-model="locationValue" type="text" name="location" id="location" placeholder="地区选择器" @click.stop="open('locationModal',$event)">
      <pre v-highlightjs>
        <code class="vue">
    // html
    &lt;v-cascade
      v-model="locationModal"
      :data="location"
      :title="['省份','城市','区县']"
      addClass="cascade-location"
      @success="locationSuccess"
      @cancel="cancel"
    &gt;
    &lt;/v-cascade&gt;

    // js
    import
    { locationData }
    from './data/location'
    data () {
      return {
        location: locationData, // 地区数据
        locationModal: false // 地区选择器
      }
    }
    methods: {
      locationSuccess (data) {
        console.log(data)
        // data: {
        //  path: ['510000',510300],
        //  pathName: ['四川省','自贡市']
        // }
      },
      cancel () {
        console.log('cancel')
      }
    }
      </code>
      </pre>
      <v-cascade
        v-model="locationModal"
        :data="location"
        :title="['省份','城市','区县']"
        addClass="cascade-location"
        @success="locationSuccess"
        @cancel="cancel"
      >
      </v-cascade>
    </div>
    <div class="example example-2">
      <input class="select select-job" v-model="jobValue" type="text" name="job" id="job" placeholder="职称选择器" @click.stop="open('jobModal',$event)">
      <pre v-highlightjs>
          <code class="vue">
    // html
    &lt;v-cascade
      scrollable
      v-model="jobModal"
      :data="job"
      :title="['职称','职称']"
      addClass="cascade-job"
      @success="jobSuccess"
      @cancel="cancel"
    &gt;
    &lt;/v-cascade&gt;

    // js
    import
    { jobData }
    from './data/job'
    data () {
      return {
        job: jobData, // 职称数据
        jobModal: false, // 职称选择器
      }
    }
    methods: {
      jobSuccess (data) {
        console.log(data)
        // data: {
        //  path: ['17',1703],
        //  pathName: ['记者系列','记者']
        // }
      },
      cancel () {
        console.log('cancel')
      }
    }
      </code>
      </pre>
      <v-cascade
        scrollable
        v-model="jobModal"
        :data="job"
        :title="['职称','职称']"
        addClass="cascade-job"
        @success="jobSuccess"
        @cancel="cancel"
      >
      </v-cascade>
    </div>
    <div class="example example-3">
      <input class="select select-location-search" v-model="locationSearchValue" type="text" name="locationSearch" id="locationSearch" placeholder="本地搜索" @click.stop="open('locationSearchModal',$event)">
      <pre v-highlightjs>
      <code class="vue">
    // html
    &lt;v-cascade
      filterable
      v-model="locationSearchModal"
      :data="locationSearch"
      :title="['省份','城市','区县']"
      placeholder="请输入要查找的内容"
      addClass="cascade-location-search"
      @on-query-change="queryChange"
      @success="locationSearchSuccess"
      @cancel="cancel"
    &gt;
    &lt;/v-cascade&gt;

    // js
    import
    { locationData }
    from './data/location'
    data () {
      return {
        locationSearch: locationData, // 地区数据
        locationSearchModal: false, // 地区选择器
      }
    }
    methods: {
      locationSearchSuccess (data) {
        console.log(data)
        // data: {
        //  path: ['510000',510300],
        //  pathName: ['四川省','自贡市']
        // }
      },
      queryChange (val) {
        console.log(val)
        // return search input value
      }
      cancel () {
        console.log('cancel')
      }
    }
      </code>
      </pre>
      <v-cascade
        filterable
        v-model="locationSearchModal"
        :data="locationSearch"
        :title="['省份','城市','区县']"
        addClass="cascade-location-search"
        placeholder="请输入要查找的内容"
        @success="locationSearchSuccess"
        @cancel="cancel"
        @on-query-change="queryChange"
      >
      </v-cascade>
    </div>
    <div class="example example-4">
      <input class="select select-remote" v-model="remoteValue" type="text" name="Remote" id="Remote" placeholder="远程搜索" @click.stop="open('remoteModal',$event)">
      <pre v-highlightjs>
      <code class="vue">
    // html
    &lt;v-cascade
      filterable
      remote
      :data="remoteData"
      :remote-method="remoteMethod"
      :loading="remoteLoading"
      :autoFocus="false"
      v-model="remoteModal"
      noFoundStr="没有找到搜索内容，点击确认按钮使用自定义内容"
      :title="['远程搜索']"
      addClass="cascade-remote"
      @success="RemoteSuccess"
      @cancel="cancel"
    &gt;
    &lt;/v-cascade&gt;

    // js
    data () {
      return {
        remoteModal: false, // 远程选择器
        remoteLoading: false, // 远程loading
        remoteData: [
          {
            'key': 'default_data_1',
            'label': 'default_data_1'
          },
          {
            'key': 'default_data_2',
            'label': 'default_data_2'
          },
          {
            'key': 'default_data_3',
            'label': 'default_data_3'
          },
          {
            'key': 'default_data_4',
            'label': 'default_data_4'
          },
          {
            'key': 'default_data_5',
            'label': 'default_data_5'
          },
          {
            'key': 'tip',
            'label': 'search U.S. states with input'
          }
        ] // 远程默认数据
      }
    }
    methods: {
      RemoteSuccess (data) {
        console.log(data)
        // data: {
        //  path: ['Hawaii'],
        //  pathName: ['Hawaii']
        // }
      },
      cancel () {
        console.log('cancel')
      }
      remoteMethod (query) {
        let self = this
        this.remoteLoading = true
        // simulate api call
        setTimeout(function () {
          var remoteMockData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
          var remoteFormatData = []
          self.remoteLoading = false
          remoteFormatData = remoteMockData.map(item => {
            // format the data structure
            return {
              'key': item,
              'label': item
            }
          })
          self.remoteData = remoteFormatData.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
        }, 500)
      }
    }
      </code>
      </pre>
      <v-cascade
        filterable
        remote
        :data="remoteData"
        :remote-method="remoteMethod"
        :loading="remoteLoading"
        noFound="没有找到搜索内容，点击确认使用自定义内容"
        :autoFocus="false"
        v-model="remoteModal"
        :title="['远程搜索']"
        addClass="cascade-remote"
        @success="RemoteSuccess"
        @cancel="cancel"
      >
      </v-cascade>
    </div>
  </div>
</template>

<script>
import { location } from './data/location'
import { job } from './data/job'
export default {
  name: 'app',
  data () {
    return {
      location: location,               // 地区数据
      locationModal: false,             // 地区选择器
      locationValue: '',                // 地区输入框值
      job: job,                         // 职称数据
      jobModal: false,                  // 职称选择器
      jobValue: '',                     // 职称输入框值
      locationSearch: location,         // 地区数据
      locationSearchModal: false,       // 地区选择器
      locationSearchValue: '',          // 地区输入框值
      remoteModal: false,               // 远程选择器
      remoteValue: '',                  // 远程输入框值
      remoteLoading: false,             // 远程loading
      remoteData: [
        {
          'key': 'default_data_1',
          'label': 'default_data_1'
        },
        {
          'key': 'default_data_2',
          'label': 'default_data_2'
        },
        {
          'key': 'default_data_3',
          'label': 'default_data_3'
        },
        {
          'key': 'default_data_4',
          'label': 'default_data_4'
        },
        {
          'key': 'default_data_5',
          'label': 'default_data_5'
        },
        {
          'key': 'tip',
          'label': 'search U.S. states with input'
        }
      ]                                // 远程默认数据
    }
  },
  methods: {
    locationSuccess (data) {
      console.log('success', data)
      this.locationValue = data.pathName.join(',')
    },
    jobSuccess (data) {
      console.log('success', data)
      this.jobValue = data.pathName.join(',')
    },
    locationSearchSuccess (data) {
      console.log('success', data)
      this.locationSearchValue = data.pathName.join(',')
    },
    RemoteSuccess (data) {
      console.log('success', data)
      this.remoteValue = data.pathName.join(',')
    },
    queryChange (val) {
      console.log(val)
    },
    cancel () {
      console.log('cancel')
    },
    open (modal, event) {
      event.target.blur()
      this[modal] = true
    },
    remoteMethod (query) {
      let self = this
      this.remoteLoading = true
      // simulate api call
      setTimeout(function () {
        var remoteMockData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
        var remoteFormatData = []
        self.remoteLoading = false
        remoteFormatData = remoteMockData.map(item => {
          // format the data structure
          return {
            'key': item,
            'label': item
          }
        })
        self.remoteData = remoteFormatData.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
      }, 500)
    }
  }
}
</script>
<style lang="scss">
@import "./style/reset";
.app {
  text-align: center;
  padding: 50px 0 20px;
}
.example {
  border-bottom: 1px dashed #efefef;
  width: 400px;
  margin: 0 auto 40px;
  max-width: 100%;
}
.select {
  width: 350px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 30px auto 0;
  display: block;
  font-size: 14px;
  cursor: pointer;
}
h1{
  font-size: 45px;
  color: #42b983;
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #999;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 1px;
  a {
    color: #42b983;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
