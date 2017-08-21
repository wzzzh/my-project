<template>
  <div id="hometab">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 内容列表</span></div>
            <div class="tab_addCon">
              <button class="btn btn-success" id="add_but"><router-link to="/singlepage">添加内容</router-link></button>
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
                  <tr>
                    <td>1</td>
                    <td><img src="" alt="" width="120" height="50" /></td>
                    <td>首页焦点图</td>
                    <td>描述文字....</td>
                    <td>1</td>
                    <td><div class="button-group">
                    <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
                    <a class="button border-del" href="javascript:void(0)" ><span class="icon-trash-o"></span> 删除</a>
                  </div></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="" alt="" width="120" height="50" /></td>
                    <td>首页焦点图</td>
                    <td>描述文字....</td>
                    <td>1</td>
                    <td><div class="button-group">
                  <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
                  <a class="button border-del" href="javascript:void(0)" ><span class="icon-trash-o"></span> 删除</a>
                  </div></td>
                </tr>
                <tr>
                   <td>3</td>
                   <td><img src="" alt="" width="120" height="50" /></td>
                   <td>首页焦点图</td>
                   <td>描述文字....</td>
                   <td>1</td>
                   <td><div class="button-group">
                   <a class="button border-edit" href="#add">修改</a>
                   <a class="button border-del" href="javascript:void(0)" >删除</a>
                   </div></td>
                </tr>
                </tbody>
              </table>
          </div>
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>修改内容</span></div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">标题：</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">URL：</label>
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
              <label class="control-label" for="inputSuccess3">描述：</label>
              <textarea class="form-control" rows="5" id="inputSuccess3"></textarea>
            </div>
            <div class="form-group has-success clearfix">
              <label class="control-label" for="inputSuccess1">排序：</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
            </div>
            <button class="btn btn-success btn-sm no-shadow" id="tab-submit">提交</button>
            <button class="btn btn-success btn-sm no-shadow" id="tab-cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hometab",
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
