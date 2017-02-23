
exports.generate = function(){
	var json ={};
	json = {'name':'grand mother','children':[
			{'name':'mom','children':[{'name':'child','size':3310}]},
			{'name':'uncle','size':3320}
		]};
	return json;	
}