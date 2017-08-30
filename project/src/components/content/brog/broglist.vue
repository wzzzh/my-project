<template>
  <!-- <div id="broglist"> -->
    <tr>
    <td><input type="checkbox" value="1" v-model="pVal.checked"/>
      {{pVal.id}}</td>
    <td>{{pVal.name}}</td>
    <td>{{pVal.tel}}</td>
    <td>{{pVal.email}}</td>
     <td>{{pVal.other}}</td>
    <td>{{pVal.con}}</td>
    <td>{{pVal.time}}</td>
    <td >
      <div class="button-group">
        <a class="button border-del" href="javascript:void(0)" @click="del(pVal)"> 删除</a>
      </div>
    </td>
  </tr>
  <!-- </div> -->
</template>
<script>
export default {
  name: "broglist",
  props: ['pVal'],
  methods:{
    del(val){
      this.$emit('delData',val);
    }
  }
}
</script>
<style scoped>
th{
  text-align: center
}
.border-del{
  border-radius: 5px;
}
</style>
