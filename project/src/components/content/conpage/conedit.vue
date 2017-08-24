<template>
  <div id="conedit">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>修改内容</span></div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">标题：</label>
        <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess2">图片：</label>
        <input type="text" class="form-control" id="inputSuccess2" aria-describedby="helpBlock2">
        <button class="btn btn-success btn-sm no-shadow" id="btn-chat1">上传</button>
        <span>图片尺寸 500*200</span>
      </div>
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
        <label class="control-label" for="inputSuccess1">排序：</label>
        <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">提交时间：</label>
        <input type="text" class="form-control" aria-describedby="helpBlock2">
      </div>
      <button class="btn btn-success btn-sm no-shadow" id="con-submit">提交</button>
      <button class="btn btn-success btn-sm no-shadow" id="con-cancel">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "conedit",
  data: () => ({

  })
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
</style>
