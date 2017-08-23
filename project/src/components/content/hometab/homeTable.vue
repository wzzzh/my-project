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
          <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
          <a class="button border-del" href="javascript:void(0)" @click="del(pVal,$event)"><span class="icon-trash-o"></span> 删除</a>
        </div>
      </td>
  </tr>
  <!-- </div> -->
</template>
<script>
export default {
  name: "homeTable",
  props:['pVal'],
  data(){
    return {
      val:this.pVal
    }
  },
  methods:{
    del(pVal,ev){
      console.log(pVal)
      this.$emit('tabChildDel',pVal.id)
    }
  }
}
</script>
<style  scoped>

</style>
