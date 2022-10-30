// 将文章集合的构造函数导入到当前文件中
const { Article } = require("./../../model/article");
// 导入mongoose-sex-page模块
const pagination = require("mongoose-sex-page");

module.exports = async (req, res) => {
	// 接收客户端传递过来的页码
	const page = req.query.page;
	// 标识 标识当前访问的是文章管理页面
	req.app.locals.currentLink = "article";
	// page指定当前页
	// size指定每页显示的数据条数
	// display指定客户端要显示的页面数量
	// exec向数据库中发送查询请求
	// 查询所有文章数据
	let articles = await pagination(Article).find().page(page).size(10).display(4).populate("author").exec();
	// 渲染文章列表页面模板
	res.render("admin/article", {
		articles
	});
};
