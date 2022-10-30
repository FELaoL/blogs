const { User } = require("../../../model/user");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
	// 获取要删除的用户id
	let newId = mongoose.Types.ObjectId(req.query.id);
	// 根据id删除用户
	await User.findOneAndDelete({
		_id: newId
	});
	// 将页面重定向用户列表页面
	res.redirect("/admin/user");
};
