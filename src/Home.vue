<template>
  <el-container style="height: 100vh">
    <el-aside width="256px" style="background-color: #545c64">
      <div id="logoPosition" style="height: 64px;text-align: center">
        <a style="line-height: 64px"><img src="./images/logo.png" alt="facebook.png" style="width: 40px;vertical-align: middle"><span style="margin-left: 12px;line-height: 64px;color: #fff;vertical-align: middle">CMCC</span></a>
      </div>
      <el-menu
        default-active="2-1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        v-bind:collapse=isCollapse
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项1-1</el-menu-item>
          <el-menu-item index="1-2">选项1-2</el-menu-item>
          <el-menu-item index="1-3">选项1-3</el-menu-item>
          <el-menu-item index="1-4">选项1-4</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="2-1">选项2-1</el-menu-item>
          <el-menu-item index="2-2">选项2-2</el-menu-item>
          <el-menu-item index="2-3">选项2-3</el-menu-item>
          <el-menu-item index="2-4">选项2-4</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>导航三</span>
          </template>
          <el-menu-item index="3-1">选项3-1</el-menu-item>
          <el-menu-item index="3-2">选项3-2</el-menu-item>
          <el-menu-item index="3-3">选项3-3</el-menu-item>
          <el-menu-item index="3-4">选项3-4</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>导航四</span>
          </template>
          <el-menu-item index="4-1">选项4-1</el-menu-item>
          <el-menu-item index="4-2">选项4-2</el-menu-item>
          <el-menu-item index="4-3">选项4-3</el-menu-item>
          <el-menu-item index="4-4">选项4-4</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
      isCollapse: false
    };
  },
  methods: {
    
  },
};
</script>

<style>
body {
  margin: 0;
}

.el-menu {
  border: 0px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 64px !important;
  line-height: 64px;
}

.el-aside {
  color: #333;
}
</style>