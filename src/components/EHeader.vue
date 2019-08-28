<template>

  <div class="eheader">
    <router-link :to="'/address'" class="place">
      <van-icon name="location-o" size="12px" />
      {{address ? address.name : '未知地址'}}
      <van-icon name="arrow-down" size="12px" />
    </router-link>
    <van-icon name="ocation-o"></van-icon>
    <form action="/" class="ehfrom">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <!-- @search="onSearch"
      @cancel="onCancel"-->
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      lats: "",
      lons: "",
      option: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 30000
      },
      value: "搜索饿了么商家、商品名称"
    };
  },

  computed: {
    ...mapGetters(["address"])
  },

  methods: {
    ...mapActions(["addres", "getaere"]),
    ...mapMutations(["SET_LATI", "SET_LONGIN"]),
    getlatitudeLongitude() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showError,
          this.option
        );
      }
    },
    showPosition(position) {
      this.lats = position.coords.latitude; //获取纬度
      this.lons = position.coords.longitude; //获取经度
      console.log("您的纬度是:" + this.lats + "，经度是：" + this.lons);
      this.SET_LATI(this.lats);
      this.SET_LONGIN(this.lons);
      this.getaere();
      this.addres();
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("您拒绝了地理定位服务");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("无法获取您的位置");
          break;
        case error.TIMEOUT:
          console.log("超时");
          break;
      }
    }
  },
  created() {
    this.getlatitudeLongitude();
    this.addres();
  }
};
</script>
<style>
.eheader {
  width: 100%;
  height: 8rem;
  background-color: #0085ff;
}
.ehfrom {
  position: absolute;
  width: 90%;
  margin: 2.1rem 5%;
}
.place {
  position: absolute;
  margin: 0.9rem 10% 0.1rem 10%;
  color: #ffffff;
}
.van-search {
  height: 4rem;
}
</style>