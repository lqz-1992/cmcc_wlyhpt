<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
h1 {
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  background-color: #fff !important;
  border-radius: 3px;
}
.el-tabs__content {
  background-color: #fff;
  min-height: calc(100vh - 159px);
}
.el-tabs__item {
  padding-left: 30px !important;
  padding-right: 30px !important;
}
.el-tabs__item:hover {
  color: #66b1ff !important;
}
.el-tabs__item.is-active {
  color: #66b1ff !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 0 !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: 0 !important;
}
.el-tabs--card > .el-tabs__header {
  border: 0 !important;
}
.el-menu-vertical-demo.el-menu .el-submenu .el-submenu__title {
  color: rgba(255, 255, 255, 0.7) !important;
  background-color: rgb(25, 26, 35) !important;
}
.el-menu-vertical-demo.el-menu .el-submenu .el-submenu__title:hover {
  color: #fff !important;
}
.el-menu.el-menu--inline {
  background-color: rgb(25, 26, 35) !important;
}
</style>
