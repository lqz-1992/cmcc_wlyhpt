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
              <el-input v-model="sizeForm.name" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                v-model="sizeForm.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item
              ><el-checkbox
                label="自动登录"
                name="isRemember"
                v-model="isRemember"
              ></el-checkbox>
              <a class="password-retrieve" href="">忘记密码</a></el-form-item
            >
            <el-form-item size="large">
              <el-button style="width: 100%" type="primary" @click="onSubmit"
                >立即登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="otherLoginPath">
          <span>其它登录方式</span
          ><img
            src="https://file.iviewui.com/admin-pro-dist/img/icon-social-wechat.c69ec08c.svg"
            alt=""
          /><img
            src="https://file.iviewui.com/admin-pro-dist/img/icon-social-qq.2cf4276d.svg"
            alt=""
          /><img
            src="https://file.iviewui.com/admin-pro-dist/img/icon-social-weibo.cbf658a0.svg"
            alt=""
          />
          <a class="account-register" href="">注册账号</a>
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
      },
      isRemember: false,
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.logoBox {
  margin-top: 64px;
  text-align: center;
}
.otherLoginPath span {
  line-height: 1.5;
  color: #515a6e;
  font-size: 14px;
}
.otherLoginPath img {
  width: 24px;
  margin-left: 16px;
  cursor: pointer;
  vertical-align: middle;
  opacity: 0.7;
}
.otherLoginPath img:hover {
  opacity: 1;
}
.account-register,
.password-retrieve {
  float: right;
  font-size: 14px;
  color: rgb(45, 140, 240);
}
.account-register:hover,
.password-retrieve:hover {
  color: #57a3f3;
}
</style>