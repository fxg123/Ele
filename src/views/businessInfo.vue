<template>
 <div class="businessinlist">
      <div class="tohead">
        <!-- <a class="businessback" href='#' name="arrow-left">返回</a> -->
        <router-link class="businessback" to="/" >返回</router-link>
        <div class="shadow"></div>
        <!-- <img :src="imgs(businessinfo.rst.shop_sign.image_hash) " alt /> -->
        <div>
          <img class="businesslogo" :src="imgs(businessinfo.rst.image_path)" alt />
        </div>
      </div>
      <div class="businessmsg">
        <div class="businessname">
          <h2>
            <span>{{businessinfo.rst.name}}</span>
          </h2>
        </div>
        <div class="businessmsg2">
          <span>月售{{businessinfo.rst.recent_order_num}}单&emsp;</span>
          <span>蜂鸟快送约{{businessinfo.rst.order_lead_time}}分钟</span>
        </div>
        <div class="Coupon">
          <p class="cp1">
            <span class="sp1">￥7</span>
            <span>无门槛&emsp;&emsp;</span>
            <span>领取</span>
          </p>
        </div>
        <section style="margin-left:0px;">
          <span class="father2" v-for="(item, index) in businessinfo.rst.activity_tags" :key="index">
            {{item.text}}
            <span class="child2">{{item.text}}</span>
          </span>
        </section>
        <p class="Notice">公告：{{businessinfo.rst.promotion_info}}</p>
      </div>
    </div>
</template>
<script>
import img from "../routes/pic";
import { mapGetters, mapActions,mapMutations } from "vuex";
export default {
  data() {
    return {
      imgs: Function
    };
  },
  computed: {
    ...mapGetters(["user_id", "businessinfo"])

  },
  created() {
    this.imgs = img.picture;
    
this.SET_SHOPID(this.$route.path.split(':')[1])
    this.getbusiness_info();
    console.log('jkjkjk')

  },
//   mounted() {
//   },
  methods: {
    ...mapActions(["getbusiness_info"]),
    ...mapMutations(['SET_SHOPID']),
    ab(){
        console.log(41655);
        
    }
  }
};
</script>
<style>
.businessinlist {
  position: relative;
}
.businessback{
    position: relative;
    z-index: 11;
}
.tohead > img {
  height: 26.666667vw;
  width: 100%;
}
.shadow {
  height: 26.666667vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0),
    rgba(0, 0, 0, 0.5)
  );
}
.businesslogo {
  position: absolute;
  left: 40vw;
  width: 20vw;
  height: 20vw;
  z-index: 11;
  border-radius: 0.8vw;
}
.businessmsg {
  padding: 8vw 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 5rem;
  text-align: center;
}
.businessname {
  flex: 1;
  width: 72vw;
}
.businessmsg2 {
  white-space: nowrap;
  height: 3.2vw;
  margin-top: 1.733333vw;
  font-size: 0.8rem;
  color: #666;
  text-align: center;
}
.Coupon {
  color: #594519;
  background: #ffe578;
  margin: 15px auto;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-left: 2vw;
  height: 6.4vw;
  width: 38.4vw;
  font-size: 0.8rem;
}
.cp1 {
  font-weight: 400;
  flex: 1;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  margin-left: 8px;
  margin-top: 4px;
}
.sp1 {
  font-weight: 700;
  margin: 0 2.866667vw 0 1.333333vw;
  font-size: 1rem;
}
.father2 {
  position: relative;
  font-size: 0.8rem;
  color: transparent;
  white-space: nowrap;
  padding: 0 1.066667vw;
  margin-bottom: 1.066667vw;
  margin-right: 1.333333vw;
  box-sizing: inherit;
  float: left;
  margin-top: -17px;
}
.child2 {
  color: #ff4b33;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.266667vw solid #ddd;
  border-radius: 0.533333vw;
  border-color: #ff4b33;
  /* padding: 0 2.133333vw; */
}
.numcoupon {
  padding-right: 2.933333vw;
  text-align: right;
  color: #999;
  width: 16.266667vw;
  flex-shrink: 0;
  position: relative;
  font-size: 0.8rem;
  margin-left: 115px;
}
.Notice {
  width: 80vw;
  font-size: 0.8rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2.266667vw auto 2.666667vw;
  padding: 0;
  white-space: nowrap;
}
</style>