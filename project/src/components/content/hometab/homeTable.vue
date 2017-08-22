<template>
  <!-- <div id="homeTable"> -->
    <tr>
      <td>{{val.id}}</td>
      <td><img :src="val.img" alt="" width="120" height="50" /></td>
      <td>{{val.title}}</td>
      <td>{{val.desc}}</td>
      <td>{{val.sort}}</td>
      <td>
        <div class="button-group">
          <a class="button border-edit" href="#add"><span class="icon-edit"></span> 修改</a>
          <a class="button border-del" href="javascript:void(0)" ><span class="icon-trash-o"></span> 删除</a>
        </div>
      </td>
  </tr>
  <!-- </div> -->
</template>
<script>
export default {
  name: "homeTable",
  props:['pVal'],
  mounted() {
    let tabData =JSON.parse(localStorage.getItem('singleData'))
  },
  data(){
    return {
      val:{...this.pVal}
    }
  }
}
</script>
<style  scoped>

</style>
