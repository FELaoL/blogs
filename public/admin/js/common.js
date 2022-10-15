function serializeToJson(form) {
	// [{name: "email", value: "用户输入的内容"}]
	const f = form.serializeArray();
	const result = {};
	f.forEach(function (item) {
		// result.email
		result[item.name] = item.value;
	});
	return result;
}
