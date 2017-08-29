<template>
  <div id="classify">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 分类列表</span></div>
            <div class="tab_addCon">
              <button class="btn btn-success" id="add_but" ><router-link to="/addClassify">添加内容</router-link></button>
            </div>
            <table class="table table-hover text-center">
                <thead>
                  <th width="25%">ID</th>
                  <th width="25%">一级分类</th>
                  <th width="25%">排序</th>
                  <th width="80px">操作</th>
                </thead>
                <tbody>
                  <tr v-for="val in classifyTab">
                    <td>{{val.id}}</td>
                    <td>{{val.title}}</td>
                    <td>{{val.sort}}</td>
                    <td><div class="button-group">
                    <a class="button border-edit" href="javascript:void(0)"  @click="edit(val)">修改</a>
                    <a class="button border-del" href="javascript:void(0)" @click='del(val)' >删除</a>
                  </div></td>
                </tr>
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
          <classify-edit
              @childEditdata="pEditdata"
              @changeEditshow="pEditshow"
              :pData="editData"
              v-show="editshow"
          ></classify-edit>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addClassify from './addClassify'
import classifyEdit from './classifyEdit'
// import bootpage from '../../content/bootpage/bootpage'
export default {
  name: "classify",
  components:{
    classifyEdit,
    // bootpage
  },
  mounted() {
    if(localStorage.getItem('classifyData')){
      this.classoldTab = JSON.parse(localStorage.getItem('classifyData'));
    }
    //数据总长度
    this.len = this.classoldTab.length;
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
      this.classoldTab?this.classifyTab.push(this.classoldTab[i]):[];
    }
    console.log(this.start,this.end);
    console.log(this.classifyTab.length);
    console.log(this.classifyTab);
  },
  data(){
    return{
      //通过localStorage拿到的数据，用于操作分页
      classoldTab:[],
      //操作分页后的数组，用于渲染页面
      classifyTab:[],
      editshow:false,
      editData:{},
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
    del(val) {
      this.classifyTab=this.classifyTab.filter(e=>e.id !=val.id)
      localStorage.setItem('classifyData',JSON.stringify(this.classifyTab))
    },
    edit(val){
      this.editData = Object.assign(val);
      this.editshow = true;
    },
    pEditdata(data){
      this.classifyTab.forEach((e,i)=>{
        if(e.id == data.id){
          this.classifyTab.splice(i,1,data)
        }
      })
      // localStorage.setItem('classifyData',JSON.stringify(this.classifyTab))
    },
    pEditshow(bool){
      this.editshow = bool;
    },
    handleSizeChange(val) {
      //  console.log(`每页 ${val} 条`);
       this.pagesize = val;
       //起始页
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
      //  console.log(this.pagesize,this.currentPage);
     },
     handleCurrentChange(val) {
       this.currentPage = val;
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
      //  console.log(`当前页: ${val}`);
    }
  },
  watch:{
    currentPage:function(){
        this.classifyTab=[];
        if(this.end>this.len){
          this.end = this.len;
        }
        // console.log(this.start,this.end);
        //通过
        for(let i =this.start;i<this.end;i++){
          this.classoldTab?this.classifyTab.push(this.classoldTab[i]):[];
        }
    },
    pagesize:function(){
      this.classifyTab=[];
      if(this.end>this.len){
        this.end = this.len;
      }
      // console.log(this.start,this.end);
      //通过
      for(let i =this.start;i<this.end;i++){
        this.classoldTab?this.classifyTab.push(this.classoldTab[i]):[];
      }
    }
  }
}
</script>
<style scoped>
/*添加内容*/
.block{
  margin:0 50%;
}
#add_but a{
  color:#fff;
}
.tiptitle{
  display:inline-block;
  vertical-align: middle;
  padding:8px;
}
#inputSuccess11,#inputSuccess1{
  width:50%;
}
.classify1{
  margin-bottom: 15px;
}
#classify-submit,#classify-cancel{
  width:100px;
  margin-left:100px;
}
#classify-cancel{
  margin-left:30px;
}
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
</style>
