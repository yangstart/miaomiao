<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    
    </keep-alive>
  </div>
</template>

<style>
*{margin: 0; padding: 0;}
ul, li{list-style: none;}
img{display: block;}
html, body{height: 100%;}
.clearfix:after{content: ''; display: block; clear: both;}
#main{height: 100%;display: flex; flex-direction: column}
#comtent{flex: 1; overflow: hidden; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}
</style>
