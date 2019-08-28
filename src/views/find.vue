<template>
  <div>
    <router-link to="/shippingAddress">地址列表</router-link>
    <router-link to="/me/login">地址列表</router-link>
    <div class="discover">
      <!---->
      <section class="parts unmerge">
        <div class="entry list3">
          <a ubt-click="1757" ubt-data-url="https://h5.ele.me/exchange/" class>
            <div class="content-wrapper">
              <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
              <p class="tips">0元好物在这里</p>
            </div>
            <img
              loading
              class="icon"
              src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
            />
            <img style="display: none;" />
          </a>
          <a ubt-click="1757" ubt-data-url="https://h5.ele.me/commend/#/" class>
            <div class="content-wrapper">
              <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
              <p class="tips">20元现金拿不停</p>
            </div>
            <img
              loading
              class="icon"
              src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
            />
            <img style="display: none;" />
          </a>
          <a ubt-click="1757" ubt-data-url="/discover/koubei/" class>
            <div class="content-wrapper">
              <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
              <p class="tips">领取口碑好券</p>
            </div>
            <img
              loading
              class="icon"
              src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
            />
            <img style="display: none;" />
          </a>
        </div>
        <!---->
      </section>
      <!---->
      <!---->
      <!---->
      <!---->
      <section>
        <div class="activity-header">
          <span class="line left"></span>
          <svg class="activity-icon">
            <use xlink:href="#alarm" />
          </svg>
          限时好礼
          <span class="line right"></span>
        </div>
        <p class="activity-sub-title">金币换豪礼</p>
        <div class="activity-body">
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="0"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/"
              width="324"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">3元品质联盟红包</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>90金币</span>
                    <!---->
                  </span>
                  <del class="original-price ui-ellipsis">¥3</del>
                </div>
              </div>
            </div>
            <span class="discount">限时优惠</span>
          </a>
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="1"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/"
              width="324"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">数码经络按摩仪</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>9金币</span>
                    <!---->
                  </span>
                  <del class="original-price ui-ellipsis">¥239</del>
                </div>
              </div>
            </div>
            <span class="discount">特价换购</span>
          </a>
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="2"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://fuss10.elemecdn.com/7/ad/f0132ee0fee6c57253ada4573364ejpeg.jpeg?imageMogr/format/webp/"
              width="324"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">机械手感背光键盘套装</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>9金币</span>
                    <!---->
                  </span>
                  <del class="original-price ui-ellipsis">¥129</del>
                </div>
              </div>
            </div>
            <span class="discount">特价换购</span>
          </a>
        </div>
        <div class="activity-recommend wall-16TaH"></div>
        <!---->
        <p class="activity-more">
          查看更多
          <svg class="svg-next">
            <use xlink:href="#tab_found_next_page" />
          </svg>
        </p>
      </section>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "../components/Tabbar";
export default {
  components: {
    tabbar
  }
};
</script>

