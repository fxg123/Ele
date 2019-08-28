<template>
  <div class="userinfo">
    <van-cell class="meaddress" title="头像" is-link>
      <span v-if="getuserInfo.avatar">
        <van-image round width="5rem" height="5rem" :src="imgs(getuserInfo.avatar)"></van-image>
      </span>
      <span v-else>
        <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"></van-image>
      </span>
    </van-cell>
    <van-cell title="账户" icon is-link>{{getuserInfo.username}}</van-cell>
    <van-cell title="手机号" icon="phone-o" is-link>{{getuserInfo.mobile}}</van-cell>
    <van-cell title="登录密码" icon is-link>设置</van-cell>
    <div class="meinfo">
      <p @click="getlogout">退出登录</p>
    </div>
  </div>
</template>

<script>
import img from "../routes/pic";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      imgs: Function
    }
  },
  methods: {
    ...mapActions(["getUserInfo","getlogout"]), 
    getlogout(){
        localStorage.clear();
        location.href="/";
        // this.$router.push('/')
    }
  },
  created() {
    this.imgs = img.picture;
  },
  computed: {
    ...mapGetters(["user_id", "getuserInfo","islogin"])
  },
  mounted() {
    this.getUserInfo();
    // if(localStorage == null){
    //   location.href='/me/login'
    // }
  },

};
</script>
<style>
.userinfo {
  width: 100%;
  height: 100%;
}
.meaddress {
  align-items: center;
}
.meinfo {
  margin-top: 1.4rem;
  color: #999;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
}
</style>