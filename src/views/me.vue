<template>
  <div class="me-list">
    <div class="me">
      <router-link :to=" islogin ? '/me/userinfo' : '/me/login' ">
        <div class="title">
          <span v-if="getuserInfo.avatar">
            <img :src="imgs(getuserInfo.avatar)" class="login-bef" />
          </span>
          <span v-else>
            <img :src="meimg" class="login-bef" />
          </span>
          <van-icon  class="me-arrow" name="arrow" />
          <div class="title-left">
            <p class="logorres">{{ islogin ? getuserInfo.username : '登录/注册'}}</p>
            <p class="title-font">
              <i class="el-icon-mobile"></i>
              <span icon="phone-o">{{ islogin ? getuserInfo.mobile: '登录后享受更多特权'}}</span>
            </p>
            <i class="el-icon-arrow-right sml"></i>
          </div>
        </div>
      </router-link>
    </div>
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o"><p style="color:red; font-size:16;">{{getuserInfo.gift_amount}} 个</p><p>红包</p></van-grid-item>
      <van-grid-item icon="search"><p style="color:green; font-size:16;">{{getuserInfo.point}} 个</p><p>金币</p></van-grid-item>
    </van-grid>
    <van-cell title="我的地址" icon="location-o" is-link />
    <van-cell title="金币商城" icon="shop-o" is-link />
    <van-cell title="我的客服" icon="service-o" is-link />
    <van-cell title="规则中心" icon="comment-o" is-link />
    <div class="profie">
      <a
        href="//h5.ele.me/service/agreement/#HEAEDER_SHOW=1&amp;initTitle=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96&amp;key=ruleQue50"
      >隐私政策</a>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import img from "../routes/pic";
import Tabbar from "../components/Tabbar";
import { mapGetters, mapActions } from "vuex";
import to from "await-to-js";
export default {
  data() {
    return {
      meimg: require("@/assets/icons/holder.png"),
      imgs: Function
    };
  },
  methods: {
    ...mapActions(["getUserInfo"])
  },
  created() {
    this.imgs = img.picture;
  },
  computed: {
    ...mapGetters(["user_id", "getuserInfo", "islogin"])
  },
  mounted() {
    this.getUserInfo();
  },
  components: {
    Tabbar
  },

};
</script>
<style  scoped>
.me-list {
  width: 100%;
  height: 100%;
}
.me {
  width: 100%;
  height: 14vh;
  padding-top: 3vh;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.title {
  width: 92%;
  height: 12vh;
  margin: 0 auto;
  position: relative;
}
.login-bef {
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  position: absolute;
}
.logorres {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}
.title-left {
  width: 40vh;
  height: 10vh;
  margin-left: 12vh;
}
.title-font {
  color: white;
  margin-top: 5px;
  font-size: 1rem;
}
.title .sml {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
  position: absolute;
  right: 0;
  bottom: 3rem;
  font-size: 1.5rem;
}
.profie {
  text-align: center;
  margin: 0.613333rem auto;
  margin: 6.133333vw auto;
  color: #4da6f0;
  font-size: 0.4rem;
}
.me-arrow{
  float: right;
  right: 0;
  margin:2rem  0;
  font-size: 2rem;
  color: #cccccc;
}
</style>