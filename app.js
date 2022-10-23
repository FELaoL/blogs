// 引用express框架
const express = require("express");
// 处理路径
const path = require("path");
// 引入body-parser模块，用来处理post请求参数
const bodyParse = require("body-parser");
// 导入express-session模块
const session = require("express-session");
// 创建网站服务器
const app = express();
// 数据库连接
require("./model/connect");
// 处理post请求参数
app.use(bodyParse.urlencoded({ extended: false }));

app.use(
	session({
		secret: "secret key"
	})
);
// require("./model/user");
// 告诉express框架模板所在的位置
app.set("views", path.join(__dirname, "views"));
// 告诉express框架模板的默认后缀是什么
app.set("view engine", "art");
// 当渲染后缀为art的模板时，所使用的模板引擎是什么
app.engine("art", require("express-art-template"));
// 开放静态资源文件
app.use(express.static(path.join(__dirname, "public")));
// 引入路由模块
const home = require("./route/home");
const admin = require("./route/admin");

// 为路由匹配请求路径
app.use("/home", home);
app.use("/admin", admin);
// 监听端口
app.listen("80");
console.log("网站服务器启动成功，请访问http://localhost/admin/login");
