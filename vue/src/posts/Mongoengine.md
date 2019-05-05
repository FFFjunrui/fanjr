---
name: Mongoengine
layout: post
title:  "Mongoengine"
info: "Mongoengine"
date:   2019-05-05
categories: WORK
tags: [MongoDB, MongoEngine]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---

## mongoengine基本使用
#### Document定义
```
from mongoengine import Document
class User(Document):
    """User表"""
    catid = IntField(required=True, primary_key=True)      # 专辑分类id
    name = StringField(max_length=100,unique=True)         # 分类名称
    intro = StringField(default='',unique_with='name')     # 分类介绍
    is_free = BooleanField(default=True)                   # 是否免费
    meta = {
        'collection': 'album_categories',
        'indexes': [
            'catid',
            'pid',
            'name'
        ],
    }
```
- 继承类说明

字段 | 说明
:----|:----
Document | 只允许写入定义好的字段
DynamicDocument | 可以写入为定义字段和灵活查询

- 字段类型

字段 | 说明
:----|:----
IntField | 整型，32-bit integer field.
LongField | 64-bit integer field.
StringField | 字符串类型，The maximum BSON document size is 16 megabytes.
BooleanField | 布尔值类型

- 字段参数说明
 
字段 | 说明
:----|:----
required | True则该列必传参数
primary_key | 主键
max_length | 最大长度
unique | 该列唯一约束
unique_with | 同等号后的列联合唯一约束
default | 默认值

- meta参数说明
 
字段 | 说明
:----|:----
collection | 集合名称
indexes | 索引列

#### 数据库连接
- 需要鉴权登录
```
from mongoengine import connect
connect(
    host='mongodb://admin:qwerty@localhost/production'
)

will establish connection to production database using admin username and qwerty password.
```
- 无需要鉴权登录
```
connect(
    host='mongodb://127.0.0.1:27017/production'
)
```

#### 增
```
from mongo import User

User(
    catid=1,
    name='Fanjr',
    intro='Cool',
    id_free=True
).save()
```
-注：MongoEngine中id和pk为primary_key的别称，不可使用


#### 删
```
num = User.objects(catid=1).delete()
# 返回删除个数
```

#### 改

- 更改符合条件结果集所有数据
```
User.objects.update(catid=1)
```
- 更改符合条件结果集第一条数据
```
User.objects.update_one(catid=1)
```

#### 查
- Demo查询
```
from mongo import User

user = User.objects(catid__gte=1)
# 返回catid大于等于1的用户集
```

- 查询满足条件单条记录，无返回None
```
from mongo import User
user = User.objects(name='1')
```

- 查询某一列的和
```
_sum = User.objects.sum('catid')
```
- 查询某一列的平均数
```
_sum = User.objects.average('catid')
```
- 查询一列数据
```
>>> class Film(Document):
...     title = StringField()
...     year = IntField()
...     rating = IntField(default=3)
...
>>> Film(title='The Shawshank Redemption', year=1994, rating=5).save()
>>> f = Film.objects.only('title').first()
>>> f.title
'The Shawshank Redemption'
>>> f.year   # None
>>> f.rating # default value
3
```
- 高级查询
```
from mongoengine.queryset.visitor import Q

# Get published posts
Post.objects(Q(published=True) | Q(publish_date__lte=datetime.now()))

# Get top posts
Post.objects((Q(featured=True) & Q(hits__gte=1000)) | Q(hits__gte=5000))

```

- 可用算子

算子 | 说明
:----|:----
ne | not equal to
lt | less than
lte | less than or equal to
gt | greater than
gte | greater than or equal to
not | negate a standard check, may be used before other operators (e.g. Q(age__not__mod=5))
in | value is in list (a list of values should be provided)
nin | value is not in list (a list of values should be provided)
mod | value % x == y, where x and y are two provided values
all | every item in list of values provided is in array
size | the size of the array is
exists | value for field exists

- 字符串算子

算子 | 说明
:----|:----
exact | string field exactly matches value
iexact | string field exactly matches value (case insensitive)
contains | string field contains value
icontains | string field contains value (case insensitive)
startswith | string field starts with value
istartswith | string field starts with value (case insensitive)
endswith | string field ends with value
iendswith | string field ends with value (case insensitive)
match | performs an $elemMatch so you can match an entire document within an array


- 自定义查询方法一
```
class BlogPost(Document):
    title = StringField()
    published = BooleanField()

    @queryset_manager
    def live_posts(doc_cls, queryset):
        return queryset.filter(published=True)

BlogPost(title='test1', published=False).save()
BlogPost(title='test2', published=True).save()
assert len(BlogPost.objects) == 2
assert len(BlogPost.live_posts()) == 1
```
- 自定义查询方法二
```
class AwesomerQuerySet(QuerySet):

    def get_awesome(self):
        return self.filter(awesome=True)

class Page(Document):
    meta = {'queryset_class': AwesomerQuerySet}

# To call:
Page.objects.get_awesome()
```


#### 查询集常用方法

方法 | 注释
:----|:----
all() | Returns a copy of the current QuerySet.
average(field) | Average over the values of the specified field.
count(with_limit_and_skip=False) | Count the selected elements in the query.
delete() | Delete the documents matched by the query.
distinct(field) | Return a list of distinct values for a given field.
exclude(*fields) | Opposite to .only(), exclude some document’s fields.
only(*fields) | Load only a subset of this document’s fields.
first() | Retrieve the first object matching the query.
get() | 多个匹配触发MultipleObjectsReturned，无匹配DoesNotExist
limit(n) | Limit the number of returned documents to n. or (e.g. User.objects[:5]).
order_by(*keys) | Order the QuerySet by the keys.  keys by +a(asc) or -a(desc)  
skip(n) | Skip n documents before returning the results. or (e.g. User.objects[5:]).
sum(field) | Sum over the values of the specified field.
to_json() | Converts a queryset to JSON
update() | Perform an atomic update on the fields matched by the query.
update_one | Perform an atomic update on the fields of the first document matched by the query.
upsert_one | Overwrite or add the first document matched by the query.

- 注：field为字段名称

 
