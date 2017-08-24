<template>
  <div id="classify">
    <div class="main-container">
      <div class="padding-md">
        <div class="main">
          <div class="design smart-widget widget-dark-blue">
            <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-createtask"></i></i> 分类列表</span></div>
            <div class="tab_addCon">
              <button class="btn btn-success" id="add_but" ><router-link to="/addClassify">添加内容</router-link></button>
            </div>
            <table class="table table-hover text-center">
                <thead>
                  <th width="25%">ID</th>
                  <th width="25%">一级分类</th>
                  <th width="25%">排序</th>
                  <th width="80px">操作</th>
                </thead>
                <tbody>
                  <tr v-for="val in classifyTab">
                    <td>{{val.id}}</td>
                    <td>{{val.title}}</td>
                    <td>{{val.sort}}</td>
                    <td><div class="button-group">
                    <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
                    <a class="button border-del" href="javascript:void(0)" @click='del(val)'><span class="icon-trash-o"></span> 删除</a>
                  </div></td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addClassify from './addClassify'
export default {
  name: "classify",
  mounted() {
    if(localStorage.getItem('classifyData')){
      this.classifyTab = JSON.parse(localStorage.getItem('classifyData'));
    }
  },
  data(){
    return{
      classifyTab:[]
    }
  },
  methods: {
    del(val) {
      this.classifyTab=this.classifyTab.filter(e=>e.id !=val.id)
      localStorage.setItem('classifyData',JSON.stringify(this.classifyTab))
    }
  }
}
</script>
<style scoped>
/*添加内容*/
#add_but a{
  color:#fff;
}
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
