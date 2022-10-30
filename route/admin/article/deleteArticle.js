const { Article } = require("../../../model/article");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
	const id = req.query.id;
	let newId = mongoose.Types.ObjectId(id);
	await Article.findOneAndDelete({
		_id: newId
	});
	res.redirect("/admin/article");
};
