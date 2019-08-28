<template>
  <div>
    <e-header></e-header>
    <e-swipe></e-swipe>
    <div class="quality">
      <div class="quality-left">
        <h2>品质套餐</h2>
        <p>搭配齐全吃得好</p>
        <p class="Panicbuy">
          立即抢购
          <van-icon name="arrow" />
        </p>
      </div>
      <div class="quality-img">
        <img
          class="pingzhi-img"
          src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
        />
      </div>
    </div>
    <van-divider
      class="tuijian-sub"
      :style="{ color: '#333333', borderColor: '#33333', padding: '0 8rem' }"
    >
      推荐商家
      <van-tabbar class="filter-nav" route>
        <van-tabbar-item replace>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </van-tabbar-item>
        <van-tabbar-item replace to="/search">距离最近</van-tabbar-item>
        <van-tabbar-item replace to="/home">会员领红包</van-tabbar-item>
        <van-tabbar-item replace to="/search">筛选</van-tabbar-item>
      </van-tabbar>
    </van-divider>
    <router-link v-if="islogin ? '' : 'show'" class="login" :to="'/me/login'">
      <van-button type="primary">登录</van-button>
    </router-link>
    <div v-if="islogin ? 'show' : '' ">
      <div class="businesslists" v-for="(buses,i) in business" :key="i">
      <router-link :to="'/businessInfo:'+buses.restaurant.id">
      <!-- +  -->
          <van-card
            :title="buses.restaurant.name"
            :thumb="buses.restaurant.image_path | imgs "
            :key="i"
          >
            <div slot="tags">
              <!-- <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>-->
               <!-- <van-tag plain type="danger"></van-tag>   -->
              <span>月售 {{buses.restaurant.recent_order_num}}</span><br>
             <span class="distance">距离 {{buses.restaurant.distance}} m</span>
            </div>
          </van-card>
      </router-link>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import EHeader from "../components/EHeader";
import ESwipe from "../components/ESwipe";
import Tabbar from "../components/Tabbar";
import img from "../routes/pic";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "综合排序", value: 0 },
        { text: "好评优先", value: 1 },
        { text: "销量最高", value: 2 },
        { text: "起送价最低", value: 3 },
        { text: "配送最快", value: 4 },
        { text: "配送费最低", value: 5 },
        { text: "人均从最低到最高", value: 6 },
        { text: "人均从最高到最低", value: 7 },
        { text: "通用排序", value: 8 }
      ],
      imgs: Function
    };
  },
  components: {
    ESwipe,
    Tabbar,
    EHeader
  },
  computed: {
    ...mapGetters(["user_id", "getuserInfo", "islogin", "business"])
  },
  created() {
    this.imgs = img.picture;
    
    
  },
  mounted() {
    this.getUserInfo();
    this.getbusiness_list();
  },
  methods: {
    ...mapActions(["getUserInfo", "getbusiness_list"])
  }
};
</script>

<style>
.login {
  position: absolute;
  margin: 15% 0 15% 15%;
  /* z-index: 1; */
  align-items: center;
}
.Panicbuy {
  font-size: 0.32rem;
  color: #af8260;
  font-weight: 700;
}
.quality {
  margin-top: -3rem;
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  background: #cccccc;
}
.quality-img {
  width: 14rem;
  height: 12rem;
  margin-left: 3rem;
}
.quality-left {
  margin: 0 2rem;
}
.pingzhi-img {
  width: 100%;
  height: 100%;
}
.tuijian-sub {
  position: relative;
  /* z-index:10; */
}
.filter-nav {
  width: 100%;
  height: 3rem;
  /* background: #562531; */
  position: absolute;
  top: 2.5rem;
}
/*商家列表*/

.van-card {
  background-color: white;
  padding: 2.8rem 0;
  margin: 1rem 0;
}
.businesslists {
  margin: 0.8rem 2rem;
}
.busines-nav{
  width: 100%;
  height: 100%;
}
.van-ellipsis{
  font-size: 1.2rem;
  color: #7e7d80;
}
.distance{
  padding-left:12rem;
}
</style>