---
name: MySQL Client 常用操作
layout: post
title:  "MySQL Client 常用操作"
info: "MySQL Client 常用操作"
date:   2019-05-05
categories: WORK
tags: [MySQL]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---

#### 1. MySQL Client登录
```shell
mysql -h 127.0.0.01 -P 3306 -u root -p -Ddb_name --default-character-set=utf8
```

#### 2. 数据库操作
命令 | 描述
:----|:----
create database db_name; | 创建数据库
drop database db_name; | 删除数据库
show databases; | 显示所有数据库
use db_name | 连接数据库db_name

#### 3. 表操作
命令 | 描述
:----|:----
create table tb_name(<字段名><类型>,...); | 创建表
desc tb_name; | 显示表结构
show create table tb_name; | 显示建表语句，索引，存储引擎，最大自增
drop table tb_name; | 彻底删除表
truncate table tb_name; | 删除表数据，保留表结构，自增归零
delete from tb_name; | 删除表数据，保留表结构，自增不归零，慢
update cms_categories set s_type='ios' where id=18; | 数据更新
update et_album_categories e, cms_categories c set e.name=c.name,e.intro=c.introduction,e.order_id=c.order_id,e.pid=c.pid where e.id=c.id; | 不同表对应更新
insert into tb_name (...) values (...),...(...); | 数据插入
insert into et_album_categories (id, name, intro, order_id, pid, status,create_at,update_at) select id,name,introduction,order_id,pid,status,now(),now() from mifm.cms_categories where c_type='album'; | 数据导入

#### 4. 表查询
命令 | 描述
:----|:----
select title, count(title) num from cms_audios where album_id_id = 76 group by title having num>1; | 分组查询
select distinct cp_name from cms_albums; | 去重查询
select count(distinct id) from mcs_albums; | 统计查询
select title from cms_albums where id in (select id from cms_albums where id>100); | 子查询
select id from cms_audios where title in (select a.title from (select title, count(title) num from cms_audios where album_id_id = 76 group by title having num>1)a); | 查询同一个专辑中名称重复的音频

#### 5. 索引
##### 1. 创建索引
    创建普通索引,唯一索引，主键，index_name可缺省，column_list可以为多个逗号分隔
```sql
ALTER TABLE table_name ADD INDEX index_name (column_list);
ALTER TABLE table_name ADD UNIQUE (column_list);
ALTER TABLE table_name ADD PRIMARY KEY (column_list);
```
##### 2. 删除指定索引
```sql
ALTER TABLE table_name DROP INDEX index_name;
```
##### 3. 删除主键
    主键唯一不需要指定，如无主键则删除第一个唯一索引，所列组合索引如删除某列则整个索引被删除
```sql
ALTER TABLE table_name DROP PRIMARY KEY;
```

##### 4. 查看索引
```sql
show index from tblname;
```

#### 6. 表字段增删改
##### 1. 添加字段
```sql
ALTER TABLE et_album_chapters ADD column play_type varchar(50) default '';
alter table cms_categories add s_type enum('all', 'android', 'ios') default 'android'; 
alter table et_album_albums add column cp_avatar varchar(500) default '' after cp_star; 
```

##### 2. 删除字段
```sql
ALTER TABLE et_album_albums DROP order_id;
```

##### 3. 修改字段类型
```sql
ALTER TABLE et_album_chapters MODIFY play_type varchar(100);
```

##### 4. 修改默认值
```sql
ALTER TABLE et_album_chapters ALTER column play_type set default 'DB';
```

##### 5. 删除字段默认值
```sql
ALTER TABLE et_album_chapters ALTER column play_type drop default;
```

##### 6. 更改表名
```sql
ALTER TABLE et_album_albums RENAME to erting_albums;
```

#### 7. 数据导出恢复

##### 命令行执行SQL
```shell
mysql -h127.0.0.1 -P3306 -uroot -p -Dmifm_backend --default-character-set=utf8 -e "select * from cms_albums limit 1" > /tmp/album.txt
```

##### 数据库备份
    不指定--tables则备份整个库
    不指定--where则备份整合表，--where语句必须在指定表时可用
