import Mock from 'mockjs'
var arr = Mock.mock({
	"array|5-20":[
		{
          "id|+1":1,
	        "name": '@cname', //模拟名称
          "tel|15.9":1,
          "email":'@email',
          "other":'@ctitle()',
          "con": "@cparagraph",  //模拟文本
	        "time": "@date('yyyy-MM-dd')", //模拟时间
					"checked":false
   		}
	]
});

Mock.mock('http://brog.cn', arr);
