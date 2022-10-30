// 导入文章集合构造函数
const { Article } = require("./../../model/article");
// 导入评论集合构造函数
const { Comment } = require("./../../model/comment");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
	req.app.locals.currentLink = "homeArticle";
	//  接收客户端传递过来的文章id值
	const id = req.query.id;
	let newId = mongoose.Types.ObjectId(id);
	// 根据id查询文章详细信息
	let article = await Article.findOne({
		_id: newId
	}).populate("author");
	article = JSON.parse(JSON.stringify(article));
	// 查询当前文章对应的评论信息
	let comments = await Comment.find({
		aid: newId
	}).populate("uid");
	comments = JSON.parse(JSON.stringify(comments));
	res.render("./home/article", {
		article,
		comments
	});
};
