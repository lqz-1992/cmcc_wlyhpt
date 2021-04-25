<template>
  <el-container>
    <el-aside>
      <div id="logoPosition">
        <a
          ><img
            src="https://file.iviewui.com/admin-pro-dist/img/logo-dark.ab519d9f.png"
            alt="facebook.png"
          />
        </a>
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
            <span>首页</span>
          </template>
          <el-menu-item id="indexBtn" index="1-1" name="1-1" @click="goIndex"
            ><a>工作台</a></el-menu-item
          >
          <el-menu-item index="1-2" name="1-2" @click="addTab"
            ><router-link to="/sitesearch">站点搜索</router-link></el-menu-item
          >
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>预规划</span>
          </template>
          <el-menu-item index="2-1" name="2-1" @click="addTab"
            ><router-link to="/yughk">预规划库</router-link></el-menu-item
          >
          <el-menu-item index="2-2" name="2-2" @click="addTab"
            ><router-link to="/yughdraftbox">草稿箱</router-link></el-menu-item
          >
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>地市规划</span>
          </template>
          <el-menu-item index="3-1" name="3-1" @click="addTab"
            ><router-link to="/yghk">已规划库</router-link></el-menu-item
          >
          <el-menu-item index="3-2" name="3-2" @click="addTab"
            ><router-link to="/dsgh">发起地市规划</router-link></el-menu-item
          >
          <el-menu-item index="3-3" name="3-3" @click="addTab"
            ><router-link to="/tododsgh"
              >待处理工单地市规划</router-link
            ></el-menu-item
          >
          <el-menu-item index="3-4" name="3-4" @click="addTab"
            ><router-link to="/donedsgh"
              >已处理工单地市规划</router-link
            ></el-menu-item
          >
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>立项申请</span>
          </template>
          <el-menu-item index="4-1" name="4-1" @click="addTab"
            ><router-link to="/lxk">立项站点库</router-link></el-menu-item
          >
          <el-menu-item index="4-2" name="4-2" @click="addTab"
            ><router-link to="/lxsq">发起立项申请</router-link></el-menu-item
          >
          <el-menu-item index="4-3" name="4-3" @click="addTab"
            ><router-link to="/todolxsq"
              >待处理立项申请</router-link
            ></el-menu-item
          >
          <el-menu-item index="4-4" name="4-4" @click="addTab"
            ><router-link to="/donelxsq"
              >已处理立项申请</router-link
            ></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>Admin Pro</el-breadcrumb-item>
          <el-breadcrumb-item>{{breadCrump}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{breadCrumpDeepest}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px; color: rgb(96, 98, 102)"
          ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>山本五十六</span>
      </el-header>

      <el-main>
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          @tab-remove="removeTab"
          @tab-click="jumpPath"
        >
          <el-tab-pane label="工作台" name="1-1"> <Index /> </el-tab-pane>
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            closable
          >
            <keep-alive
              ><router-view v-if="$route.meta.keepAlive"></router-view
            ></keep-alive>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Index from "./index/Index.vue";
export default {
  components: {
    Index,
  },
  data() {
    return {
      isCollapse: false,
      activeMenu: "1-1",
      editableTabsValue: "1-1",
      editableTabs: [],
      pathArr: [],
      breadCrump: "首页",
      breadCrumpDeepest: "工作台",
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
      if (this.editableTabs.length == 0) {
        this.editableTabsValue = "1-1";
        if (this.$route.path != "/") {
          this.$router.push("/");
        }
      } else {
        var that = this;
        let pathArrTemp = this.pathArr;
        pathArrTemp.forEach(function (item) {
          if (
            that.editableTabsValue == item.name &&
            item.path != that.$route.path
          ) {
            that.$router.push(item.path);
          } else {
            pathArrTemp.push(item);
          }
        });
        that.pathArr = pathArrTemp;
      }
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
        });
        this.editableTabsValue = targetName.$el.getAttribute("name");
        this.pathArr.push({
          name: targetName.$el.getAttribute("name"),
          path: this.$route.path,
        });
      }
    },
    goIndex() {
      this.editableTabsValue = "1-1";
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    jumpPath(a) {
      var that = this;
      if (a.name != "1-1") {
        let pathArrTemp = this.pathArr;
        pathArrTemp.forEach(function (item) {
          if (a.name == item.name && item.path != that.$route.path) {
            that.$router.push(item.path);
          }
        });
      } else {
        if (that.$route.path != "/") {
          that.$router.push("/");
        }
      }
    },
  },
  watch: {
    editableTabsValue: function (val) {
      this.activeMenu = val;
    },
    activeMenu: function (val) {
      switch (val) {
        case "1-1":
          this.breadCrump = "首页";
          this.breadCrumpDeepest = "首页";
          break;
        case "1-2":
          this.breadCrump = "首页";
          this.breadCrumpDeepest = "站点搜索";
          break;
        case "2-1":
          this.breadCrump = "预规划";
          this.breadCrumpDeepest = "预规划库";
          break;
        case "2-2":
          this.breadCrump = "预规划";
          this.breadCrumpDeepest = "草稿箱";
          break;
        case "3-1":
          this.breadCrump = "地市规划";
          this.breadCrumpDeepest = "已规划库";
          break;
        case "3-2":
          this.breadCrump = "地市规划";
          this.breadCrumpDeepest = "发起地市规划";
          break;
        case "3-3":
          this.breadCrump = "地市规划";
          this.breadCrumpDeepest = "待处理地市规划";
          break;
        case "3-4":
          this.breadCrump = "地市规划";
          this.breadCrumpDeepest = "已处理地市规划";
          break;
        case "4-1":
          this.breadCrump = "立项申请";
          this.breadCrumpDeepest = "立项站点库";
          break;
        case "4-2":
          this.breadCrump = "立项申请";
          this.breadCrumpDeepest = "发起立项申请";
          break;
        case "4-3":
          this.breadCrump = "立项申请";
          this.breadCrumpDeepest = "待处理立项申请";
          break;
        case "4-4":
          this.breadCrump = "立项申请";
          this.breadCrumpDeepest = "已处理立项申请";
          break;
      }
    },
  },
};

