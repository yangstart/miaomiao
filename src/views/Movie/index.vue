<template>
  <div id="main">
    <vheader title="moive"></vheader>
    <div id="content">
      <div class="movie_menu">
        <router-link tag='div' to="/movie/city" class="city_name">
          <span>大连</span>
          <i class="iconfot"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/commingsoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont">搜索</i>
        </router-link>
      </div>
      <keep-alive>
      <router-view />
      </keep-alive>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import vheader from "@/components/header";
export default {
  data() {
    return {};
  },
  components: {
    tabBar,
    vheader
  }
};
</script>
<style scoped>

#content .movie_menu{ width: 100%; height: 45px; border-bottom: 1px solid #6e6e6e; display: flex; justify-content: space-between;}
.movie_menu .city_name{ margin-left: 20px; height: 100%;line-height: 45px;}
.movie_menu .city_name.active{color: #ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .hot_swtich{display: flex; height: 100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color: #666; width: 80px;text-align: center; margin: 0 12px; font-weight: 700;}
.movie_menu .hot_item_active{ color: #ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .search_entry{ margin-right: 20px; height: 100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .search_entry i {font-size: 24px; color:red;}
.movie_menu .router-link-active{color: #ef4238; border-bottom: 2px solid #ef4238;}
</style>