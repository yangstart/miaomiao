<template>
  <div class="movie_body">
    <scroller :HandleToTouchEnd="HandleToTouchEnd" :HandleToScroll="HandleToScroll">
    <ul>
      <li class="pullClass">{{pullDownMsg}}</li>
      <li v-for="m in movieList" :key="m.id" @tap="handleDetail(m.id)">
        <div class="pic_show">
          <img :src="m.img | setWH('128.180')" alt />
        </div>
        <div class="info_list">
          <h2>{{m.nm}}</h2>
          <p>
            观众评
            <span class="grade">{{m.sc}}</span>
          </p>
          <p>主演： {{m.star}}</p>
          <p>{{m.showInfo}}</p>
        </div>
        <div class="btn_mail">购票</div>
      </li>
    </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [],
      pullDownMsg: "",
      prevCityId: -1
    };
  },
  
  activated() {
    var cityId = this.$store.state.city.id
    if (cityId === this.prevCityId){
      return
    }

    this.axios.get("/api/movieOnInfoList?cityId="+ cityId).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        this.prevCityId = cityId
      }
    });
  },
  methods: {
    HandleToScroll(pos){
       if (pos.y > 30) {
              this.pullDownMsg = "正在更新中";
            }
    },
    HandleToTouchEnd(pos){
      if(pos.y>30){
        this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
        var msg = res.data.msg
      if (msg === 'ok'){
        this.pullDownMsg = '更新成功'
          setTimeout(() => {
          this.pullDownMsg =''
        }, 2000);
        this.movieList = res.data.data.movieList
        }
        })
      }
    },
    handleDetail(id){
      this.$router.push(`/movie/detail/1/${id}`)
    }
  }
};
</script>
<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
  height: 500px;
}
.movie_body ul {
  margin: 0 12px;
}
.movie_body ul li {
  margin-top: 2px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mail,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
.movie_body .pullClass{
  margin: 0; padding:0; border: none;
}
</style>