<template>
  <div id="classify">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 分类列表</span></div>
      <div class="tab_addCon">
        <button class="btn btn-success" id="add_but">添加内容</button>
      </div>
      <table class="table table-hover text-center">
          <thead>
            <th width="25%">ID</th>
            <th width="25%">一级分类</th>
            <th width="25%">排序</th>
            <th width="80px">操作</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>产品分类</td>
              <td>1</td>
              <td><div class="button-group">
              <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
              <a class="button border-del" href="javascript:void(0)" ><span class="icon-trash-o"></span> 删除</a>
            </div></td>
          </tr>
          <tr>
              <td>2</td>
              <td>分类2</td>
              <td>1</td>
              <td><div class="button-group">
            <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
            <a class="button border-del" href="javascript:void(0)" ><span class="icon-trash-o"></span> 删除</a>
            </div></td>
          </tr>
          <tr>
             <td>3</td>
             <td>分类3</td>
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
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>添加分类</span></div>
      <div class="btn-group classify1">
        <label class="control-label">上级分类：</label>
        <select name="cid" class="input" style="width:120px; " >
          <option value="">请选择分类</option>
          <option value="">产品分类</option>
          <option value="">产品分类</option>
        </select>
        <span class="tiptitle">不选择分类，默认为一级分类</span>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">分类标题：</label>
        <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess2">关键字标题</label>
        <input type="text" class="form-control" id="inputSuccess2" aria-describedby="helpBlock2">
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess3">关键字描述：</label>
        <textarea class="form-control" rows="5" id="inputSuccess3"></textarea>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess11">排序：</label>
        <input type="text" class="form-control" id="inputSuccess11" aria-describedby="helpBlock2">
      </div>
      <button class="btn btn-success btn-sm no-shadow" id="classify-submit">提交</button>
      <button class="btn btn-success btn-sm no-shadow" id="classify-cancel">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "classify",

}
</script>
<style scoped>
/*添加内容*/
.tiptitle{
  display:inline-block;
  vertical-align: middle;
  padding:8px;
}
#inputSuccess11,#inputSuccess1{
  width:50%;
}
.classify1{
  margin-bottom: 15px;
}
#classify-submit,#classify-cancel{
  width:100px;
  margin-left:100px;
}
#classify-cancel{
  margin-left:30px;
}
</style>
