<template>
  <div class="container">
    <el-row>
      <el-col :span="10" style="height: 100vh"></el-col>
      <el-col :span="4">
        <div class="logoBox">
          <img
            src="https://file.iviewui.com/admin-pro-dist/img/logo.7b8cc895.png"
            alt="logo"
            srcset=""
            width="300"
          />
        </div>
        <div class="loginBox">
          <el-form ref="form" :model="sizeForm" size="large">
            <el-form-item>
              <el-input
                prefix-icon="el-icon-user"
                v-model="sizeForm.name"
                placeholder="请输入账号ID，将用于登录账号"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-lock"
                type="password"
                v-model="sizeForm.password"
                placeholder="至少6位密码，区分大小写"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-lock"
                type="password"
                v-model="sizeForm.passwordConfirm"
                placeholder="请再次輸入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-orange"
                v-model="sizeForm.nickName"
                placeholder="请输入昵称"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-message"
                v-model="sizeForm.emailAddress"
                placeholder="请输入邮箱地址"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-mobile-phone"
                v-model="sizeForm.phoneNumber"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button style="width: 100%" type="primary" @click="onRegister"
                >立即创建</el-button
              >
            </el-form-item>
            <div class="account-to-login">
              <a href="/login">使用已有账户登录</a>
            </div>
          </el-form>
        </div>
      </el-col>
      <el-col :span="10" style="height: 100vh"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        password: "",
        passwordConfirm: "",
        nickName: "",
        emailAddress: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    onRegister() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.logoBox {
  margin-top: 64px;
  text-align: center;
}
.account-to-login {
  text-align: center;
}
.account-to-login a {
  font-size: 14px;
  color: rgb(45, 140, 240);
}
.account-to-login a:hover {
  color: #57a3f3;
}
</style>