// 引用express框架
const express = require("express");

// 创建博客展示页面路由
const admin = express.Router();

// 渲染登录页面
admin.get("/login", require("./admin/loginPage"));

// 实现登录功能
admin.post("/login", require("./admin/login"));

// 创建用户列表路由
admin.get("/user", require("./admin/user/userPage"));

// 实现退出功能
admin.get("/logout", require("./admin/logout"));

// 创建用户编辑页面路由
admin.get("/user-edit", require("./admin/user/user-edit"));

// 创建实现用户添加功能路由
admin.post("/user-edit", require("./admin/user/user-edit-fn"));

// 用户信息修改功能路由
admin.post("/user-modify", require("./admin/user/user-modify"));

// 用户删除的功能路由
admin.get("/delete", require("./admin/user/user-delete"));

// 文章列表页面路由
admin.get("/article", require("./admin/article/article.js"));

// 文章编辑页面路由
admin.get("/article-edit", require("./admin/article/article-edit"));

// 实现文章添加功能的路由
admin.post("/addArticle", require("./admin/article/article-add"));

admin.post("/updateArticle", require("./admin/article/updateArticle"));

admin.get("/deleteArticle", require("./admin/article/deleteArticle"));
// 将路由对象作为模块成员进行导出
module.exports = admin;
