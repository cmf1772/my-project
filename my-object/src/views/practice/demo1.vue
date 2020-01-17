<template>
  <!-- 放大镜 -->
  <div class="allImg">
    <div class="leftImg">
      <img
        ref="leftImg"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579236969828&di=b5e99668905ca13cd27cb2ee14968fb6&imgtype=0&src=http%3A%2F%2Fp.qpic.cn%2Fdnfbbspic%2F0%2Fdnfbbs_dnfbbs_dnf_gamebbs_qq_com_forum_201912_09_071842j9asslffzkkldk52.jpg%2F0"
        alt
      />
      <div class="mock" @mousedown="move"></div>
    </div>
    <div class="rightImg">
      <img
        ref="rightImg"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579236969828&di=b5e99668905ca13cd27cb2ee14968fb6&imgtype=0&src=http%3A%2F%2Fp.qpic.cn%2Fdnfbbspic%2F0%2Fdnfbbs_dnfbbs_dnf_gamebbs_qq_com_forum_201912_09_071842j9asslffzkkldk52.jpg%2F0"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "demo1",

  data() {
    return {
      positionX: 0,
      positionY: 0
    };
  },

  methods: {
    move(e) {
      let odiv = e.target; //获取目标元素

      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;

      document.onmousemove = e => {
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        this.positionX = top;
        this.positionY = left;

        //判断拖拽的元素不能超出父级元素
        if (this.positionY > this.$refs.leftImg.width - 100) {
          this.positionY = this.$refs.leftImg.width - 100;
        }
        if (this.positionX > this.$refs.leftImg.height - 100) {
          this.positionX = this.$refs.leftImg.height - 100;
        }

        if (this.positionY < 0) {
          this.positionY = 0;
        }

        if (this.positionX < 0) {
          this.positionX = 0;
        }

        // 定位
        odiv.style.left = this.positionY + "px";
        odiv.style.top = this.positionX + "px";

        this.bigMove();
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },

    //定位大图
    bigMove() {
        this.$refs.rightImg.style.left =  - (this.positionY * 2)+ "px";
        this.$refs.rightImg.style.top =  - (this.positionX * 2)+ "px";
    }
  }
};
</script>

<style lang="scss" scope>
.allImg {
  width: 100%;
  height: 500px;
  display: flex;
  .leftImg {
    width: 300px;
    overflow: hidden;
    position: relative;
    > img {
      width: 100%;
    }
    .mock {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .rightImg {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-left: 30px;
    > img {
      width: 600px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>