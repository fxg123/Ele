<template>
  <div>
    <van-nav-bar title="城市选择" left-text="返回" @click-left="$router.back()" left-arrow>
    </van-nav-bar>
    <form action="/">
    <van-search v-model="value" placeholder="请输入搜索关键词"  shape="round" >
      <!-- @search="onSearch" -->
    </van-search>
    </form>
    <van-index-bar :index-list="cityInfor.alphabet">
      <template v-for="cityList in cityInfor.cityList">
        <van-index-anchor :index="cityList.idx" />
        <van-cell v-for="city in cityList.cities" :title="city.name" />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import to from "await-to-js";
export default {
  data() {
    return {
      value:''
      // alphabet
    }
  },
  computed: {
    ...mapGetters(["cityInfor"]),
    
  },
  created() {
    this.getCityInfor()
    // console.log(this.getCityInfor());
    // console.log(this.cityInfor);

  },
  methods: {
    ... mapActions(["getCityInfor"]),
  }
};
</script>
<style>
</style>