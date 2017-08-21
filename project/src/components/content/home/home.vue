<template>
  <div id="homeindex">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="row m-top-md">
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-danger m-bottom-md">
                <div class="statistic-title">内容分类</div>
                <div class="statistic-value">5</div>
                <div class="m-top-md">11% Higher than last week</div>
                <div class="statistic-icon-background">
                  <i class="ion-eye"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-info m-bottom-md">
                <div class="statistic-title">留言条目</div>
                <div class="statistic-value">751</div>
                <div class="m-top-md">8% Higher than last week</div>
                <div class="statistic-icon-background">
                  <i class="ion-ios7-cart-outline"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-purple m-bottom-md">
                <div class="statistic-title">首页条目</div>
                <div class="statistic-value">129</div>
                <div class="m-top-md">3% Higher than last week</div>
                <div class="statistic-icon-background">
                  <i class="ion-person-add"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="statistic-box bg-success m-bottom-md">
                <div class="statistic-title">网站总量</div>
                <div class="statistic-value">11110</div>
                <div class="m-top-md">7% Higher than last week</div>
                <div class="statistic-icon-background">
                  <i class="ion-stats-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div id="chart1" style="height:350px;background:pink;">图表1</div>
            </div>
            <div class="col-md-6">
                <div id="chart2" style="height:350px;background: skyblue;">图表2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeindex",
  data: () => ({

  })
}
</script>
<style  scoped>
</style>
