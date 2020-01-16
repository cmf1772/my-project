<template>
    <div>
        <ul ref="ul" @click="sendParent"></ul>
        <div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'leftTreeComponent',

  props: ['son'],

  data () {
    return {
        sonData: '我是自组件传过来的，哇哈哈'
    }
  },

  methods: {
      createDom() {
          this.son.forEach(item => {
              this.createUl(item.name)
              if (item.children && item.children.length > 0) {
                  this.Three(item.children)
              }
          });
      },

      Three(dom) {
          dom.forEach(item => {
              this.createUl(item.name, item.class)
              if (item.children && item.children.length > 0) {
                  this.Three(item.children)
              }
          })
      },

      createUl(name, textId) {
            let domUl = document.createElement('li')
            domUl.innerText = name
            if (textId) {
                domUl.className = textId
            }
            this.$refs.ul.appendChild(domUl)
      },

      sendParent() {
          this.$emit('get-sondata', this.sonData)
      }
  },

  mounted() {
      this.createDom()
    //   this.$refs.ul.onclick = function(e) {
    //       if (e.target.nodeName == "LI" && e.srcElement.className === "") {
    //           console.log(e)
    //       }
    //   }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .two {
        margin-left: 20px;
        
    }

    li {
        margin-top: 20px;
    }

    .three {
        margin-left: 40px
    }
</style>
