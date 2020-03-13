<template>
<div id="main">
   <vheader title="mine"></vheader>
   <div id="content">
     <login />
   </div>
  <tab-bar></tab-bar>
</div>
</template>

<script>
import tabBar from '@/components/tabBar'
import vheader from '@/components/header'
import login from '@/components/login'
export default {
  name: 'mine',
  
data() {
return {

}
},
components: {
  tabBar,
  vheader,
  login
}
}
</script>
<style  scoped>
</style>