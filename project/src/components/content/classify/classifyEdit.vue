<template>
  <div id="classifyEidt">
    <div class="design smart-widget widget-dark-blue">
      <div class="smart-widget-header"><span class="text m-left-sm"><i class="icon iconfont icon-document"></i>修改分类</span></div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess1">分类标题：</label>
        <input
          type="text"
          class="form-control title"
          id="inputSuccess1"
          aria-describedby="helpBlock2"
          :value="pData.title"
        >
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess2">关键字标题</label>
        <input
          type="text"
          class="form-control keytitle"
          id="inputSuccess2"
          aria-describedby="helpBlock2"
          :value ="pData.keytitle"
        >
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess3">关键字描述：</label>
        <textarea
          class="form-control desc"
          rows="5" id="inputSuccess3"
          :value="pData.keydesc"
        ></textarea>
      </div>
      <div class="form-group has-success clearfix">
        <label class="control-label" for="inputSuccess11">排序：</label>
        <input
          type="text"
          class="form-control sorts"
          id="inputSuccess11"
          aria-describedby="helpBlock2"
          :value="pData.sort"
        >
      </div>
      <button class="btn btn-success btn-sm no-shadow" id="classify-submit" @click="submit">提交</button>
      <button class="btn btn-success btn-sm no-shadow" id="classify-cancel" @click="cancel">取消</button>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "classifyEidt",
  props:['pData'],
  data(){
    return{
      childEditdata:{}
    }
  },
  methods:{
    submit(){
      this.childEditdata={
        id:this.pData.id,
        title:$('.title').val(),
        keytitle:$('.keytitle').val(),
        keydesc:$('.desc').val(),
        sort:$('.sorts').val()
      }
      this.$emit('childEditdata',this.childEditdata);
      this.$emit('changeEditshow',false)
      this.childEditdata={};
    },
    cancel(){
      this.$emit('changeEditshow',false);
      this.childEditdata={};
    }
  }
}
</script>
<style scoped>
.control-label{
  color:#2baab1;
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
