<template>
  <div id="conpage">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header">
        <span class="text m-left-sm"><i class="icon iconfont icon-ziliaoshouce-xianxing"></i></i> 内容管理</span></div>
      <div class="padding border-bottom">
        <ul class="search" style="padding-left:10px;">
          <li> <button class="btn btn-success" id="checkAll">添加内容</button></li>
          <li>搜索：</li>
          <li>首页
            <select name="s_ishome" class="input">
              <option value="">选择</option>
              <option value="1">是</option>
              <option value="0">否</option>
            </select>
            &nbsp;&nbsp;
            推荐
            <select name="s_isvouch" class="input" >
              <option value="">选择</option>
              <option value="1">是</option>
              <option value="0">否</option>
            </select>
            &nbsp;&nbsp;
            置顶
            <select name="s_istop" class="input" >
              <option value="">选择</option>
              <option value="1">是</option>
              <option value="0">否</option>
            </select>
          </li>
            <li>
              <select name="cid" class="input" style="width:120px; " >
                <option value="">请选择分类</option>
                <option value="">产品分类</option>
                <option value="">产品分类</option>
                <option value="">产品分类</option>
                <option value="">产品分类</option>
              </select>
            </li>
          </if>
          <li>
            <input type="text" placeholder="请输入搜索关键字" name="keywords" class="input" style="width:200px; line-height:17px;display:inline-block" />
            <a href="javascript;" class="button searchbtn"  > 搜索</a></li>
        </ul>
      </div>
      <!--  table-->
      <table class="table table-hover text-center">
        <tr>
          <th width="6%" style="text-align:left; padding-left:20px;">ID</th>
          <th width="10%">排序</th>
          <th>图片</th>
          <th width="20%">名称</th>
          <th width="6%">属性</th>
          <th width="10%">分类名称</th>
          <th width="10%">更新时间</th>
          <th width="20%">操作</th>
        </tr>
          <tr>
            <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
             1</td>
            <td><input type="text" name="sort[1]" value="1" style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" /></td>
            <td width="10%"><img src="./11.jpg" alt="" width="70" height="50" /></td>
            <td>这是一套MUI后台精美管理系统，感谢您的支持</td>
            <td><font color="#00CC99">首页</font></td>
            <td>产品分类</td>
            <td>2016-07-01</td>
            <td><div class="button-group"> <a class="button border-edit" href="javascript:;"></span> 修改</a> <a class="button border-del" href="javascript:;" > 删除</a> </div></td>
          </tr>
         <tr>
            <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
             1</td>
            <td><input type="text" name="sort[1]" value="1" style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" /></td>
            <td width="10%"><img src="./11.jpg" alt="" width="70" height="50" /></td>
            <td>这是一套MUI后台精美管理系统，感谢您的支持</td>
            <td><font color="#00CC99">首页</font></td>
            <td>产品分类</td>
            <td>2016-07-01</td>
            <td><div class="button-group"> <a class="button border-edit" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-del" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
          </tr>
          <tr>
            <td style="text-align:left; padding-left:20px;"><input type="checkbox" name="id[]" value="" />
             1</td>
            <td><input type="text" name="sort[1]" value="1" style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" /></td>
            <td width="10%"><img src="./11.jpg" alt="" width="70" height="50" /></td>
            <td>这是一套MUI后台精美管理系统，感谢您的支持</td>
            <td><font color="#00CC99">首页</font></td>
            <td>产品分类</td>
            <td>2016-07-01</td>
            <td><div class="button-group"> <a class="button border-edit" href="add.html"><span class="icon-edit"></span> 修改</a> <a class="button border-del" href="javascript:void(0)" onclick="return del(1,1,1)"><span class="icon-trash-o"></span> 删除</a> </div></td>
          </tr>
        <tr>
          <td style="text-align:left; padding:19px 0;padding-left:20px;"><input type="checkbox" id="checkall"/>
            全选 </td>
          <td colspan="7" style="text-align:left;padding-left:20px;">
            <a href="javascript:;" class="button delall border-del" style="padding:5px 15px;">批量删除</a>
            <a href="javascript:;" style="padding:5px 15px; margin:0 10px;" class="button sort" > 排序</a>
           </td>
        </tr>
        <tr>
          <td colspan="8"><div class="pagelist"> <a href="">上一页</a> <span class="current">1</span><a href="">2</a><a href="">3</a><a href="">下一页</a><a href="">尾页</a> </div></td>
        </tr>
      </table>
    </div>
    <!--  修改内容-->
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
  name: "conpage",
}
</script>
<style  scoped>
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
</style>
