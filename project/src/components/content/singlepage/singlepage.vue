<template>
  <div id="singlepage">
    <div id="singlepage">
      <div class="design smart-widget widget-dark-blue">
        <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>单页管理</span></div>
        <div class="form-group has-success clearfix">
          <label class="control-label" for="inputSuccess1">标题：</label>
          <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
        </div>
        <div class="form-group has-success clearfix">
          <label class="control-label" for="inputSuccess2">图片：</label>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList">
            <el-button size="small" type="primary" id="picload">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div class="form-group has-success clearfix">
          <label class="control-label" for="inputSuccess3">内容：</label>
          <textarea class="form-control" rows="15" id="inputSuccess3"></textarea>
        </div>
        <button class="btn btn-success btn-sm no-shadow" id="sigle-submit">提交</button>
        <button class="btn btn-success btn-sm no-shadow" id="sigle-cancel">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "singlepage",
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
