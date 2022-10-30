const { Article } = require("./../../model/article");
// 导入分页模块
const pagination = require("mongoose-sex-page");
module.exports = async (req, res) => {
	req.app.locals.currentLink = "index";
	// 获取页码值
	const page = req.query.page;
	// 从数据库中查询数据
	let result = await pagination(Article).find().page(page).size(10).display(4).populate("author").exec();
	result = JSON.parse(JSON.stringify(result));
	// 渲染模板并传递数据
	res.render("./home/default", {
		result
	});
};
