<template>
  <div id="setlogin">
    <body class="overflow-hidden light-background">
      <div class="wrapper no-navigation preload">
        <div class="sign-in-wrapper">
          <div class="sign-in-inner">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input type="input" v-model="ruleForm2.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div><!-- ./sign-in-inner -->
      </div><!-- ./sign-in-wrapper -->
    </div><!-- /wrapper -->
  </body>
  </div>
</template>
<script>
export default {
  name: "setlogin",
  data() {
    //用户名
    var validatename = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    //密码
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
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        name: '',
        pass: '',
        checkPass: '',
      },
      userData:[],
      rules2: {
        name: [
          {required: true,validator: validatename, trigger: 'blur' }
        ],
        pass: [
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
          this.$store.state.loginMess.push({
            userName:this.ruleForm2.name,
            passWord:this.ruleForm2.pass
          })
          // localStorage.setItem('userData',JSON.stringify(this.userData))
          this.$router.push({path:'/'});
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style  scoped>
body.light-background{
  width:100%;
  height:100%;
  position:absolute;
  z-index: 1000000;
  top:0;
}
</style>
