<template>
  <div id="conedit">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>修改内容</span></div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">标题：</label>
        <input
          type="text"
          class="form-control title"
          id="inputSuccess1"
          aria-describedby="helpBlock2"
          :value="pData.title"
        >
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess2">图片：</label>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          >
          <el-button size="small" type="primary" id="picload">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div class="btn-group">
        <label class="control-label">分类标题：</label>
        <select name="cid" class="input sel" style="width:120px; " :value="pData.classTitle">
          <option v-for="option in pSel">{{option.txt}}</option>
        </select>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label">其他属性：</label>
        <div class="field">
          首页 <input id="ishome"  class="fileedit" type="checkbox" :checked="pData.attr == '首页'" @change="checkChange1"/>
          推荐 <input id="isvouch" class="fileedit" type="checkbox" :checked="pData.attr == '推荐'" @change="checkChange2"/>
          置顶 <input id="istop" class="fileedit" type="checkbox" :checked="pData.attr == '置顶'" @change="checkChange3"/>
        </div>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess3">描述：</label>
        <textarea
          class="form-control desc"
          rows="5" id="inputSuccess3"
          :value="pData.desc"
        ></textarea>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">关键字标题</label>
        <input
          type="text"
          class="form-control keyTitle"
          id="inputSuccess1"
          aria-describedby="helpBlock2"
          :value="pData.keyTitle"
        >
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">排序：</label>
        <input
          type="text"
          class="form-control sorts"
          id="inputSuccess1"
          aria-describedby="helpBlock2"
          :value="pData.sort"
        >
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">提交时间：</label>
        <input
          type="text"
          class="form-control time"
          aria-describedby="helpBlock2"
          :value="pData.time"
        >
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">点击次数</label>
        <input
          type="text"
          class="form-control count"
          aria-describedby="helpBlock2"
          :value="pData.count"
        >
      </div>
      <button class="btn btn-success btn-sm no-shadow" id="con-submit" @click="submit">提交</button>
      <button class="btn btn-success btn-sm no-shadow" id="con-cancel" @click="cancel">取消</button>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "conedit",
  props:['pData','pSel','pShow'],
  mounted() {
    //do something after mounting vue instance
    this.editAttr = this.pData.attr;
  },
  data(){
    return{
      editAttr:'首页',
      childEditdata:{
        title:'',
        img:'',
        classTitle:'',
        attr:'',
        desc:'',
        keyTitle:'',
        sort:'',
        time:'',
        count:''
      }
    }
  },
  methods: {
    handleChange(file) {
      this.childEditdata.img=file.url;
    },
    checkChange1(){
      this.editAttr='首页'
    },
    checkChange2(){
      this.editAttr='推荐'
    },
    checkChange3(){
      this.editAttr='置顶'
    },
    submit(){
      this.childEditdata={
        id:this.pData.id,
        title:$('.title').val(),
        img:this.childEditdata.img,
        classTitle:$('.sel').val(),
        attr:this.editAttr,
        desc:$('.desc').val(),
        keyTitle:$('.keyTitle').val(),
        sort:$('.sorts').val(),
        time:$('.time').val(),
        count:$('.count').val(),
        checked:false
      }
      this.$emit('changeShow',false)
      this.$emit('childEditdata',this.childEditdata)
    },
    cancel(){
      this.$emit('changeShow',false)
      this.childEditdata={}
    }
  }
}
</script>
<style >
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