<style>
.discover {
  padding-bottom: 0.013333rem;
  padding-bottom: 0.133333vw;
}
section {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
}
section.parts {
  border-bottom: none;
  background: transparent none repeat 0 0 / auto auto padding-box border-box
    scroll;
  background: initial;
}
.unmerge > .entry:first-child {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
}
.unmerge > .entry:last-child {
  border-top: 1px solid #ededed;
}
.entry {
  border-width: 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.entry:first-child {
  border-top: 0;
}
.entry .content-wrapper {
  max-width: 3rem;
  max-width: 30vw;
}
.entry a {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 2.133333rem;
  height: 21.333333vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  border-bottom: 1px solid #ededed;
}
.entry .sub-pic-hash {
  height: 2.4rem;
  height: 24vw;
  padding: 0;
}
.entry .sub-pic-hash img {
  width: 100%;
}
.entry .icon {
  width: 1.6rem;
  width: 16vw;
}
.entry .title {
  line-height: 1.2;
  font-size: 0.426667rem;
  margin-bottom: 0.16rem;
  margin-bottom: 1.6vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.entry .title img {
  width: 0.48rem;
  width: 4.8vw;
  margin-right: 0.066667rem;
  margin-right: 0.666667vw;
  vertical-align: middle;
}
.entry .tips {
  line-height: 1.2;
  font-size: 0.32rem;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.entry.list2 a:first-child,
.entry.list3 a:first-child {
  border-right: 1px solid #ededed;
}
.entry.list2 a {
  width: 50%;
  float: left;
}
.entry.list2 a:nth-child(odd) {
  border-right: 1px solid #ededed;
}
.entry.list2 .icon {
  width: 1.2rem;
  width: 12vw;
}
.entry.list3 {
  position: relative;
}
.entry.list3 a {
  width: 50%;
}
.entry.list3 a:nth-child(3n + 1) {
  border-right: 1px solid #ededed;
}
.entry.list3 .icon {
  width: 1.2rem;
  width: 12vw;
}
.entry.list3 a:first-child {
  position: absolute;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-align-items: normal;
  align-items: normal;
  height: 4.266667rem;
  height: 42.666667vw;
  padding: 0.586667rem 0.293333rem 0.16rem 0.426667rem;
  padding: 5.866667vw 2.933333vw 1.6vw 4.266667vw;
}
.entry.list3 a:first-child .icon {
  -webkit-align-self: flex-end;
  align-self: flex-end;
  width: 2rem;
  width: 20vw;
}
.entry.list3 a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%;
}
.entry.list2 .sub-pic-hash,
.entry.list3 .sub-pic-hash {
  width: 100%;
}
.activity-header {
  padding-top: 0.5rem;
  text-align: center;
  font-size: 0.5rem;
  font-weight: 700;
  color: #333;
}
.activity-icon {
  position: relative;
  top: 0.053333rem;
  width: 0.44rem;
  height: 0.44rem;
}
.line {
  display: inline-block;
  margin: 0.213333rem 0.093333rem 0.173333rem;
  margin: 2.133333vw 0.933333vw 1.733333vw;
  border: 1px solid #333;
  width: 0.4rem;

  height: 0;
  position: relative;
}
.line:after {
  position: absolute;
  top: -0.066667rem;
  content: "";
  background: #333;
  height: 0.133333rem;
  width: 0.133333rem;
  border-radius: 50%;
}
.line.left:after {
  right: -0.066667rem;

}
.line.right:after {
  left: -0.066667rem;
}
.activity-sub-title {
  font-size: 0.293333rem;
  color: #999;
  text-align: center;
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
}
.activity-more,
.gift-list-more {
  font-size: 0.346667rem;
  color: #999;
  text-align: center;
  padding: 0.4rem 0 0.48rem;
  padding: 4vw 0 4.8vw;
}
.activity-more {
  padding-top: 0;
}
.activity-body {
  padding: 0.3rem 0 0.4rem 0.4rem;
  white-space: nowrap;
}
.discover-food {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 2.96rem;
  width: 29.6vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}
.discover-food img {
  width: 4.32rem;
  width: 43.2vw;
  height: 2.933333rem;
  height: 29.333333vw;
  margin-bottom: 0.253333rem;

}
.discover-food .discount {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.293333rem;
  color: #fff;
  background: #413d3c;
  padding: 0.066667rem;

}
.discover-food .food-name {
  font-size: 0.346667rem;
  color: #333;
  margin-bottom: 0.133333rem;

}
.discover-food .food-price {
  height: 0.64rem;
  line-height: 0.64rem;
}
.discover-food .price {
  font-size: 0.346667rem;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #ff5339;
  margin-right: 0.093333rem;
  max-width: 1.333333rem;
  display: inline-block;
  vertical-align: middle;
}
.discover-food .price .yuan {
  font-size: 0.293333rem;
}
.discover-food .original-price {
  font-size: 0.293333rem;
  color: #aaa;
  max-width: 1.066667rem;
  display: inline-block;
  vertical-align: middle;
}
.discover-food .grab {
  float: right;
  font-size: 0.4rem;
  color: #fff;
  background: #f94843;
  padding: 0.12rem 0.333333rem;
  border-radius: 0.08rem;
  line-height: 0.4rem;
}
.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: "";
  clear: both;
}
.svg-next {
  height: 0.24rem;
  width: 0.133333rem;
  margin-left: 0.146667rem;
}
</style>