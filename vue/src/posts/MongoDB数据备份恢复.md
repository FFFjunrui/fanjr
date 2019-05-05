---
name: MongoDB数据备份恢复
layout: post
title:  "MongoDB数据备份恢复"
info: "MongoDB数据备份恢复"
date:   2019-05-05
categories: WORK
tags: [MongoDB]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---


# 文本类型导入导出
## mongoexport
    将mongodb中的特定数据导出为CSV，TSV文件
#### 重要参数列表
 参数 | 作用
:-----|:-----
-h,--host | 代表远程连接的数据库地址，默认连接本地Mongo数据库；
--port | 代表远程连接的数据库的端口，默认连接的远程端口27017；
-u,--username | 代表连接远程数据库的账号，如果设置数据库的认证，需要指定用户账号；
-p,--password | 代表连接数据库的账号对应的密码；
-d,--db | 代表连接的数据库；
-c,--collection | 代表连接数据库中的集合；
-f, --fields | 代表集合中的字段，可以根据设置选择导出的字段；
--type | 代表导出输出的文件类型，包括csv和json文件；
-o, --out | 代表导出的文件名；
-q, --query | 代表查询条件；
 --skip | 跳过指定数量的数据；
--limit | 读取指定数量的数据记录；
--sort | 对数据进行排序，可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而-1是用于降序排列,如sort({KEY:1})。

#### 命令行示例
```shell
mongoexport -h 127.0.0.1 -u root -p 12345 -d db_name  -c collection_name -f name,source --type=csv -o xiaomi.csv --query='{"url":/www.xiaomi.com/}' 
```

## mongoimport
    将格式化文件如JSON, CSV, TSV导入mongodb中
#### 重要参数列表
 参数 | 作用
:-----|:-----
--help| 标准输出帮助文档
--host    | hostname 默认为127.0.0.1
--port| port 默认为27017
--username    | 用户名需结合密码使用
--password    | 密码需结合用户名使用
--db    | 数据库名称
--collection    | 集合名称
--fields | 当CSV或TSV文件无第一列列明使用，列明使用逗号分隔
--ignoreBlanks | 忽略空行
--type   | 取值json,csv,tsv
--file   |  输入文件路径
--headerline | CSV和TSV文件不导入第一列
--mode   | 取值insert,upsert,merge默认为insert

#### 命令行示例
```shell
mongoimport -h 127.0.0.1 -d fanjr --type csv --ignoreBlanks --fields id,name,introduction,order_id,pid,status,create_by,create_at,update_at,update_by,c_type,s_type --file /tmp/category.csv 
```

# 二进制BSON备份还原

## mongodump
    将MongoDB的数据备份为.bson文件
#### 重要参数列表
 参数 | 作用
:-----|:-----
-h | host:port port默认为27017
-d | 指定数据库名称
-o | 指定输出的文件路径
-u | 用户名
-p | 密码
-c | 指定collection

#### 命令行示例
```shell
mongodump -h 127.0.0.1 -d db_name -o /tmp -u root -p 12345
```

## mongorestore
    将mongodump出的.bson文件导入到MongoDB中
#### 重要参数列表
 参数 | 作用
:-----|:-----
-h | host:port port默认为27017
-d | 指定数据库名称
-u | 用户名
-p | 密码
-c | 在单个集合导入时使用，指定集合名称，默认为文件名
--dir | 指定一个需要导入的.bson文件夹，不可同指定.bson文件路径同时使用
脚本最后路径.bson文件 | 需要导入的.bson文件，不可与--dir参数同时使用

#### 命令行示例
```shell
mongorestore -h 127.0.0.1:27017 -u root -p 12345 -d db_name /tmp/target.bson 
```

## mongodump/mongorestore与mongoexport/mongoimport的区别

- mongoexport/mongoimport导入/导出的是JSON格式，而mongodump/mongorestore导入/导出的是BSON格式。
- JSON可读性强但体积较大，BSON则是二进制文件，体积小但对人类几乎没有可读性。
- 在一些mongodb版本之间，BSON格式可能会随版本不同而有所不同，所以不同版本之间用mongodump/mongorestore可能不会成功，具体要看版本之间的兼容性。当无法使用BSON进行跨版本的数据迁移的时候，使用JSON格式即mongoexport/mongoimport是一个可选项。跨版本的mongodump/mongorestore个人并不推荐，实在要做请先检查文档看两个版本是否兼容（大部分时候是的）。
- JSON虽然具有较好的跨版本通用性，但其只保留了数据部分，不保留索引，账户等其他基础信息。使用时应该注意。
- 总之，这两套工具在实际使用中各有优势，应该根据应用场景选择使用（好像跟没说一样）。但严格地说，mongoexport/mongoimport的主要作用还是导入/导出数据时使用，并不是一个真正意义上的备份工具。所以这里也不展开介绍了。

