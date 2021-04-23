<template>
  <el-container style="height: 100vh">
    <el-aside width="256px" style="background-color: #545c64">
      <div id="logoPosition" style="height: 64px; text-align: center">
        <a style="line-height: 64px"
          ><img
            src="./images/logo.png"
            alt="facebook.png"
            style="width: 40px; vertical-align: middle"
          /><span
            style="
              margin-left: 12px;
              line-height: 64px;
              color: #fff;
              vertical-align: middle;
            "
            >CMCC</span
          ></a
        >
      </div>
      <el-menu
        v-bind:default-active="activeMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        v-bind:collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1" name="1-1" @click="addTab"
            >选项1-1</el-menu-item
          >
          <el-menu-item index="1-2" name="1-2" @click="addTab"
            >选项1-2</el-menu-item
          >
          <el-menu-item index="1-3" name="1-3" @click="addTab"
            >选项1-3</el-menu-item
          >
          <el-menu-item index="1-4" name="1-4" @click="addTab"
            >选项1-4</el-menu-item
          >
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="2-1" name="2-1" @click="addTab"
            >选项2-1</el-menu-item
          >
          <el-menu-item index="2-2" name="2-2" @click="addTab"
            >选项2-2</el-menu-item
          >
          <el-menu-item index="2-3" name="2-3" @click="addTab"
            >选项2-3</el-menu-item
          >
          <el-menu-item index="2-4" name="2-4" @click="addTab"
            >选项2-4</el-menu-item
          >
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>导航三</span>
          </template>
          <el-menu-item index="3-1" name="3-1" @click="addTab"
            >选项3-1</el-menu-item
          >
          <el-menu-item index="3-2" name="3-2" @click="addTab"
            >选项3-2</el-menu-item
          >
          <el-menu-item index="3-3" name="3-3" @click="addTab"
            >选项3-3</el-menu-item
          >
          <el-menu-item index="3-4" name="3-4" @click="addTab"
            >选项3-4</el-menu-item
          >
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>导航四</span>
          </template>
          <el-menu-item index="4-1" name="4-1" @click="addTab"
            >选项4-1</el-menu-item
          >
          <el-menu-item index="4-2" name="4-2" @click="addTab"
            >选项4-2</el-menu-item
          >
          <el-menu-item index="4-3" name="4-3" @click="addTab"
            >选项4-3</el-menu-item
          >
          <el-menu-item index="4-4" name="4-4" @click="addTab"
            >选项4-4</el-menu-item
          >
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
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          closable
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      activeMenu: "1-1",
      editableTabsValue: "1-1",
      editableTabs: [
        {
          title: "选项1-1",
          name: "1-1",
          content: "默认",
        },
      ],
    };
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
    addTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      let count = 0;
      tabs.forEach((tab) => {
        if (tab.name === targetName.$el.getAttribute("name")) {
          activeName = targetName.$el.getAttribute("name");
          this.editableTabsValue = activeName;
          count++;
        }
      });
      if (count == 0) {
        this.editableTabs.push({
          title: targetName.$el.innerText,
          name: targetName.$el.getAttribute("name"),
          content: "content new",
        });
        this.editableTabsValue = targetName.$el.getAttribute("name");
      }
    },
  },
  watch: {
    editableTabsValue: function (val) {
      this.activeMenu = val;
    },
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