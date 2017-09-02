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
                <li>
                  <button class="btn btn-success" id="checkAll">
                    <router-link to="/addcon">添加内容</router-link>
                  </button>
                  <button class="btn btn-success" id="allData" @click="dataAll" > 全部</button>
              </li>
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
                    <select name="cid" class="input" style="width:120px; " v-model="opt" @change="selectedTxt">
                      <option v-for="option in selected" >{{option.txt}}</option>
                    </select>
                  </li>
                <li id="spe">
                  <input
                    type="text"
                    placeholder="请输入搜索关键字"
                    class="input"
                    style="width:200px; line-height:17px;display:inline-block"
                    v-model="searchVal"
                  />
                  <a href="javascript:;" class="button searchbtn" @click="search" > 搜索</a>
                </li>
              </ul>
            </div>
            <!--  table-->
            <table class="table table-hover text-center">
              <thead>
                <tr>
                  <th width="80">ID</th>
                  <th>排序</th>
                  <th>图片</th>
                  <th width="25%">名称</th>
                  <th>属性</th>
                  <th>分类名称</th>
                   <th width="120">更新时间</th>
                  <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(val,key) in tablist">
                  <td>
                    <input type="checkbox"  v-model="val.checked"/>
                   {{val.id}}
                 </td>
                  <td><input type="text" :value="val.sort" style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" /></td>
                  <td width="10%"><img :src="val.img" alt="" width="70" height="50" /></td>
                  <td>{{val.title}}</td>
                  <td><font color="#00CC99">{{val.attr}}</font></td>
                  <td>{{val.classTitle}}</td>
                  <td>{{val.time}}</td>
                  <td>
                    <div class="button-group">
                      <a class="button border-edit" href="#conedit" @click="edit(val)"> 修改</a>
                      <a class="button border-del" href="javascript:;" @click="del(val)"> 删除</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="text-align:left; padding:19px 0;padding-left:20px;">
                    <input
                      type="checkbox"
                      id="checkall"
                      v-model="all"
                      @click="checkedAll"
                      :checked="computAll"
                    />全选
                  </td>
                  <td colspan="7" style="text-align:left;padding-left:20px;">
                    <a href="javascript:;" class="button delall border-del" style="padding:5px 15px;" @click="delAll">批量删除</a>
                    <a href="javascript:;" style="padding:5px 15px; margin:0 10px;" class="button sort" @click="sortData"> 排序</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="page">
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
          <!--  修改内容-->
          <conedit
            v-show="editshow"
            @changeShow="pchangeShow"
            :pData="editData"
            :pSel="selected"
            :pShow="editshow"
            @childEditdata="pEditdata"
          ></conedit>
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
    if(localStorage.getItem('classifyData')){
      let arr = JSON.parse(localStorage.getItem('classifyData'));
      arr.forEach((e,i)=>{
        this.selected.push({
          txt:e.title,
          val:e.id
        })
      })
      // this.opt = this.selected[0].txt;
    }
    if(localStorage.getItem('addData')){
      this.initTablist = JSON.parse(localStorage.getItem('addData'));
    }else{
      this.initTablist = [
        {
          id:1,
          title:'夏上新韩版气质时尚POLO领格子衬衫高腰显瘦九分阔腿裤套装女',
          img:'http://s3.mogucdn.com/mlcdn/c45406/170803_8aba64didf76gb2b2186hg37be4f5_640x960.jpg_468x468.jpg',
          attr:'首页',
          classTitle:'服饰',
          desc:'每一个面料 每一个细节，好品质会让第二层肌肤更出色，关注店铺更多惊喜等着您',
          keyTitle:'衣裤套装，长袖，韩系',
          sort:11,
          time:'2017-7-3',
          count:15,
          checked:false
        },
        {
          id:2,
          title:'2017新款春夏韩版简约时尚潮宽带撞色单肩女包包彩带斜挎包包',
          img:'http://s3.mogucdn.com/mlcdn/c45406/170807_1f1i3hajaajieig66546i268k0e7c_640x960.jpg_468x468.jpg',
          attr:'置顶',
          classTitle:'箱包',
          desc:'收藏店铺送三元无门槛优惠券（点击左下角小店进入店铺首页即可看到收藏按钮）满99减10元，粉丝优惠多多，先收藏后购物更划算~~',
          keyTitle:'休闲/街头，水桶形',
          sort:44,
          time:'2017-5-6',
          count:222,
          checked:false
        },
        {
          id:3,
          title:'御泥坊玫瑰滋养水乳两件套化妆品套装护肤品女正品补水保湿水润',
          img:'http://s3.mogucdn.com/p2/161203/84736276_5956b0aggced17j01792b197i45bf_640x960.jpg_468x468.jpg',
          attr:'推荐',
          classTitle:'个人护理',
          desc:'玫瑰补充肌肤水分，深度补水；抚平干燥粗糙，持久保湿；2步养成水润嫩滑肌',
          keyTitle:'补水保湿,滋润,保湿,补水',
          sort:10,
          time:'2017-2-6',
          count:34444,
          checked:false
        },
        {
          id:4,
          title:'稻香村月饼散装迷你饼600g',
          img:'http://s3.mogucdn.com/mlcdn/c45406/170830_4hdcack5845a4dcek98ckb3k24lc9_800x800.jpg_468x468.jpg',
          attr:'首页',
          classTitle:'食品零售',
          desc:'稻香村始创于清乾隆三十八年（公元1773年），是国内食品行业历史久、影响力大的知名品牌之一',
          keyTitle:'稻香村，散装',
          sort:13,
          time:'2017-9-2',
          count:2333444,
          checked:false
        },
        {
          id:5,
          title:'家旺达简易衣柜简约现代塑料组装折叠衣橱组合儿童衣柜衣服收纳柜',
          img:'http://s3.mogucdn.com/p2/160822/155173105_01ed3603gaejkb4d55abje193b4ee_649x974.jpg_468x468.jpg',
          attr:'置顶',
          classTitle:'家居',
          desc:'防尘防水防霉',
          keyTitle:'深9门3格2挂粉',
          sort:10,
          time:'2015-2-6',
          count:44466,
          checked:false
        },
      ]
    }
    //数据总长度
    this.len = this.initTablist.length;
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
      this.initTablist?this.tablist.push(this.initTablist[i]):[];
    }
    this.oldTablist = Object.assign(this.tablist);
  },
  data(){
    return{
      initTablist:[],
      tablist:[],
      all:false,
      sortState:false,
      selected:[],
      oldTablist:[],
      opt:'',
      searchVal:'',
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
  methods:{
    //全选
    checkedAll(){
      this.tablist.forEach(e=>e.checked = this.all)
    },
    //单个删除
    del(val){
      this.tablist=this.tablist.filter(e=>e.id !=val.id)
      this.initTablist=this.initTablist.filter(e=>e.id !=val.id)
      localStorage.setItem('addData',JSON.stringify(this.initTablist))
    },
    //批量删除
    delAll(){
      this.tablist = this.tablist.filter(e=> !e.checked)
      this.initTablist = this.initTablist.filter(e=> !e.checked)
      localStorage.setItem('addData',JSON.stringify(this.initTablist))
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
    selectedTxt:function(){
      this.tablist = this.oldTablist
      if(this.opt){
        this.tablist = this.tablist.filter(e=>e.classTitle == this.opt)
      }
    },
    search(){
      this.tablist=this.tablist.filter(e=>e.title === this.searchVal);
    },
    dataAll(){
      this.tablist = JSON.parse(localStorage.getItem('addData'));
    },
    edit(val){
      this.editshow = true
      this.editData = Object.assign(val);
    },
    pchangeShow(bool){
      this.editshow =bool;
    },
    pEditdata(data){
      // console.log(this.tablist);
      this.tablist.forEach((e,i)=>{
        if(e.id==data.id){
          this.tablist.splice(i,1,data)
        }
      })
      this.oldTablist.forEach((e,i)=>{
        if(e.id==this.tablist.id){
          this.oldTablist.splice(i,1,data)
        }
      })
      this.initTablist.forEach((e,i)=>{
        if(e.id==this.tablist.id){
          this.initTablist.splice(i,1,oldTablist)
        }
      })
      localStorage.setItem('addData',JSON.stringify(this.tablist))
    },
    handleSizeChange(val) {
      //  console.log(`每页 ${val} 条`);
        this.len = this.initTablist.length;
       this.pagesize = val;
       //起始页
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
     },
     handleCurrentChange(val) {
       this.len = this.initTablist.length;
       this.currentPage = val;
       this.start = (this.currentPage-1)*this.pagesize;
       //结束页
       this.end = this.start+this.pagesize;
      //  console.log(`当前页: ${val}`);
    }
  },
  watch:{
    currentPage:function(){
        this.tablist=[];
        if(this.end>this.len){
          this.end = this.len;
        }
        console.log(this.start,this.end);
        //通过
        for(let i =this.start;i<this.end;i++){
          this.initTablist?this.tablist.push(this.initTablist[i]):[];
        }

    },
    pagesize:function(){
      this.tablist=[];
      if(this.end>this.len){
        this.end = this.len;
      }
      // console.log(this.start,this.end);
      //通过
      for(let i =this.start;i<this.end;i++){
        this.initTablist?this.tablist.push(this.initTablist[i]):[];
      }
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
.searchbtn{
  padding:7px 12px;
}
#allData{
  width: 75px;
  height: 40px;
  margin-left: 0;
  font-size: 14px;
}
#spe{
  margin-right: 0
}
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
