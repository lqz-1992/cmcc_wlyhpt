<template>
  <el-container>
    <el-aside>
      <div id="logoPosition">
        <a><img src="./images/logo.png" alt="facebook.png" /></a>
        <h2>CMCC</h2>
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
            >首页</el-menu-item
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
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px; color: #fff"
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
          <el-tab-pane label="首页" name="1-1"> <Index /> </el-tab-pane>
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
  },
};

// 监听页面刷新事件，每次刷新路由回到首页
window.onload = function () {
  let e = new Event("click");
  let a = document.getElementById("indexBtn");
  a.dispatchEvent(e);
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  color: #333;
  width: 256px !important;
  background-color: #545c64;
}
.el-aside a {
  display: inline-block;
  width: 100%;
  height: 50px;
}
li.el-menu-item.is-active {
  color: #41b883 !important;
  background-color: #35495e !important;
}
#logoPosition {
  height: 100px;
  text-align: center;
}
#logoPosition h2 {
  line-height: 50px;
}
#logoPosition > a {
  line-height: 64px;
}
#logoPosition > a img {
  width: 40px;
  vertical-align: middle;
}
#logoPosition > h2 {
  margin: 0;
  color: #fff;
}
.el-menu {
  border: 0px;
}
.el-submenu__title {
  font-weight: bold;
}
.el-header {
  background-color: #35495e;
  color: #fff;
  height: 64px !important;
  line-height: 64px;
  text-align: right;
  font-size: 12px;
}
.el-main {
  background-color: #f5f7f9;
}
</style>