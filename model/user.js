// 创建用户集合
//引入mongoose第三方模块
const mongoose = require("mongoose");
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

// User.create({
// 	username: "FELaoL",
// 	email: "FELaoL@sina.com",
// 	password: "123456",
// 	role: "admin",
// 	state: 0
// })
// 	.then(() => {
// 		console.log("用户创建成功");
// 	})
// 	.catch(() => {
// 		console.log("用户创建失败");
// 	});

// 将用户集合作为模块成员进行
module.exports = {
	User
};
