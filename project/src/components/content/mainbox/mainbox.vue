<template>
  <div id="mainbox">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <!-- <homeindex></homeindex> -->
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
          <!-- demo -->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import homeindex from '../home/home'
export default {
  name: "mainbox",
    data() {
      return {
        fileList: [
          // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ]
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },



}
</script>
<style  scoped>
@import '../../../assets/css/style.css';
/*.border-del{
  border-radius: 5px;
}*/
/*ele组件修改密码s*/
.classify1{
  margin-bottom: 15px;
}
#con-submit,#con-cancel{
  width:100px;
  margin-left:100px;
}
#con-cancel{
  margin-left:30px;
}
.btn-default{
  border:1px solid #2baab1;
  background:#2baab1;
  color:#fff;
  margin-bottom: 15px;
}
.btn-group>.dropdown-toggle{
   border-radius: 4px;
 }
.btn-default:hover{
  background:#32c5cd;
}
.btn-group .control-label{
  color:#2baab1;
}
.field{
  padding:5px;
  font-size:14px;
}
.fileedit{
  width: 15px;
  height: 15px;
  vertical-align: -3px;
  margin-right: 5px;
}
.border-del{
  border-radius: 5px;
}
#classify-submit,#classify-cancel{
  width:100px;
  margin-left:100px;
}
#classify-cancel{
  margin-left:30px;
}
.editinput,#editinput{
  width:80%;
}
.el-button--primary{
  background: #2baab1;
  border: 1px solid #26969c;
}
.el-button--primary:hover{
  background:#32c5cd;
}
.upload-demo{
  margin-left:100px;
}
.el-upload{
  float: left;
}
.el-upload__tip{
  width:30%;
  float:left;
}
/*修改密码e*/
</style>
