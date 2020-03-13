<template>
<div class="wrapper" ref="wrapper">
    <slot></slot>
</div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    name: 'scroller',
    data() {
        return {}
    },
    props:{
        HandleToScroll:{
            type: Function,
            default: function(){}
        },
        HandleToTouchEnd:{
            type: Function,
            default: function(){}
        }
    },

mounted(){
    var scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 1
          });
          scroll.on('scroll', (pos) => {
              this.HandleToScroll(pos)
          }),
          scroll.on('touchEnd', (pos) => {
              this.HandleToTouchEnd(pos)
          })
          this.scroll = scroll
},
methods: {
    toScrollTop(y){
        this.scroll.scrollTo(0,y)
    }
}
}
</script>
<style  scoped>
.wrapper{
    height: 500px;
    overflow: hidden;
}
</style>