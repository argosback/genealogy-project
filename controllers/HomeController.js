var JsonMaker = require("../models/JsonMaker");


exports.Tree= function(req,res){
	console.log("tree() \n");
	return JsonMaker.generate(req,res);
}


exports.RenderTree = function(req,res,data){
	console.log('render() \n');
	res.render("tree/tree",data);
}