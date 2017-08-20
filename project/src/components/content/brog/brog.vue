<template>
  <div id="brog">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 留言列表</span></div>
      <div class="tab_addCon">
        <button class="btn btn-success" id="checkAll">全选</button>
        <button class="btn btn-success" id="delAll">批量删除</button>
      </div>
      <table class="table table-hover text-center">
        <thead>
          <tr>
                <th width="80">ID</th>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>其他</th>
                <th width="25%">内容</th>
                 <th width="120">留言时间</th>
                <th>操作</th>
            </tr>
        </thead>
          <tbody>
            <tr>
            <td><input type="checkbox" name="id[]" value="1" />
              1</td>
            <td>神夜</td>
            <td>13420925611</td>
            <td>564379992@qq.com</td>
             <td>深圳市民治街道</td>
            <td>这是一套后台UI，喜欢的朋友请多多支持谢谢。</td>
            <td>2016-07-01</td>
            <td>
              <div class="button-group">
                <a class="button border-del" href="javascript:void(0)" onclick="return del(1)">
                <span class="icon-trash-o"></span> 删除</a>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" name="id[]" value="1" />
              1</td>
            <td>神夜</td>
            <td>13420925611</td>
            <td>564379992@qq.com</td>
             <td>深圳市民治街道</td>
            <td>这是一套后台UI，喜欢的朋友请多多支持谢谢。</td>
            <td>2016-07-01</td>
            <td>
              <div class="button-group">
                <a class="button border-del" href="javascript:void(0)" onclick="return del(1)">
                  <span class="icon-trash-o"></span> 删除</a>
              </div>
            </td>
          </tr>
            <tr>
            <td><input type="checkbox" name="id[]" value="1" />
              1</td>
            <td>神夜</td>
            <td>13420925611</td>
            <td>564379992@qq.com</td>
             <td>深圳市民治街道</td>
            <td>这是一套后台UI，喜欢的朋友请多多支持谢谢。</td>
            <td>2016-07-01</td>
            <td>
              <div class="button-group">
                <a class="button border-del" href="javascript:void(0)" onclick="return del(1)">
                  <span class="icon-trash-o"></span> 删除</a>
              </div>
            </td>
          </tr>
        <tr>
          <td colspan="8">
            <div class="pagelist">
              <a href="">上一页</a>
              <a class="current">1</a>
              <a href="">2</a><a href="">3</a>
              <a href="">下一页</a>
              <a href="">尾页</a>
            </div>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "brog",

}
</script>
<style  scoped>
@import '../../../assets/css/style.css';
th{
  text-align: center
}
.border-del{
  border-radius: 5px;
}
</style>
