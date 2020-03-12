<template>
<div class="city_body">
    <div class="city_list">
        <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
                <li>上海</li>
                <li>上海</li>
                <li>上海</li>
                <li>上海</li>
                <li>上海</li>
                <li>上海</li>
            </ul>
        </div>
        <div class="city_sort">
            <div>
                <h2>A</h2>
                <ul>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li><li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                    <li>阿拉善盟</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="city_index">
        <ul>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
data() {
return {
    hot: [],
    sortList: [],
    list:[]
}
},
mounted(){
    this.axios.get('/api/cityList').then((res) => { 
    if (res.data.msg == 'ok'){
        this.list = res.data.data.cities
        this.fotmat(this.list)
    }
    })
    
},
methods:{
   fotmat(cities){
       var citylist = []
       var hot = []
       for( var i=0; i< cities.length; i++){
           var firstLetter = cities[i].py.substring(0,1).toUpperCase()
           
           if(toCom(firstLetter)){
               citylist.push({index:firstLetter, list: [{id: cities[i].id, nm: cities[i].nm}]})
           }else{
               for (let j = 0; j < citylist.length; j++) {
                   if(citylist[j].index === firstLetter){
                       citylist[j].list.push({id: cities[i].id, nm: cities[i].nm})
                   }
               }
           }
       }
    citylist.sort((n1,n2) => {
        if(n1.index>n2.index){
            return 1
        }else if(n1.index<n2.index){
            return -1;
        }else{
            return 0;
        }
    })

        function toCom(letter){
            for(var i=0;i<citylist.length; i++){
                if(citylist[i].index === letter){
                    return false
                }
            }
            return true
        }
            console.log(citylist)

   },
  
}
}
</script>
<style  scoped>
#content .city_body{margin-top: 100px; display: flex; width: 100%; position: absolute; top: 0;bottom: 0;}
.city_body .city_list{ flex: 1; overflow: auto; background: #fff5f0;}
.city_body .city_list::-webkit-scrollbar{background-color: transparent; width: 0;}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px;  line-height: 10px; font-size: 14px; background: #f0f0f0; font-weight: normal;}
.city_body .city_hot ul li{float: left; background: #fff; width: 29%; height: 33px;margin-top: 15px; margin-left: 3%; padding: 0 4px ; border: 1px solid #e6e6e6; border-radius: 3px;line-height: 33px;text-align: center;box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left:15px; line-height: 30px;  font-size: 14px; background: #f0f0f0; font-weight: normal;}
.city_body .city_sort ul{  padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px;}
.city_body .city_index{ width: 20px; display: flex;flex-direction: column; justify-content: center;text-align: center;border-left: 1px solid #e6e6e6;}

</style>