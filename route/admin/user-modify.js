const { User } = require("../../model/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
	// 接收客户端传递过来的请求参数
	const { username, email, role, state, password } = req.body;
	//即将要修改的用户id
	const id = req.query.id;
	let newId = mongoose.Types.ObjectId(id);
	// 根据id查询用户信息
	let user = await User.findOne({ _id: newId });
	// 密码比对
	let isValid = await bcrypt.compare(password, user.password);
	if (isValid) {
		// 密码比对成功
		// 将用户信息更新到数据库中
		await User.updateOne(
			{
				_id: newId
			},
			{
				username,
				email,
				role,
				state
			}
		);
		// 将页面重定向到用户列表页面
		res.redirect("/admin/user");
	} else {
		// 密码比对失败
		let obj = {
			path: "/admin/user-edit",
			id: id,
			message: "密码比对失败，不能进行用户信息的修改"
		};
		next(JSON.stringify(obj));
	}
};
