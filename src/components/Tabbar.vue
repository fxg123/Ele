<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace :to="tar.path"  v-for="(tar, index) in icons" :key="index">
        <span>{{tar.title}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? tar.icon.active : tar.icon.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: 0,
      icons: [
        {
          path: "/",
          title: "首页",
          icon: {
            normal: require("@/assets/icons/home.png"),
            active: require("@/assets/icons/home-h.png")
          }
        },
        {
          path: "/find",
          title: "发现",
          icon: {
            normal: require("@/assets/icons/find.png"),
            active: require("@/assets/icons/find-h.png")
          }
        },
        {
          path: "/order",
          title: "其他",
          icon: {
            normal: require("@/assets/icons/order.png"),
            active: require("@/assets/icons/order-h.png")
          }
        },
        {
          path: "/me",
          title: "我的",
          icon: {
            normal: require("@/assets/icons/me.png"),
            active: require("@/assets/icons/me-h.png")
          }
        }
      ]
    };
  }
};
</script>
