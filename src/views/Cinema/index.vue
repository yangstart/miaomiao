<template>
<div id="main">
   <vheader  title="ciname"></vheader>
   <div id="content">
     <div class="cinema_menu">
       <div class="city_switch">
         全城 <i class="iconfont"></i>
       </div>
       <div class="brand_switch">
         品牌 <i class="iconfont"></i>
       </div>
       <div class="feature_switch">
         特色 <i class="iconfont"></i>
       </div>
     </div>
   </div>
   <clist></clist>
  <tab-bar></tab-bar>
</div>
</template>

<script>
import tabBar from '@/components/tabBar'
import vheader from '@/components/header'
import clist from '@/components/Cilist'
export default {
  name: 'cinema',
data() {
return {

}
},
components: {
  tabBar,
  vheader,
  clist
}
}

</script>
<style  scoped>
#content .cinema_menu{width: 100%; height: 45px; border-bottom: 1px solid #e6e6e6; display: flex; justify-content: space-around; align-items: center;background: white;}

</style>