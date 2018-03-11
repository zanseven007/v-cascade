<template>
  <div class="app">
    <input class="select select-location" v-model="locationValue" type="text" name="location" id="location" placeholder="地区选择器" @click="open('locationModal',$event)">
    <v-cascade
      v-model="locationModal"
      :data="location"
      :title="['省份','城市','区县']"
      addClass="cascade-location"
      @success="locationSuccess"
      @cancel="cancel"
    >
    </v-cascade>
    <input class="select select-job" v-model="jobValue" type="text" name="job" id="job" placeholder="职称选择器" @click="open('jobModal',$event)">
    <v-cascade
      v-model="jobModal"
      :data="job"
      :title="['职称','职称']"
      addClass="cascade-job"
      @success="jobSuccess"
      @cancel="cancel"
    >
    </v-cascade>
    <input class="select select-location-search" v-model="locationSearchValue" type="text" name="locationSearch" id="locationSearch" placeholder="本地搜索" @click="open('locationSearchModal',$event)">
    <v-cascade
      filterable
      v-model="locationSearchModal"
      :data="locationSearch"
      :title="['省份','城市','区县']"
      addClass="cascade-location-search"
      @success="locationSearchSuccess"
      @cancel="cancel"
    >
    </v-cascade>
    <input class="select select-remote" v-model="remoteValue" type="text" name="Remote" id="Remote" placeholder="远程搜索" @click="open('remoteModal',$event)">
    <v-cascade
      filterable
      remote
      :data="remoteData"
      :remote-method="remoteMethod"
      :loading="remoteLoading"
      :autoFocus="false"
      v-model="remoteModal"
      :title="['远程搜索']"
      addClass="cascade-remote"
      @success="RemoteSuccess"
      @cancel="cancel"
    >
    </v-cascade>
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
          'key': 'A',
          'label': 'A'
        },
        {
          'key': 'B',
          'label': 'B'
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
@import "./style/common";
.select {
  width: 270px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 30px auto;
  display: block;
  font-size: 14px;
  cursor: pointer;
}
</style>
