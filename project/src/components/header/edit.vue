<template>
  <!-- <div id="edit"> -->
    <body class="overflow-hidden light-background">
      <div class="wrapper no-navigation preload">
        <div class="sign-in-wrapper">
          <div class="sign-in-inner">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名:" >
              <span class="username" >{{puserData.userName}}</span>
            </el-form-item>
            <el-form-item label="当前密码" prop="oldpass">
              <el-input type="password" v-model="ruleForm2.oldpass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newpass">
              <el-input type="password" v-model="ruleForm2.newpass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">返回</el-button>
            </el-form-item>
          </el-form>
        </div><!-- ./sign-in-inner -->
      </div><!-- ./sign-in-wrapper -->
    </div><!-- /wrapper -->
  </body>
  <!-- </div> -->
</template>
<script>
export default {
  name: "edit",
  props: ['puserData'],
  data() {
    //原密码
    var validateoldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入当前密码'));
      }else{
        if(value !== this.puserData.passWord){
          callback(new Error('当前密码错误'));
        }
        callback();
      }
    };
    //新密码
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    //确认密码
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.newpass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        name: '',
        oldpass:'',
        newpass: '',
        checkPass: '',
      },
      // userData:[],
      rules2: {
        oldpass: [
          {required: true,validator: validateoldPass, trigger: 'blur' }
        ],
        newpass: [
          {required: true,validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          {required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        let data = this.$store.state.loginMess;
        console.log(data,this.puserData);



          this.$emit('changedit')
          this.$router.push({path:'/home'});
          this.ruleForm2.oldpass = this.ruleForm2.newpass = this.ruleForm2.checkPass = '';
          //修改密码

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$emit('changedit')
      this.$router.push({path:'/home'});
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style  scoped>
/*body.light-background{
  width:100%;
  height:100%;
  position:absolute;
  z-index: 1000000;
  top:0;
}*/
.username{
  margin-left:10px;
  color:#333;
  font-size:16px;
}
</style>
