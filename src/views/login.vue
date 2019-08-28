<template>
  <div class="login-home">
    <div class="logo">
      <img src="/icons/logo.ba876fd.png" alt />
    </div>
    <van-cell-group>
      <van-field v-model="mobile" center clearable placeholder="请输入手机号" maxlength="11">
        <van-button
          slot="button"
          :class="{logsucess:btnOP}"
          :disabled="!btnOP"
          size="small"
          type="primary"
          @click="getSmscodeClick"
        >发送验证码</van-button>
        {{TestGetCode}}
      </van-field>
      <van-field v-model="sms" center clearable placeholder="请输入短信验证码"></van-field>
      <div class="messageLogin">
        新用户登录即自动注册，并表示已同意
        <a
          href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
        >
          <br />《用户服务协议》
        </a>
        和
        <a
          href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
        >《隐私权政策》</a>
      </div>
      <van-button type="primary" @click="logAct">登录</van-button>
      <p>关于我们</p>
    </van-cell-group>
    <van-dialog
      v-model="isShow"
      title="请填写图形验证码"
      show-cancel-button
      show-confirm-button
      :before-close="bfClose"
      @confirm="confirm"
    >
      <van-field v-model="graphCode" placeholder="验证码" maxlength="4">
        <img
          style="height:3rem"
          slot="button"
          :src="pic_code ? pic_code.captcha_image : ''"
          @click="getGraphcodeClick"
        />
      </van-field>
      <div class="pic-err" style="height:2rem; color:red; padding-left:1rem;">
        <span v-show="ErrCode">验证码错误，重新填写</span>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import to from "await-to-js";
export default {
  data() {
    return {
      mobile: "",
      sms: "",
      TestGetCode: "获取验证码",
      btnOP: false,
      isShow: false,
      graphCode: "",
      ErrCode: false
    };
  },
  computed: {
    ...mapGetters(["pic_code"])
  },
  methods: {
    ...mapActions(["getSmscode", "getGraphcode", "logss"]),
    //手机验证码
    async getSmscodeClick() {
      let [err] = await to(
        this.getSmscode({
          mobile: this.mobile
        })
      );

      if (err) {
        let [err] = await to(this.getGraphcode(this.mobile));
        console.log(err);
        if (!err) {
          console.log("需要验证码");
          this.isShow = true;
        } else {
          console.log("验证成功 isshow = true");
        }
      }
    },

    // 图形验证
    async getGraphcodeClick() {
      let [err] = await to(this.getGraphcode(this.mobile));
      console.log(err + "tuxing");
      if (err) {
        console.log(err);
      }
    },
    async bfClose(action, done) {
      if (action == "confirm") {
        
        let [err] = await to(
          this.getSmscode({
            mobile: this.mobile,
            Gracode: this.graphCode
          })
        );
        // 如果验证码错误
        if (err) {
          let [err] = await to(this.getGraphcode(this.mobile));
          this.ErrCode = true;
          done(false);
        }
      // 验证码正确  
        else {
        done()
          // let [err] = await to(
          //   this.getSmscode({
          //     mobile: this.mobile,
          //     Gracode: this.graphCode
          //   }));
          // console.log(this.graphCode);
          // if (err) {
          //   let [err] = await to(this.getGraphcode(this.mobile));
          //   this.ErrCode = true;
          //   done(false);
          // }else{
          //   done();
          //   this.ErrCode = false;
          // }
        }
      } 

      else if (action == "cancel") {
        done();
      }
    },
    confirm() {
      console.log(this.graphCode);
    },
    async logAct() {
      let [err] = await to(
        this.logss({
          mobile: this.mobile,
          Gracode: this.sms
        })
      );
      if (err) {
        console.log("登录失败，短信验证码验证失败");
      } else {
        this.$router.push("/me");
      }
    }
  },
  watch: {
    mobile(newphone, oldphone) {
      this.btnOP = newphone.length == 11;
    }
  }
};
</script>
<style scoped>
.login-home {
  width: 80%;
  position: absolute;
  text-align: center;
  margin: 40% 10%;
}
.logo {
  width: 14rem;
  margin: 2rem auto;
}
img {
  width: 100%;
  height: 100%;
}
.van-button--normal {
  margin: 2rem 0 0 0;
  font-size: 1.4rem;
  width: 14rem;
}
.messageLogin {
  margin-top: 1.4rem;
  color: #999;
  font-size: 1.2rem;
  line-height: 1.8rem;
}
.logsucess {
  color: blue;
}
</style>