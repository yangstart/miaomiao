<template>
<div class="search_body">
    <div class="search_input">
        <div class="search_input_wrapper">
            <i class="iconfont"></i><input type="text" v-model="message">
        </div>
    </div>
    <div class="search_result">
        <h3>电影/电视剧/综艺</h3>
        <ul>
            <!-- <li>
                <div class="img"><img src="" alt=""></div>
                <div class="info">
                    <p><span>无名之辈</span><span>8.5</span></p>
                    <p>A Cool Fish</p>
                    <p>剧情喜剧， 犯罪</p>
                    <p>2018-11-16</p>
                </div>
            </li> -->
            <li v-for="movie in datalist" :key="movie.id">
                <div class="img"><img :src="movie.img | setWH('128.180')" alt=""></div>
                <div class="info">
                    <p><span>{{movie.nm}}</span><span>{{movie.sc}}</span></p>
                    <p>{{movie.enm}}</p>
                    <p>{{movie.cat}}</p>
                    <p>{{movie.rt}}</p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
data() {
return {
    message: '',
    datalist: []
}
},
methods:{
    cancleRequest(){
        if (typeof this.source === 'function'){
            this.source('终止请求')
        }
    }
},
watch: {
   
    message(newdata){
       var cityId = this.$store.state.city.id
        this.axios.get('/api/searchList?cityId='+cityId+'&kw='+newdata).then((res) => {
            var msg = res.data.msg
            var movies = res.data.data.movies
            if(msg && movies){
                this.datalist = movies.list
            }
        })
    }
}
}
</script>
<style  scoped>
#content.search_body{flex: 1; overflow: auto;}
.search_body .search_input{padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{padding: 0px 10px; background-color: #fff; border: 1px solid #e6e6e6; border-radius: 5px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none;}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6}
.search_body .search_result li{ border-bottom: 1px dashed #c9c9c9; padding: 10px 15px; box-sizing: border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float: left;}
.search_body .search_result .img img{ width: 100%;}
.search_body .search_result .info{float: left; margin-left: 15px; flex: 1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){font-size: 18px; flex: 1;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){font-size: 16px; color: #fc7101}
</style>