// 创建用户集合
//引入mongoose第三方模块
const mongoose = require("mongoose");
// 导入bcrypt
const bcrypt = require("bcrypt");
// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	email: {
		type: String,
		required: true,
		// 保证邮箱地址在插入数据时不重复
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	//  admin 超级管理员
	// normal 普通用户
	role: {
		type: String,
		required: true
	},
	// 0 启用状态
	// 1 禁用状态
	state: {
		type: Number,
		required: true,
		default: 0
	}
});
// 创建集合
const User = mongoose.model("User", userSchema);

async function createUser() {
	// 生成随机字符串gen=>generate 生成salt盐
	const salt = await bcrypt.genSalt(10);
	// 使用随机字符串对密码进行加密
	const pass = await bcrypt.hash("123456", salt);
	User.create({
		username: "FELaoL",
		email: "FELaoL@sina.com",
		password: pass,
		role: "admin",
		state: 0
	});
}
// createUser();
// 将用户集合作为模块成员进行
module.exports = {
	User
};
