<template>
    <li @click ="click">
      <a
      target="_blank" :href="'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+pVal+'&rsv_pq=e46af662000144de&rsv_t=05b5K0lgdbSwe3%2BQqeoROVFtJkgrU7K5RZxB91Ei751ROUdP15036F92MNU&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=1&prefixsug=s&rsp=0&inputT=4679&rsv_sug4=5258'"
      >{{pVal}}</a>
    </li>
</template>
<script>
export default {
  name: "searchlist",
  props:['pVal'],
  methods: {
    click() {
      this.$emit('changstatus')
    }
  }
}
</script>
<style  scoped>
.searchList li{
  background: transparent;
  text-indent: 10px;
}
.searchList li:hover {
  background: #778899;
  border-radius: 10px;
}
.searchList li:hover a{
  color:#fff;
}
.searchList li a{
  width:30px;
  height:30px;
  line-height: 30px;
  color:#666;
  cursor: pointer;
}
.searchList a:hover{
  cursor: pointer;
  color:#fff;
}

</style>
