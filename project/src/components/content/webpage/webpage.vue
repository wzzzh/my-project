<template>
  <div id="webpage">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-manage"></i>网站信息</span></div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">网站标题：</label>
        <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess2">网站LOGO：</label>
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
        <label class="control-label" for="inputSuccess3">网站域名：</label>
        <input class="form-control" rows="3" id="inputSuccess3">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess4">网站关键字：</label>
        <textarea class="form-control" rows="3" id="inputSuccess4" aria-describedby="helpBlock2"></textarea>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess5">网站描述：</label>
        <textarea class="form-control" rows="3" id="inputSuccess5" aria-describedby="helpBlock2"></textarea>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess6">联系人：</label>
        <input type="text" class="form-control" id="inputSuccess6" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess7">手机：</label>
        <input type="text" class="form-control" id="inputSuccess7" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess8">电话：</label>
        <input type="text" class="form-control" id="inputSuccess8" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess9">传真：</label>
        <input type="text" class="form-control" id="inputSuccess9" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess10">QQ：</label>
        <input type="text" class="form-control" id="inputSuccess10" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess11">Email：</label>
        <input type="text" class="form-control" id="inputSuccess11" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess12">地址：</label>
        <input type="text" class="form-control" id="inputSuccess12" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess13">底部信息：</label>
        <textarea class="form-control" rows="3" id="inputSuccess13"></textarea>
      </div>
      <button class="btn btn-success btn-sm no-shadow" id="web-submit">提交</button>
      <button class="btn btn-success btn-sm no-shadow" id="web-cancel">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "webpage",
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
#web-submit,#web-cancel{
  width:100px;
  margin-left:100px;
}
#web-cancel{
  margin-left:30px;
}
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
