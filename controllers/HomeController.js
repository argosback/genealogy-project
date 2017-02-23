var JsonMaker = require("../models/JsonMaker");


exports.Tree= function(req,res){
	res.pageInfo={};
	res.pageInfo.title= 'Tree View';
	var json=JsonMaker.generate();
	res.pageInfo.data=json;
	res.render('tree/tree',res.pageInfo);
}