<template>
  <div class="app">
    <div
      v-for="(item, index) in shuffling"
      :key="index"
      v-if="index === indexShow ? true : false"
      class="itemDiv"
      @mousemove="mousemove"
    >
      <div :style="'background:' + item.color" class="img"></div>
      <p>{{item.text}}</p>
    </div>
    <div class="changeImg">
      <div class="leftChange" @click="change('left')"><</div>
      <div class="rightChange" @click="change('right')">></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      shuffling: [
        {
          color: "yellow",
          text: "第一页"
        },
        {
          color: "orange",
          text: "第二页"
        },
        {
          color: "green",
          text: "第三页"
        },
        {
          color: "skyblue",
          text: "第四页"
        },
        {
          color: "red",
          text: "第五页"
        }
      ],
      indexShow: 0,
      stopTime: null
    };
  },

  methods: {
    mousemove(res) {
        // clearInterval(this.stopTime);
    },
    change(type) {
      clearInterval(this.stopTime);
      if (type === "left") {
        if (this.indexShow === 0) {
          this.indexShow = this.shuffling.length - 1;
        } else {
          this.indexShow--;
        }
      } else {
        if (this.indexShow === this.shuffling.length - 1) {
          this.indexShow = 0;
        } else {
          this.indexShow++;
        }
      }
      this.createTime();
    },

    createTime() {
      this.stopTime = setInterval(() => {
        if (this.indexShow === this.shuffling.length - 1) {
          this.indexShow = 0;
          return false;
        }
        this.indexShow++;
      }, 2000);
    }
  },

  mounted() {
    this.createTime();
  }
};
</script>

<style lang="scss" scope>
.app {
  width: 100%;
  height: 250px;
  display: -webkit-box;
  overflow: hidden;
  position: relative;

  .itemDiv {
    width: 100%;
    height: 200px;

    .img {
      width: 100%;
      height: 200px;
    }
  }

  .changeImg {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;
  }
}
</style>