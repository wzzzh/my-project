<template>
  <div id="brog">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 留言列表</span></div>
            <div class="tab_addCon">
              <button
                class="btn btn-success"
                id="checkAll"
                @click="checkAll"
                >全选</button>
              <button
                class="btn btn-success"
                id="delAll"
                @click="delAll"
              >批量删除</button>
            </div>
            <table class="table table-hover text-center">
              <thead>
                <tr>
                      <th width="6%">ID</th>
                      <th width="6%">姓名</th>
                      <th>电话</th>
                      <th>邮箱</th>
                      <th>其他</th>
                      <th width="25%">内容</th>
                       <th width="10%">留言时间</th>
                      <th>操作</th>
                  </tr>
              </thead>

                <tbody>
                  <broglist  @delData="pdelData" v-for="val in brogData2" :pVal="val"></broglist>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import broglist from './broglist'
export default {
  name: "brog",
  components: {
    broglist
  },
  mounted(){
    	this.$ajax.get('http://brog.cn').then((response) =>{
        var data = response.data.array;
        this.brogData = data;
        localStorage.setItem('borgData',JSON.stringify(this.brogData))
        this.pagesizes=[5,20,50,100];
        //一页8条
        this.pagesize = this.pagesizes[0];
      })
  },
  data(){
    return{
      doData:[],
      brogData:[],
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
      end:0,
      all:false,
      delAllstatus:false,
      delStatues:false,
      delId:0,

    }
  },
  methods:{
    handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
       this.pagesize = val;
       //起始页
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
     },
     handleCurrentChange(val) {
       this.currentPage = val;
       this.all = false;
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
      //  console.log(`当前页: ${val}`);
    },
    checkAll(){
      this.all = !this.all;
    },
    delAll(){
      this.delAllstatus = true;
    },
    pdelData(val){
      this.delId=val.id;
      this.delStatues = true;
    }
  },
  computed:{
    brogData2:function(){
      var data = [...this.brogData];
      if(data){
        data.forEach(e=>{
          let newTel = e.tel.toString().split('.').join('');
          e.tel = newTel;
        })
      }
      var newData=[];
      this.len = data.length;
      //起始页
      this.start = (this.currentPage-1)*this.pagesize;
      //结束页
      this.end = this.start+this.pagesize;
      if(this.end>this.len){
          this.end = this.len;
        }
      for(let i =this.start;i<this.end;i++){
        data?newData.push(data[i]):[];
      }

      //全选
      newData.forEach(e=>{
        e.checked = this.all;
      })
      if(this.delAllstatus){
        newData = newData.filter(e=>!e.checked);
        data=data.filter(e=>!e.checked);
        this.brogData=this.brogData.filter(e=>!e.checked);
        localStorage.setItem('borgData',JSON.stringify(data))
        this.delAllstatus = false;
      }
      if(this.delStatues){
        newData = newData.filter(e=>e.id !=this.delId);
        data=data.filter(e=>e.id !=this.delId);
        this.brogData=this.brogData.filter(e=>e.id !=this.delId);
        localStorage.setItem('borgData',JSON.stringify(data))
        this.delAllstatus = false;
      }
      return newData
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
th{
  text-align: center
}
.border-del{
  border-radius: 5px;
}
</style>
