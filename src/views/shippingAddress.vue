<template>
  <div>
    <van-nav-bar
      title="选择收货地址"
      left-text="返回"
      @click-left="$router.back()"
      right-text="新增地址"
      left-arrow
    ></van-nav-bar>
    <div class="address-list">
      <a href="#" class="address-lis">
        <span>
          南京
          <van-icon name="arrow-down" />
        </span>
      </a>
      <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
      </form>
    </div>
    <div class="index-2ljEK_0" style>
      <h4>当前地址</h4>
      <div class="index-11hsB_0">
        <span>南京市人民政府</span>
        <span class="index-Ziyuq_0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class>
            <g fill="none" fill-rule="evenodd">
              <circle cx="7.5" cy="7.5" r="7" stroke="#2395FF" />
              <path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z" />
            </g>
          </svg>
          <span data-spm-anchor-id="a2ogi.12117543.0.i15">重新定位</span>
        </span>
      </div>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>


<style>
.van-address-list__add {
  display: none;
}
.address-list {
  display: flex;
  flex-grow: inherit;
}
.address-lis {
  position: relative;
  width: 4rem;
  padding: 1.5rem 0.6rem;
}
.van-search {
  width: 26rem;
}
.index-2ljEK_0{
  display: block;
}
.index-2ljEK_0>h4 {
    padding: 0.4rem 0 0.18rem 0.4rem;
    color: #666;
}
.index-11hsB_0 {
    background: #fff;
    height: 1.1rem;
    font-size: 1.4rem;
    color: #333;
    display: flex;
    padding: 0 0.45rem 0 0.4rem;
    align-items: center;
    justify-content: space-between;
}
.index-11hsB_0 span:first-child {
    font-weight: 700;
    max-width: 12.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.index-11hsB_0 .index-Ziyuq_0 {
    color: #2395ff;
    font-size: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0.4rem;
}
.index-11hsB_0 svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
}
</style>