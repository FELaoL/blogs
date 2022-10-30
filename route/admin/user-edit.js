const { User } = require("../../model/user");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
	// 标识 标识当前访问的是用户管理页面
	req.app.locals.currentLink = "user";
	// 获取到地址栏中的id
	const { message, id } = req.query;
	if (id) {
		// 修改操作
		let newId = mongoose.Types.ObjectId(id);
		let user = await User.findOne({ _id: newId });
		// 渲染用户编辑模板
		res.render("./admin/user-edit", {
			message: message,
			user: user,
			link: "/admin/user-modify?id=" + id,
			button: "修改"
		});
	} else {
		// 添加操作
		res.render("./admin/user-edit", {
			message: message,
			link: "/admin/user-edit",
			button: "添加"
		});
	}
};
