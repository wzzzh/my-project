<template>
  <div id="homeindex">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="row m-top-md">
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-danger m-bottom-md">
                <div class="statistic-title">内容分类</div>
                <div class="statistic-value">{{classify.con}}</div>
                <div class="m-top-md">比上周增加{{classify.per}}%</div>
                <div class="statistic-icon-background">
                  <i class="ion-eye"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-info m-bottom-md">
                <div class="statistic-title">留言条目</div>
                <div class="statistic-value">{{brog.con}}</div>
                <div class="m-top-md">比上周增加{{brog.per}}%</div>
                <div class="statistic-icon-background">
                  <i class="ion-ios7-cart-outline"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-purple m-bottom-md">
                <div class="statistic-title">首页条目</div>
                <div class="statistic-value">{{sy.con}}</div>
                <div class="m-top-md">比上周增加{{sy.per}}%</div>
                <div class="statistic-icon-background">
                  <i class="ion-person-add"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-success m-bottom-md">
                <div class="statistic-title">网站总量</div>
                <div class="statistic-value">{{webtotal.con}}</div>
                <div class="m-top-md">比上周增加{{webtotal.per}}%</div>
                <div class="statistic-icon-background">
                  <i class="ion-stats-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div id="chart1" style="height:350px">
                  <echart1></echart1>
                </div>
            </div>
            <div class="col-md-6">
                <div id="chart2" style="height:350px;background: skyblue;">
                  <echart2></echart2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echart1 from './echart1';
import echart2 from './echart2';
export default {
  name: "homeindex",
  components: {
    echart1,
    echart2
  },
  mounted() {
    //do something after mounting vue instance
    console.log(1);
    if(localStorage.getItem('classifyData')){
      this.classify.con = JSON.parse(localStorage.getItem('classifyData')).length;
      this.classify.per = Math.round(Math.random()*(20-10)+10)
    }
    if(localStorage.getItem('brogData')){
      this.brog.con = JSON.parse(localStorage.getItem('brogData')).length;
      this.brog.per = Math.round(Math.random()*(20-10)+10)
    }
    if(localStorage.getItem('singleData')){
      this.brog.con = JSON.parse(localStorage.getItem('singleData')).length;
      this.brog.per = Math.round(Math.random()*(20-10)+10)
    }

  },
  data(){
    return{
      classify:{
        con:5,
        per:11
      },
      brog:{
        con:30,
        per:7
      },
      sy:{
        con:10,
        per:2
      },
      webtotal:{
        con:3308,
        per:10
      }

    }
  },
}
</script>
<style  scoped>
</style>
