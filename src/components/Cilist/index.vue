<template>
  <div class="cinema_body">
    <scroller>
    <ul>
     
      <li v-for=" c in clist" :key="c.id">
        <div>
          <span>{{c.nm}}</span>
          <span class="q"><span class="price">{{c.sellPrice}}</span>元起</span>
        </div>
        <div class="address">
            <span>{{c.addr}}</span>
            <span>{{c.distance}}</span>
        </div>
        <!-- key 请思考 -->
        <div class="card">
           <div v-for=" (t, key) in c.tag" :key="key" v-if="t===1"  :class= "key | formatClass">{{ key | formatCard}}   </div>
           
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
      clist: [],
      prevId : -1
    };
  },
  activated(){
    var cityId = this.$store.state.city.id
    if(cityId === this.prevId){
      return
    }
    this.axios.get('/api/cinemaList?cityId='+cityId).then((res) => {
      var msg = res.data.msg
      if(msg === 'ok'){
        this.clist = res.data.data.cinemas
        this.prevId = cityId
      }
    })
  },
  filters: {
    formatCard(key){
      var card = [
        {key: 'allowRefund', value: '改签'},
        {key: 'endorse', value: '退'},
        {key: 'sell', value: '折扣卡'},
        {key: 'snack', value: '小吃'}
      ]
      for (let i = 0; i < card.length; i++) {
         if(card[i].key == key){
           return card[i].value
         }
        
      }
      return ''
    },

     formatClass(key){
      var card = [
        {key: 'allowRefund', value: 'bl'},
        {key: 'endorse', value: 'bl'},
        {key: 'sell', value: 'or'},
        {key: 'snack', value: 'or'}
      ]
      for (let i = 0; i < card.length; i++) {
         if(card[i].key == key){
           return card[i].value
         }
        
      }
      return ''
    }
  }
};
</script>
<style  scoped>
#content .cinema_body{flex: 1; overflow: auto; }
.cinema_body ul{padding: 20px}
.cinema_body li{border-bottom: 1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{margin-bottom: 10px;}
.cinema_body .q{font-size: 11px; color: #f03d37}
.cinema_body .price{ font-size: 13px; color: #666}
.cinema_body .address{font-size: 13px; color: 3666}
.cinema_body .address span:nth-of-type(2){float: right;}
.cinema_body .card{display: flex;}
.cinema_body .card div{padding: 0; height: 15px; line-height: 15px; border-radius: 2px; color: #f90;}
.cinema_body .card div.or{color: #f90;border: 1px solid #f90;}
.cinema_body .card div.bl{color: #589daf;border: 1px solid #589daf;}
</style>