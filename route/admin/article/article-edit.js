const { Article } = require("../../../model/article");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
	// 标识 标识当前访问的是文章管理页面
	req.app.locals.currentLink = "article";
	const { id } = req.query;
	if (id) {
		let newId = mongoose.Types.ObjectId(id);
		let queryArticle = await Article.findOne({ _id: newId });
		res.render("./admin/article-edit", {
			article: queryArticle,
			link: "/admin/updateArticle?id=" + id,
			button: "修改"
		});
	} else {
		res.render("./admin/article-edit", {
			link: "/admin/addArticle",
			button: "添加"
		});
	}
};
