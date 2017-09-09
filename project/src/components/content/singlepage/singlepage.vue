<template>
  <div id="singlepage">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>添加首页轮播内容</span></div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">标题：</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2" v-model="initsingleData.title">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">URL：</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2" v-model="initsingleData.url">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess2">图片：</label>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change='handleChange'
                :file-list="fileList">
                <el-button size="small" type="primary" id="picload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess3">描述：</label>
              <textarea class="form-control" rows="5" id="inputSuccess3" v-model="initsingleData.desc"></textarea>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">排序：</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2" v-model="initsingleData.sort">
            </div>
            <button class="btn btn-success btn-sm no-shadow" id="sigle-submit" @click="submit">提交</button>
            <button class="btn btn-success btn-sm no-shadow" id="sigle-cancel" @click="cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "singlepage",
  mounted() {
    localStorage.setItem('singleData',JSON.stringify(this.singleData));
    this.singleData = JSON.parse(localStorage.getItem('singleData'));
  },
  data() {
    return {
      fileList: [],
      initsingleData:{
        title:'',
        url:'',
        img:'',
        desc:'',
        sort:''
      },
      singleData:[
        {
          id:1,
          img:'http://s10.mogucdn.com/mlcdn/c45406/170901_7kgfle362g65db0f24jbk8gf6cjfi_778x440.jpg_900x9999.v1c7E.70.webp',
          title:'周末大放价，U质团',
          desc:'9.9元秒杀，周末大放送',
          sort:10
        },
        {
          id:2,
          img:'http://s10.mogucdn.com/mlcdn/c45406/170831_479g0ifl6f2i313feb5ech46kek21_778x440.jpg_900x9999.v1c7E.70.webp',
          title:'开学焕新',
          desc:'精选专题，newshow',
          sort:5
        },
        {
          id:3,
          img:'http://s10.mogucdn.com/mlcdn/c45406/170901_5if63ia64j4geeh60c4cb7e3cgej7_778x440.jpg_900x9999.v1c7E.70.webp',
          title:'不buy不痛快',
          desc:'7折抢购，尚秀周',
          sort:10
        },
        {
          id:4,
          img:'http://s10.mogucdn.com/mlcdn/c45406/170804_32200he12l9celh2gc0ef10k1hcfe_778x440.jpg_900x9999.v1c7E.70.webp',
          title:'好评聚集地',
          desc:'人气口碑馆，享你所想',
          sort:2
        },
        {
          id:5,
          img:'http://s10.mogucdn.com/mlcdn/c45406/170831_0g67146llaiia09aj98f8c4dhe1gj_1920x316.jpg_999x999.v1c0.70.webp',
          title:'每日穿搭',
          desc:'每日教你穿搭让你变更美',
          sort:18
        },
      ],
    }
  },
  methods: {
    //图片状态发生改变时触发
    handleChange(file){
      console.log(file);
      this.initsingleData.img = file.url;
    },
    //提交
    submit(){
      let max = maxId(this.singleData)
      this.singleData.unshift({
        id:++max,
        title:this.initsingleData.title,
        url:this.initsingleData.url,
        img:this.initsingleData.img,
        desc:this.initsingleData.desc,
        sort:this.initsingleData.sort
      })
      localStorage.setItem('singleData',JSON.stringify(this.singleData))
      this.initsingleData.title=this.initsingleData.url=this.initsingleData.img=this.initsingleData.desc=this.initsingleData.sort='';
    },
    cancel(){
      this.initsingleData.title=this.initsingleData.url=this.initsingleData.img=this.initsingleData.desc=this.initsingleData.sort='';
    }
  },
}
function maxId(data){
    let max = 0;
    data.forEach(e=>{
      if(max<e.id){
        max = e.id
      }
    })
    return max;
}

function getItem(data){
  return JSON.parse(localStorage.getItem('data')) || [];
}
</script>
<style  scoped>

.design{
	padding:20px 20px;
}
label{
	width: 100px;
	padding-top:7px;
	padding-right: 10px;
	text-align: right;
	float: left;
}
.form-control{
	width: 80%;
	float: left;
}
#inputSuccess2{
	width:50%;
}
#btn-chat1{
	width:80px;
	height: 34px;
	margin-left: 20px;
	font-size:14px;
}
.smart-widget.widget-dark-blue .smart-widget-header{
	margin-bottom: 15px;
}
.btn.btn-success{
	width:200px;
	height: 50px;
	margin-left: 30%;
	font-size:18px;
}
.sidebar-menu .main-menu ul li a .submenu-icon:before{
	content: '';
}
.iconfont {
	line-height: 16px;
}
#sigle-submit,#sigle-cancel{
  width:100px;
  margin-left:100px;
}
#sigle-cancel{
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
</style>
