<template>
  <div class="swipe">
    <van-swipe @change="onChange">
      <van-swipe-item v-if="imgs.length<=10">
        <div class="carousel" v-for="(sw, index) in swipes" :key="index" v-if=" index < 10">
          <a>
            <img class="meishi" :src="imgs(sw.image_hash)" alt srcset />
            <br />
            <span>{{sw.name}}</span>
          </a>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="carousel"  v-for="(sw, index) in swipes"  :key="index" v-if=" index > 10 ">
          <a>
            <img class="meishi" :src="imgs(sw.image_hash)" alt srcset />
            <br />
            <span>{{sw.name}}</span>
          </a>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import img from "../routes/pic";
import to from "await-to-js";
export default {
  data() {
    return {
      current: 0,
      imgs: Function
    };
  },
  computed: {
    ...mapGetters(["swipes"])
  },
  created() {
    this.imgs = img.picture;
    // console.log(this.imgs);
    this.SwipeAct();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    ...mapActions(["swipe"]),
    async SwipeAct() {
      let [err] = await to(this.swipe());
    }
  }
};
</script>

<style>
.swipe {
  width: 100%;
  height: 18rem;
}
.carousel {
  display: inline-block;
  text-align: center;
  margin: 0 0.6rem;
}
.pics {
  display: flexbox;
  flex-wrap: wrap;
}
.meishi {
  width: 5rem;   
  height: 5rem;
}
span {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
.van-button--normal {
  font-size: 1.8rem;
  width: 14rem;
  text-align: center;
  margin: 0 5rem;
}
</style>