```shell
mysqldump --skip-lock-tables --default-character-set=utf8 -h 127.0.0.1 -P 3306 -u root -p --databases db1 --tables a1 --where='id=1'  > /tmp/db1.sql
```
##### 数据恢复
```sql
mysql> source /tmp/db1.sql
```

#### 8. 常用字符串函数
##### REPLACE(srt,from_str,to_str)
    返回字符串str，其字符串from_str的所有出现由字符串to_str代替
```sql
mysql> select replace('Eason', 'a', 'di');
+-----------------------------+
| replace('Eason', 'a', 'di') |
+-----------------------------+
| Edison                      |
+-----------------------------+
```
##### REPEAT(str,count)
    返回由重复countTimes次的字符串str组成的一个字符串。如果count <= 0，返回一个空字符串。如果str或count是NULL，返回NULL
```sql
mysql> select repeat('fan',3);
+-----------------+
| repeat('fan',3) |
+-----------------+
| fanfanfan       |
+-----------------+
```
##### REVERSE(str)
    返回颠倒字符顺序的字符串str
```sql
mysql> select reverse('fanjr');
+------------------+
| reverse('fanjr') |
+------------------+
| rjnaf            |
+------------------+
```
##### INSERT(str,pos,len,newstr)
    返回字符串str，在位置pos起始的子串且len个字符长得子串由字符串newstr代替,索引从1开始
```sql 
mysql> select insert('fanjunrui', 4,7,'jr');
+-------------------------------+
| insert('fanjunrui', 4,7,'jr') |
+-------------------------------+
| fanjr                         |
+-------------------------------+
```
##### TRIM([[BOTH | LEADING | TRAILING] [remstr] FROM] str)
    返回字符串str，其所有remstr前缀或后缀被删除了。如果没有修饰符BOTH、LEADING或TRAILING给出，BOTH被假定。如果remstr没被指定，空格被删除
```sql
mysql> select trim(leading '*' from '***jay**');
+-----------------------------------+
| trim(leading '*' from '***jay**') |
+-----------------------------------+
| jay**                             |
+-----------------------------------+

mysql> select trim('*' from '**jay**');
+--------------------------+
| trim('*' from '**jay**') |
+--------------------------+
| jay                      |
+--------------------------+

mysql> select trim(trailing '*' from '**jay**');
+-----------------------------------+
| trim(trailing '*' from '**jay**') |
+-----------------------------------+
| **jay                             |
+-----------------------------------+
```
##### LENGTH(str)
    返回字符串长度
```sql 
mysql> select length('mifm');
+----------------+
| length('mifm') |
+----------------+
|              4 |
+----------------+
```
##### CONCAT(str1,str2,...)
    合并字符串
```sql 
mysql> select concat('QT','_','65535');
+--------------------------+
| concat('QT','_','65535') |
+--------------------------+
| QT_65535                 |
+--------------------------+
```

#### 9. 常用数字函数

函数名 | 描述 
:----|:----
AVG(x) | 返回平均值
SUN(x) | 返回字段总和
MAX(x) | 返回最大值
MIN(x) | 返回最小值

```sql
mysql> select avg(id),sum(price_cents),max(update_at),min(update_at) from et_album_albums;
+------------+------------------+---------------------+---------------------+
| avg(id)    | sum(price_cents) | max(update_at)      | min(update_at)      |
+------------+------------------+---------------------+---------------------+
| 26032.7583 |         11491773 | 2019-03-05 09:17:42 | 2018-11-26 11:17:38 |
+------------+------------------+---------------------+---------------------+
```

#### 10. 常用时间函数
函数名 | 描述 
:----|:----
CURDATE() | 返回当前日期 
CURTIME() | 返回当前时间
NOW() | 返回日期和时间

```sql 
mysql> select curdate(), curtime(), now();
+------------+-----------+---------------------+
| curdate()  | curtime() | now()               |
+------------+-----------+---------------------+
| 2019-03-09 | 14:18:43  | 2019-03-09 14:18:43 |
+------------+-----------+---------------------+
```
