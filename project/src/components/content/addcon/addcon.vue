<template>
  <div id="addcon">
    <!--  添加内容-->
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>添加内容</span></div>
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
      <!-- Split button -->
      <div class="btn-group">
        <label class="control-label">分类标题：</label>
        <select name="cid" class="input" style="width:120px; " >
          <option value="">分类标题</option>
          <option value="">分类1</option>
          <option value="">分类2</option>
        </select>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label">其他属性：</label>
        <div class="field">
          首页 <input id="ishome"  class="fileedit" type="checkbox" />
          推荐 <input id="isvouch" class="fileedit" type="checkbox" />
          置顶 <input id="istop" class="fileedit" type="checkbox" />
        </div>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess3">描述：</label>
        <textarea class="form-control" rows="5" id="inputSuccess3"></textarea>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess4">关键字标题：</label>
        <input type="text" class="form-control" id="inputSuccess4" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess5">排序：</label>
        <input type="text" class="form-control" id="inputSuccess5" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" >提交时间：</label>
        <input type="text" class="form-control" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess6">点击次数：</label>
        <input type="text" class="form-control" id="inputSuccess6" aria-describedby="helpBlock2">
      </div>
      <button class="btn btn-success btn-sm no-shadow" id="add-submit">提交</button>
      <button class="btn btn-success btn-sm no-shadow" id="add-cancel">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "addcon",
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
#add-submit,#add-cancel{
  width:100px;
  margin-left:100px;
}
#add-cancel{
  margin-left:30px;
}
</style>
