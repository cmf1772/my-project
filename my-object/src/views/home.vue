<template>
  <div>
    <div>
      <LeftTree :son="mas" @get-sondata="getSonText"></LeftTree>
      <p>{{sonDate}}</p>
      <p @click="changmixin">{{mes}}</p>
      <p>{{allDate}}</p>
      <rightMain :rightData="rightDate" @propsParent="getSonRight">
        <p slot="right">right我是插槽</p>
      </rightMain>
    </div>
    <router-view />
  </div>
</template>

<script>
import LeftTree from "@/components/LeftTree";
import mixin from "../components/mixin";
import rightMain from "@/components/rightMain";

export default {
  name: "home",
  components: {
    LeftTree,
    rightMain
  },

  mixins: [mixin],

  data() {
    return {
      mas: [
        {
          name: "组建1",
          children: [
            {
              name: "组建2",
              class: "two"
            }
          ]
        },
        {
          name: "组建3",
          children: [
            {
              name: "组建4",
              class: "two",
              children: [
                {
                  name: "组建5",
                  class: "three"
                }
              ]
            }
          ]
        },
        {
          name: "组建6",
          children: [
            {
              name: "组建7",
              class: "two"
            }
          ]
        },
        {
          name: "组建9"
        }
      ],
      sonDate: "",
      rightDate: "我是right传值"
    };
  },

  methods: {
    getSonText(res) {
      this.sonDate = res;
    },

    changmixin() {
      this.mes = "我更改了你呢";
      this.allDate = "我更改了全局data";
      this.rightDate = "我更改了right的船只";
    },

    getSonRight(res) {
      console.log(res);
    }
  },

  mounted() {
    this.$axios
      .get("/test")
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });

    // this.$axios.post('/login', {
    //     user: 'test',
    //     paw: '123456'
    // })
    // .then((res) => {
    //     console.log(res)
    // })
    // .catch((res) => {
    //     console.log(res)
    // })
  }
};
</script>

<style scoped>
</style>