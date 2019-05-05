---
name: MongoDB Client操作
layout: post
title:  "MongoDB Client操作"
info: "MongoDB Client操作"
date:   2019-05-05
categories: WORK
tags: [MongoDB]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---
## MongoDB 客户端操作

### 查看数据库和集合
命令 | 功能
:----|:----
show dbs | 输出所有数据库
show collections | 输出当前数据库所有集合
db | 输出当前所在数据库
### 创建集合
命令 | 功能
:----|:----
db.createCollection("名字") | 创建collection

### 插入
命令 | 功能
:----|:----
db.name.insert({id:2, name:'小说'}) | 插入数据
### 删除
命令 | 功能
:----|:----
db.dropDatabase(); | 删除当前使用数据库
db.name.drop(); | 清空name表数据
db.name.remove({id:2}) | 删除id=2的记录

### 修改
命令 | 功能
:----|:----
db.name.update({id:2},{$set:{name:'fffjr'}},false,true) | 更新所有id=2的记录的name=fffjr

参数说明：



序号 | 命令 | 功能
:----|:----|:----
1 | {id:2} |  匹配id=2的数据
2 | {$set:{name:'fffjr'}} | 将name字段更新为fffjr
3 | false | 如果没有匹配是否将2的数据插入集合中，默认为false不插入,true为插入
4 | true | 是否更新所有匹配，默认为false更新第一条匹配，true为更新所有匹配
### 普通查询
命令 | 对应SQL
:----|:----
db.name.find(); | select * form name;
db.name.distinct("name"); | select distinct name from name;
db.name.find({"age": 22}); | select * from name where age=22;
db.name.find({age: {$ne: 22}}); | select * from name where age!=22;
db.name.find({age: {$gt: 22}}); | select * from name where age>22;
db.name.find({age: {$lt: 22}}); | select * from name where age<22;
db.name.find({age: {$gte: 22}}); | select * from name where age>=22;
db.name.find({age: {$lte: 22}}); | select * from name where age<=22;
db.name.find({age: {$gle: 22, $lte: 27}}); | select * from name where age>=22 and age<=27;
db.name.find({}, {name:1, age:1}); | select name, age from name; false未不显示，否则为显示
db.name.find({age: {$gt:27}}, {name:1, age:1}); | select name,age from name where age>27;
db.name.find().sort({age:1}); | 按照age升序排列输出 
db.name.find().sort({age:-1}); | 按照age倒序排列输出 
db.name.find({"name": "fanjr", "age": 22}); | select * from name where name='fanjr' and age=22;
db.name.find().limit(2); | select * from name limit 2;
db.name.find().skip(10); | 跳过前十条数据
db.name.find().limit(10).skip(5) | 查询5-10条记录
db.name.find({$or: [{age:22}, {age:25}]); | select * from name where age=22 or age=25;
db.name.find().limit(10).count(); | 返回个数为所有符合条件查询结果个数
db.name.find().limit(10).count(1); | 返回limit之后的个数
db.name.find({name: /f/}) | select * from name where name like "%f%";



### aggregate聚合查询
- 以org_id分组，输出大于1的分组
```
db.album_albums.aggregate([
    {$group: {_id: "$org_id", num: {$sum: 1}}},
    {$match: {num: {$gt: 1}}}
])
``` 
#### 常用管道符
- $group：将集合中的文档分组，可用于统计结果
- $match：用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作
- $project：修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档

#### 常用聚合表达式
- $sum: 计算总和 
- $avg: 计算平均值
- $min: 获取最小值
- $max: 获取最大值
- $first: 获取第一个文档数据
- $last: 获取最后一个文档数据


### 索引
命令 | 功能
:----|:----
db.name.getIndexes() | 查询当前集合所有索引
db.name.ensureIndex({id:1}) | 创建id为索引 1为升序，-1为倒序
db.name.ensureIndex({id:1, name:1}) | 创建id和name为联合索引
db.name.dropIndex("id_1") | 删除指定索引
db.name.dropIndexes() | 删除所有索引
db.name.ensureIndex({id:-1},{unique:true}) | 创建唯一约束
### mongo客户端格式化显示查询结两种方式
- 查询语句最后增加.pretty()
- 修改MongoDB客户端的配置文件~/.mongorc.js，重新连接MongoDB客户端生效 
```
echo "DBQuery.prototype._prettyShell = true" >> ~/.mongorc.js
```

### MongoDB遍历修改字段类型
- 将org_id的值类型又int更改为string
```
db.album_albums.find({"org_id": {$type:16}}).forEach(function(doc) {
    db.album_albums.updateOne({_id: doc._id},{$set: {"org_id": String(doc.org_id)}})
})
```

### 下线音频src字段不是url的对应专辑
```
db.album_chapters.find().forEach(function(doc) {
    if(doc.src!=""){
        var reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if(!reg.test(doc.src)){
            db.album_albums.updateOne({abid: doc.abid},{$set: {"status": "off-urlless"}})
        }   
    }
})
```

	

