const formidable = require("formidable");
const path = require("path");
const { Article } = require("../../../model/article");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
	const form = formidable({ keepExtensions: true });
	form.uploadDir = path.join(__dirname, "../", "../", "../", "public", "uploads");
	form.parse(req, async (err, fields, files) => {
		const { id } = req.query;
		let newId = mongoose.Types.ObjectId(id);
		if (files && files.cover && files.cover.filepath) {
			await Article.updateOne(
				{
					_id: newId
				},
				{
					title: fields.title,
					author: fields.author,
					publishDate: fields.publishDate,
					cover: files.cover.filepath.split("public")[1],
					content: fields.content
				}
			);
		} else {
			await Article.updateOne(
				{
					_id: newId
				},
				{
					title: fields.title,
					author: fields.author,
					publishDate: fields.publishDate,
					content: fields.content
				}
			);
		}
		res.redirect("/admin/article");
	});
};
