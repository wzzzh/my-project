<template>
  <div id="mainbox">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <!-- <homeindex></homeindex> -->
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 内容列表</span></div>
            <div class="tab_addCon">
              <button class="btn btn-success" id="add_but">添加内容</button>
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
                    <td><img src="./11.jpg" alt="" width="120" height="50" /></td>
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
                    <td><img src="./11.jpg" alt="" width="120" height="50" /></td>
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
                   <td><img src="./11.jpg" alt="" width="120" height="50" /></td>
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
          <!-- demo -->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import homeindex from '../home/home'
export default {
  name: "mainbox",
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
@import '../../../assets/css/style.css';
/*.border-del{
  border-radius: 5px;
}*/
/*ele组件修改密码s*/
.classify1{
  margin-bottom: 15px;
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
.border-del{
  border-radius: 5px;
}
#classify-submit,#classify-cancel{
  width:100px;
  margin-left:100px;
}
#classify-cancel{
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
/*修改密码e*/
</style>