// 监听页面刷新事件，每次刷新路由回到首页
window.onload = function () {
  let e = new Event("click");
  let a = document.getElementById("indexBtn");
  if (a) {
    a.dispatchEvent(e);
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
}
.el-container {
  height: 100vh;
}
.el-aside {
  color: #333;
  width: 256px !important;
  background-color: rgb(25, 26, 35);
}
.el-aside a {
  display: inline-block;
  width: 100%;
  height: 50px;
}
li.el-menu-item {
  color: rgba(255, 255, 255, 0.7) !important;
}
li.el-menu-item {
  background-color: rgb(25, 26, 35) !important;
}
li.el-menu-item :hover {
  color: #fff !important;
}
li.el-menu-item.is-active {
  color: #fff !important;
  background-color: #66b1ff !important;
}
#logoPosition {
  height: 64px;
  text-align: center;
  margin-top: 0;
}
#logoPosition > a {
  line-height: 64px;
}
#logoPosition > a img {
  width: 200px;
  vertical-align: middle;
}
#logoPosition > a span {
  display: inline-block;
  line-height: 64px;
  color: white;
  margin: 0;
  vertical-align: middle;
  margin-left: 8px;
}
.el-menu {
  border: 0px;
}
.el-header {
  background-color: #fff;
  color: rgb(96, 98, 102);
  height: 64px !important;
  line-height: 64px;
  text-align: right;
  font-size: 12px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 20;
}
.el-main {
  background-color: #f5f7f9;
  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
.el-submenu [class^="el-icon-"] {
  margin-right: 12px;
}
.el-breadcrumb {
  float: left;
  line-height: 64px;
  font-size: 14px;
}
</style>