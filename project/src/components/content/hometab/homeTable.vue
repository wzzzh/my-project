<template>
  <!-- <div id="homeTable"> -->
    <tr>
      <td>{{pVal.id}}</td>
      <td><img :src="pVal.img" alt="" width="120" height="50" /></td>
      <td>{{pVal.title}}</td>
      <td>{{pVal.desc}}</td>
      <td>{{pVal.sort}}</td>
      <td>
        <div class="button-group">
          <a class="button border-edit" href="javascript:void(0)" @click="edit(pVal,$event,'#edit')">修改</a>
          <a class="button border-del" @click="del(pVal,$event)">删除</a>
        </div>
      </td>
  </tr>

  <!-- </div> -->
</template>
<script>
import { MessageBox } from 'element-ui';
import $ from 'jquery';
export default {
  name: "homeTable",
  props:['pVal',],
  data(){
    return {
      val:this.pVal,
    }
  },
  methods:{
    del(pVal,ev){
      // console.log(pVal)
      this.$emit('tabChildDel',pVal.id)
    },
    edit(pVal,ev,selector){
      this.$emit('childTabEdit',pVal);
      this.$emit('childEditshow',true)
      setTimeout(()=>{
        let anchor = $(selector)[0].offsetTop;
        document.body.scrollTop = anchor;
      },10)
    }
  }
}
</script>
<style  scoped>






/*.el-message-box__title{
  height:50px;
  background: #4c5f70;
}
.el-message-box{
  width:800px;
}
.el-button+.el-button{
  margin-left:-6px;
}*/
</style>
