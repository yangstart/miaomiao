<template>
<div id="detailContrainer" class="slide-enter-active">
    <vheader title="影片详情">
        <i @touchstart=handleBack>返回</i>
    </vheader>
    <div id="content" class="contentDetail">
        <div class="detail_list">
            <div class="detail_list_bg"></div>
            <div class="detail_list_filter"></div>
            <div class="detail_list_content">
                <div class="detail_list_img">
                    <img :src="detailMovie.img | getImg('110.160')">
                </div>
                <div class="detail_list_info">
                    <h2>{{detailMovie.nm}}</h2>
                    <p>{{ detailMovie.enm}}</p>
                    <p>{{detailMovie.sc}}</p>
                    <p>{{detailMovie.cat}}</p>
                    <p>{{detailMovie.src}} / {{detailMovie.dur}}分钟</p>
                    <p>{{detailMovie.pubDesc}}</p>
                </div>

            </div>

        </div>
        <div class="detail_info">
            <p>{{detailMovie.dra}}</p>
        </div>
        <div class="detail_player swiper-container" ref="swiper" >
            <ul v-for="(img, index) in detailMovie.photos" :key=index class="swiper-wrapper">
                <div class="swiper-slide">
                    <div>
                        <img :src="img | setWH('300.300')" alt="">
                    </div>
                  
                </div>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import vheader from '@/components/header'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
export default {
    props:['movieId'],

    data() {
        return {
            detailMovie: {}
        }
    },
components:{
    vheader
},
filters:{
    getImg(url, arg){
         return url.replace(/w\.h/,arg)
    }
},
methods:{
    handleBack(){
        this.$router.back()
    }
},
mounted(){
   this.axios.get('/api/detailmovie?movieId='+ this.movieId).then(res => {
       if (res.data.msg == 'ok'){ 
           this.detailMovie = res.data.data.detailMovie
           this.$nextTick(() => {
           new Swiper(this.$refs.swiper, {
                slidesPerView: 'auto',
                freeMode: true,
                freeModeSticky:true
        })
           })
       }
   })
}
}
</script>

<style>

#detailContrainer{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: white;
}
#detailContrainer .contentDetail{display: block; margin-bottom: 0;}
#detailContrainer .detail_list{height: 200px;width: 100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width: 100%; height: 100%; background: url() ; filter: blur(20px)}
.detail_list .detail_list_filter{width: 100%; height: 100%; background: #40454d; position: absolute;  opacity: 0.4   }
.detail_list .detail_list_content{display: flex; width: 100%; height: 100%; position: absolute; left: 0;top: 0;}
.detail_list .detail_list_img{width: 108px; height: 150px; border: 1px solid #f0f2f3; margin: 20px;}
.detail_list .detail_list_img img{ width: 100%; height: 100%;}
.detail_list .detail_list_info{margin-top: 20px; }
.detail_list .detail_list_info h2{margin-top: 20px; }
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color: #ccc; }
.slide-enter-active{ animation: .3s moveslide;}
@keyframes moveslide{
   0%{transform: translateX(100%)}
   100%{transform: translateX(0)}
}
.swiper-wrapper{
    width: 100%;
    /* height: 30px; */
    float: left;

}
.swiper-wrapper img{
    width: 100%;
    /* height: 30px; */
    float: left;

}
/* .detail_intro{padding: 10px;}
.detail_player{margin: 20px;}
.swiper-wrapper{float: left;}
.detail_player .swiper_slide{width: 70px; margin-right: 20px; text-align: center; font-size: 14px; float: left;}
.detail_player .swiper_slide img{ width: 100px; margin-bottom: 5px;}
.detail_player .swiper_slide p:nth-last-of-type(2){color: #999} */
</style>