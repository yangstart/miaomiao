<template>
  <div class="movie_body">
    <scroller>
    <ul>
      <li v-for="m in commingSoon" :key=m.id>
        <div class="pic_show">
          <img :src="m.img | setWH('128.180')" alt />
        </div>
        <div class="info_list">
            <h2>{{m.nm}}</h2>
            <p> <span class="person">{{m.wish}}</span> 人想看</p>
            <p>主演： {{m.star}}</p>
            <p>{{m.rt}}上映</p>
        </div>
        <div class="btn_mail">
            预售
        </div>
      </li>
    </ul>
    </scroller>
  </div>
</template>

<script>
export default {
data() {
return {
  commingSoon: [],
  prevCityId: -1

}
},
 activated(){
    var cityId = this.$store.state.city.id
    if (cityId === this.prevCityId){
      return
    }
    this.axios.get('/api/movieComingList?cityId='+cityId).then(res => {
      var msg = res.data.msg
      if(msg === 'ok'){
        this.commingSoon = res.data.data.comingList
        this.prevCityId = cityId
      }
    })
  }
}
</script>
<style  scoped>
#content .movie_body{flex: 1; height: 500px; overflow: auto;}
.movie_body ul{margin: 0 12px; overflow: hidden;}
.movie_body ul li{margin-top: 2px; display: flex; align-items: center; border-bottom: 1px solid #e6e6e6; padding-bottom: 10px;}
.movie_body .pic_show{width: 64px; height: 90px;}
.movie_body .pic_show img{ width: 100%;}
.movie_body .info_list{ margin-left: 10px; flex: 1; position: relative;}
.movie_body .info_list h2{font-size: 17px; line-height: 24px; width: 150px;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width: 200px; overflow: hidden;  white-space: nowrap; text-overflow: ellipsis;}
.movie_body .info_list .grade{font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{width: 50px; position: absolute; right: 10px;top: 5px;}
.movie_body .btn_mail, .movie_body .btn_pre{width: 47px; height: 27px; line-height: 28px; text-align: center; background-color: #f03d37; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{background-color: #3c9fe6;}
</style>