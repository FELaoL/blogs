// 引用express框架
const express = require("express");
// 创建网站服务器
const app = express();
// 引入路由模块
const home = require("./route/home");
const admin = require("./route/admin");

// 为路由匹配请求路径
app.use("/home", home);
app.use("/admin", admin);
// 监听端口
app.listen("80");
console.log("网站服务器启动成功，请访问localhost");
