var MongoClient = require('mongodb').MongoClient;
var dburl='mongodb://localhost:27017/genealogy';
var HomeController = require('../controllers/HomeController');

exports.generate2 = function(req,res){
	//console.log('gen2() \n');
	var json ={};
	json = {'name':'grand mother','children':[
			{'name':'mom','children':[{'name':'child','size':3310}]},
			{'name':'uncle','size':3320}
		]};
	res.page={};
	res.page.title="Tree view";
	res.page.data=json;
	HomeController.RenderTree(req,res,res.page);
}

exports.generate = function(req,res){
	return MongoClient.connect(dburl,function(err,db){
		if(err){
			console.log(err);
			return err;
		}

		//console.log("ok db");
		var collection = db.collection('tree');

		collection.find().toArray(function(err,items){
			//gen json
			//console.log(items);
			var json = createJson(items);
			
			res.page={};
			res.page.title="Tree view";
			res.page.data=json;

			HomeController.RenderTree(req,res,res.page);
		});

	})	
}

function createJson(array){
	if(!array ||!array.length) return null;
	
	var tree={};
	tree.name="root";
	recursive(array,tree,1);

	return tree.children[0];
}

function recursive(array,node,left){
	node.children=[];

	array.forEach(function(item,index){
		if(item.left==left){
			var tmp = {};
			tmp.name=item.name;
			if(item.left+1==item.right){
				tmp.size=200;
			}else{
				recursive(array,tmp,left+1);
			}
			node.children.push(tmp);
			left=item.right+1;
		}
	});
	return node;
}