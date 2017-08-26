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
              <input type="text" class="form-control" aria-describedby="helpBlock2" v-model="initaddData.time">{{initaddData.time}}
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
    if(localStorage.getItem('classifyData')){
      let arr = JSON.parse(localStorage.getItem('classifyData'));
      arr.forEach((e,i)=>{
        this.selected.push({
          txt:e.title,
          val:e.id
        })
      })
      this.opt = this.selected[0].txt;
    }
    if(localStorage.getItem('addData')){
      this.addData = JSON.parse(localStorage.getItem('addData'));
    }
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
      addData:[],
      selected:[],
      // options:[],
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
        this.addData.push({
          id:++max,
          title:this.initaddData.title,
          img:this.initaddData.img,
          attr:this.initaddData.attr,
          classTitle:this.selected.txt,
          desc:this.initaddData.desc,
          keyTitle:this.initaddData.keyTitle,
          sort:this.initaddData.sort,
          time:time,
          count:this.initaddData.count,
          checked:this.initaddData.checked
        })
        console.log(this.opt);
      // localStorage.setItem('addData',JSON.stringify(this.addData))
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
