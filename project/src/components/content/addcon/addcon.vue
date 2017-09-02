<template>
  <div id="addcon">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>添加内容</span></div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">标题：</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2" v-model="initaddData.title">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess2">图片：</label>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList">
                <el-button size="small" type="primary" id="picload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
            <!-- Split button -->
            <div class="btn-group">
              <label class="control-label">分类标题：</label>
              <select name="cid" class="input" style="width:120px; " v-model="opt">
                <option v-for="option in selected">{{option.txt}}</option>
              </select>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label">其他属性：</label>
              <div class="field">
                首页 <input id="ishome"  class="fileedit" type="checkbox" :checked="initaddData.attr == '首页'" @change="checkChange1"/>
                推荐 <input id="isvouch" class="fileedit" type="checkbox" :checked="initaddData.attr == '推荐'" @change="checkChange2"/>
                置顶 <input id="istop" class="fileedit" type="checkbox" :checked="initaddData.attr == '置顶'" @change="checkChange3"/>
              </div>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess3">描述：</label>
              <textarea class="form-control" rows="5" id="inputSuccess3" v-model="initaddData.desc"></textarea>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess4">关键字标题：</label>
              <input type="text" class="form-control" id="inputSuccess4" aria-describedby="helpBlock2" v-model="initaddData.keyTitle">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess5">排序：</label>
              <input type="text" class="form-control" id="inputSuccess5" aria-describedby="helpBlock2" v-model="initaddData.sort">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" >提交时间：</label>
              <!-- <input type="text" class="form-control" aria-describedby="helpBlock2" v-model="initaddData.time"> -->
              <span>{{initaddData.time}}</span>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess6">点击次数：</label>
              <input type="text" class="form-control" id="inputSuccess6" aria-describedby="helpBlock2" v-model="initaddData.count">
            </div>
            <button class="btn btn-success btn-sm no-shadow" id="add-submit" @click="submit">提交</button>
            <button class="btn btn-success btn-sm no-shadow" id="add-cancel" @click="cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name: "addcon",
  mounted() {
    // localStorage.setItem('addData',JSON.stringify(this.addData))
    if(localStorage.getItem('classifyData')){
      let arr = JSON.parse(localStorage.getItem('classifyData'));
      arr.forEach((e,i)=>{
        this.selected.push({
          txt:e.title,
          val:e.id
        })
      })
      this.opt = this.selected[0].txt;
      console.log(this.opt);
    }
    this.addData = JSON.parse(localStorage.getItem('addData'));
  },
  data() {
    return {
      fileList: [],
      initaddData:{
        title:'',
        img:'',
        attr:'首页',
        classTitle:'',
        desc:'',
        keyTitle:'',
        sort:'',
        time:'',
        count:'',
        checked:false
      },
      addData:[
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
      ],
      selected:[],
      opt:''
    }
  },
  methods: {
    handleChange(file) {
      this.initaddData.img=file.url;
    },
    checkChange1(){
      this.initaddData.attr='首页'
    },
    checkChange2(){
      this.initaddData.attr='推荐'
    },
    checkChange3(){
      this.initaddData.attr='置顶'
    },
    submit(){
      let max = maxId(this.addData)
      let time = new Date();
      time = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
        this.addData.unshift({
          id:++max,
          title:this.initaddData.title,
          img:this.initaddData.img,
          attr:this.initaddData.attr,
          classTitle:this.opt,
          desc:this.initaddData.desc,
          keyTitle:this.initaddData.keyTitle,
          sort:this.initaddData.sort,
          time:time,
          count:this.initaddData.count,
          checked:this.initaddData.checked
        })
      localStorage.setItem('addData',JSON.stringify(this.addData))
      this.initaddData.title=this.initaddData.desc=this.initaddData.keyTitle=this.initaddData.sort=this.initaddData.time=this.initaddData.count='';
      this.initaddData.attr='首页'
    },
    cancel(){
      this.initaddData.title=this.initaddData.desc=this.initaddData.keyTitle=this.initaddData.sort=this.initaddData.time=this.initaddData.count='';
      this.initaddData.attr='首页'
    }
  }
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
#add-submit,#add-cancel{
  width:100px;
  margin-left:100px;
}
#add-cancel{
  margin-left:30px;
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
.btn-group .control-label{
  color:#2baab1;
}
.btn-default{
  border:1px solid #2baab1;
  background:#2baab1;
  color:#fff;
  margin-bottom: 15px;
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
</style>
