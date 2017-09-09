<template>
  <div id="hometab">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 内容列表</span></div>
            <div class="tab_addCon">
              <button class="btn btn-success" id="add_but"><router-link to="/singlepage" style="color:#fff">添加内容</router-link></button>
            </div>
            <table class="table table-hover text-center">
                <thead>
                  <th width="10%">ID</th>
                  <th width="20%">图片</th>
                  <th width="15%">名称</th>
                  <th width="20%">描述</th>
                  <th width="10%">排序</th>
                  <th width="15%">操作</th>
                </thead>
                <tbody>
                  <tabtr @tabChildDel="partabDel"  @childTabEdit="parTabEdit"  @childEditshow="pEditshow" v-for="(val,key) in tabData" :pVal="val" ></tabtr>
                </tbody>
              </table>
              <div class="page">
                <!-- <span class="demonstration">完整功能</span> -->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="pagesizes"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="len">
                </el-pagination>
              </div>
          </div>
          <div class="design smart-widget widget-dark-blue" id="edit" v-show="editshow">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>修改内容</span></div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">标题：</label>
              <input type="text" class="form-control title" id="inputSuccess1" aria-describedby="helpBlock2" :value="editData.title">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">URL：</label>
              <input type="text" class="form-control url" id="inputSuccess1" aria-describedby="helpBlock2" :value="editData.url">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess2">图片：</label>
              <el-upload
                class="upload-demo img"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
              >
                <el-button size="small" type="primary" id="picload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess3">描述：</label>
              <textarea class="form-control desc" rows="5" id="inputSuccess3" :value="editData.desc"></textarea>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">排序：</label>
              <input type="text" class="form-control sort" id="inputSuccess1" aria-describedby="helpBlock2" :value="editData.sort">
            </div>
            <button class="btn btn-success btn-sm no-shadow" id="tab-submit" @click="submit">提交</button>
            <button class="btn btn-success btn-sm no-shadow" id="tab-cancel" @click="cancel"><router-link to="/hometab">取消</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tabtr from './homeTable'
import $ from 'jquery'
export default {
  name: "hometab",
  components: {
    tabtr
  },
  mounted(){
    if(localStorage.getItem('singleData')){
      this.tabOldData = JSON.parse(localStorage.getItem('singleData'));
    }else{
      this.tabOldData = [
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
      ]
    }
    //数据总长度
    this.len = this.tabOldData.length;
    //切换每页显示几条
    this.pagesizes=[5,20,50,100];
    //一页8条
    this.pagesize = this.pagesizes[0];
    //起始页
    this.start = (this.currentPage-1)*this.pagesize;
    //结束页
    this.end = this.start+this.pagesize;
    //通过
    for(let i =this.start;i<this.end;i++){
      this.tabOldData?this.tabData.push(this.tabOldData[i]):[];
    }
  },
  data() {
    return {
      fileList: [],
      tabOldData:[],
      tabData:[],
      editData:{},
      oldeditData:{},
      editImg:'',
      editshow:false,
      //默认起始页是第一页
      currentPage:1,
      //数据总长度
      len:0,
      //页数调整
      pagesizes:[],
      //每页显示的条数
      pagesize:0,
      //起始位置
      start:0,
      //结束位置
      end:0
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleChange(file) {
      this.editImg = file.url;
    },
    partabDel(val,ev){
      this.tabData=this.tabData.filter(e=>e.id != val)
      this.tabOldData=this.tabOldData.filter(e=>e.id != val)
      localStorage.setItem('singleData',JSON.stringify(this.tabOldData))
    },
    parTabEdit(val){
      this.oldeditData=Object.assign(val);
      this.editData =Object.assign(val);
    },
    submit(){
        this.tabOldData.forEach(e=>{
          if(e.id==this.editData.id){
            e.title = $('.title').val();
            e.url = $('.url').val();
            e.img = this.editImg;
            e.desc = $('.desc').val();
            e.sort = $('.sort').val();
          }
        })
        localStorage.setItem('singleData',JSON.stringify(this.tabOldData))
        this.editData = {};
        this.editshow = false;
    },
    cancel(){
      this.editData={};
      this.editshow = false;
    },
    pEditshow(bool){
      this.editshow = bool;
      console.log(this.editshow);
    },
    handleSizeChange(val) {
      //  console.log(`每页 ${val} 条`);
       this.pagesize = val;
       //起始页
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
     },
     handleCurrentChange(val) {
       this.len = this.tabOldData.length;
       this.currentPage = val;
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
      //  console.log(`当前页: ${val}`);
    }
  },
  watch:{
    currentPage:function(){
        this.tabData=[];
        if(this.end>this.len){
          this.end = this.len;
        }
        // console.log(this.start,this.end);
        //通过
        for(let i =this.start;i<this.end;i++){
          this.tabOldData?this.tabData.push(this.tabOldData[i]):[];
        }

    },
    pagesize:function(){
      this.tabData=[];
      if(this.end>this.len){
        this.end = this.len;
      }
      // console.log(this.start,this.end);
      //通过
      for(let i =this.start;i<this.end;i++){
        this.tabOldData?this.tabData.push(this.tabOldData[i]):[];
      }
    }
  }
}
</script>
<style  scoped>
.page{
  width:100%;
  height:40px;
  overflow: hidden;
  position: relative;
}
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #48576a;
  width: 50%;
  position: absolute;
  right: 0;
  text-align: center;
}
.block{
  margin:0 50%;
}
#tab-cancel a{
  color:#fff;
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
.tab_addCon{
	margin-bottom:10px;
}
#add_but,#homTab_btn,#checkAll,#delAll{
	width: 80px;
	height: 40px;
	margin-left: 0;
	font-size:14px;
}
.table>tbody>tr>td,.table>thead>tr>th{
	font-family: "微软雅黑";
	vertical-align: middle;
	text-align: center;
}
.button{
	padding: 10px 15px;
}
.button-group{
	width: 150px;
	height: 40px;
	line-height: 40px;
	vertical-align: middle;
}
.border-edit{
	border:1px #2baab1 solid;
	border-radius: 5px;
	border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
	color:#2baab1;
	border-right: 0;
}
.border-edit:hover{
	background:#2baab1 ;
	color: #fff;
}
.border-del{
	border:1px red solid;
	border-radius: 5px;
	color:red;
	margin-left: -4px;
	border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
}
.border-del:hover{
	background:red ;
	color: #fff;
}
#homTab_btn{
	margin-left: 10%;
}
#delAll{
	background: red;
}
.pagelist {
	padding:10px 0;
	text-align:center;
}
.pagelist span,.pagelist a{
	border-radius:3px;
	border:1px solid #dfdfdf;
	display:inline-block;
	padding:5px 12px;
}
.pagelist a{
	margin:0 3px;
}
.pagelist span.current{
	 background:#09F;
	 color:#FFF;
	 border-color:#09F;
	  margin:0 2px;
}
.pagelist a:hover{
	background:#09F;
	color:#FFF;
	border-color:#09F;
}
.pagelist label{
	padding-left:15px;
 	color:#999;
}
.pagelist label b{
	color:red;
	font-weight:normal;
	 margin:0 3px;
}
#tab-submit,#tab-cancel{
  width:100px;
  margin-left:100px;
}
#tab-cancel{
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
