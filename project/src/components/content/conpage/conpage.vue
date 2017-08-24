<template>
  <div id="conpage">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header">
              <span class="text m-left-sm">
                <i class="icon iconfont icon-ziliaoshouce-xianxing"></i> 内容管理</span>
            </div>
            <div class="padding border-bottom">
              <ul class="search" style="padding-left:10px;">
                <li> <button class="btn btn-success" id="checkAll"><router-link to="/addcon">添加内容</router-link></button></li>
                <li>搜索：</li>
                <li>
                  首页
                  <select name="s_ishome" class="input" @change="attr1($event)">
                    <option value="">选择</option>
                    <option value="1">是</option>
                    <option value="0">否</option>
                  </select>
                  &nbsp;&nbsp;
                  推荐
                  <select name="s_isvouch" class="input" @change="attr2($event)">
                    <option value="">选择</option>
                    <option value="1">是</option>
                    <option value="0">否</option>
                  </select>
                  &nbsp;&nbsp;
                  置顶
                  <select name="s_istop" class="input" @change="attr3($event)">
                    <option value="">选择</option>
                    <option value="1">是</option>
                    <option value="0">否</option>
                  </select>
                </li>
                  <li>
                    分类
                    <select name="cid" class="input" style="width:120px; " v-model="selected" @change="classSel($event)">
                      <option v-for="option in options" :value="option">{{option.txt}}</option>
                    </select>
                  </li>
                </if>
                <li>
                  <input type="text" placeholder="请输入搜索关键字" name="keywords" class="input" style="width:200px; line-height:17px;display:inline-block" />
                  <a href="javascript;" class="button searchbtn"  > 搜索</a></li>
              </ul>
            </div>
            <!--  table-->
            <table class="table table-hover text-center">
              <tr>
                <th width="6%" style="text-align:left; padding-left:20px;">ID</th>
                <th width="10%">排序</th>
                <th>图片</th>
                <th width="20%">名称</th>
                <th width="6%">属性</th>
                <th width="10%">分类名称</th>
                <th width="10%">更新时间</th>
                <th width="20%">操作</th>
              </tr>
                <tr v-for="val in tablist">
                  <td style="text-align:left; padding-left:20px;">
                    <input type="checkbox" name="id[]" v-model="val.checked"/>
                   {{val.id}}
                 </td>
                  <td><input type="text" name="sort[1]" :value="val.sort" style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" /></td>
                  <td width="10%"><img :src="val.img" alt="" width="70" height="50" /></td>
                  <td>{{val.title}}</td>
                  <td><font color="#00CC99">{{val.attr}}</font></td>
                  <td>{{val.classTitle}}</td>
                  <td>{{val.time}}</td>
                  <td>
                    <div class="button-group">
                      <a class="button border-edit" href="javascript:;"> 修改</a>
                      <a class="button border-del" href="javascript:;" @click="del(val)"> 删除</a>
                    </div>
                  </td>
                </tr>
              <tr>
                <td style="text-align:left; padding:19px 0;padding-left:20px;">
                  <input type="checkbox" id="checkall" v-model="all" @click="checkedAll" :checked="computAll"/>全选
                </td>
                <td colspan="7" style="text-align:left;padding-left:20px;">
                  <a href="javascript:;" class="button delall border-del" style="padding:5px 15px;" @click="delAll">批量删除</a>
                  <a href="javascript:;" style="padding:5px 15px; margin:0 10px;" class="button sort" @click="sortData"> 排序</a>
                </td>
              </tr>
              <tr>
                <td colspan="8"><div class="pagelist"> <a href="">上一页</a> <span class="current">1</span><a href="">2</a><a href="">3</a><a href="">下一页</a><a href="">尾页</a> </div></td>
              </tr>
            </table>
          </div>
          <!--  修改内容-->
          <conedit></conedit>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import conedit from './conedit'
export default {
  name: "conpage",
  components: {
    conedit
  },
  mounted() {
    if(localStorage.getItem('addData')){
      this.tablist = JSON.parse(localStorage.getItem('addData'));
    }
    if(localStorage.getItem('classifyData')){
      let arr = JSON.parse(localStorage.getItem('classifyData'));
      arr.forEach((e,i)=>{
        this.options.push({
          txt:e.title,
          val:e.id
        })
      })
    }
    this.oldTablist = Object.assign(this.tablist);
    console.log(this.oldTablist);
  },
  data(){
    return{
      tablist:[],
      all:false,
      sortState:false,
      selected:[],
      options:[],
      oldTablist:[]
    }
  },
  methods:{
    //全选
    checkedAll(){
      this.tablist.forEach(e=>e.checked = this.all)
    },
    //单个删除
    del(val){
      this.tablist=this.tablist.filter(e=>e.id !=val.id)
      // localStorage.setItem('addData',JSON.stringify(this.tablist))
    },
    //批量删除
    delAll(){
      this.tablist = this.tablist.filter(e=> !e.checked)
      // localStorage.setItem('addData',JSON.stringify(this.tablist))
    },
    //排序
    sortData(){
      this.sortState = !this.sortState;
      /*
        true:从大到小
        false:从小到大
      */
      if(this.sortState){
        //排序从大到小
        this.tablist.sort((a,b)=>{
          return b.sort-a.sort
        })
      }else{
        //从小到大
        this.tablist.sort((a,b)=>{
          return a.sort-b.sort
        })
      }
    },
    //首页筛选
    attr1(ev){
      if(ev.target.value==1){
        this.tablist=this.tablist.filter(e=>e.attr === '首页');
      }else{
        this.tablist = this.oldTablist;
      }
    },
    //推荐筛选
    attr2(ev){
      if(ev.target.value==1){
        this.tablist=this.tablist.filter(e=>e.attr === '推荐');
      }else{
        this.tablist = this.oldTablist;
      }
    },
    //置顶筛选
    attr3(ev){
      if(ev.target.value==1){
        this.tablist=this.tablist.filter(e=>e.attr === '置顶');
      }else{
        this.tablist = this.oldTablist;
      }
    },
    classSel(ev){
        this.tablist=this.tablist.filter(e=>{
          console.log(e.classTitle,this.selected.txt)
           e.classTitle === this.selected.txt
        });
        this.tablist = this.oldTablist;
    }
  },
  computed:{
    //监听全选状态
    computAll:function(){
      if(this.tablist.length){
        this.all = this.tablist.every(e=>e.checked);
      }else{
        this.all = false;
      }
    }
  },
}
</script>
<style  scoped>
#checkAll a{
  color:#fff;
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
.border-bottom{
  border-bottom: 0
}
</style>
