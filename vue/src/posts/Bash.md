---
name: Bash
layout: post
title:  "Bash"
info: "Bash"
date:   2019-05-05
categories: WORK
tags: [Bash,Shell]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---


### 环境变量
- 输出当前所有环境变量
```
1. env
2. printenv
3. set
```
- 输出指定环境变量
```
1. printenv HOME 输出HOME变量的值
2. echo $HOME 输出HOME的值
```
- set会输出某个进程所有的环境变量，包括全局环境变量和局部环境变量
- unset fanjr 删除名称为fanjr的环境变量
- 全局环境变量一般为系统设置为全大写，用户定义和局部变量使用小写
- 修改子shell中的全局变量并export不会影响父shell中的该变量的值
- 如果要使用变量使用$,如果要操作变量不使用$
- 子shell中删除环境变量不会影响到父shell中
- 三种shell 
```
1.登录shell
2.非登录shell的交互shell
3.运行命令脚本的非交互shell
```
- 登录shell会在如下文件中中读取命令
```
1. /etc/profile
2. ~/.bashrc
3. ~/.bash_profile
4. ~/.profile
5. ~/bash_login中读取命令
```
- 数组变量
```shell
mylist=(1 2 3 4)
echo $mylist 输出为1，只输出第一个值
echo ${mylist[2]} 输出值为3，索引从0开始
echo ${mylist[*]} 输出1 2 3 4 
unset mylist[2] 删除索引位置值，但是索引位还存在
```
- 在当前shell中执行，作用是加载环境变量，在当前shell中执行.*rc
```shell
1 . bash语法
2 source C shell语法
```
- 在子shell中执行，执行完毕后返回当前shell
```shell
1 sh
2 bash
3 ./ 文件需有可执行权限
```
- expore 用于设置环境变量，shell 中定义的变量只在当前子shell 中有效，使用expore命令对需共享的变量输出，包括当前shell及创建的子shell

### 文件权限
- Linux为系统账户预留了500以下的UID值，大多数Linux的用户UID从500开始
- useradd增加用户
- userdel删除用户
- 修改用户

命令 | 描述
:----|:----
usermode | 修改用户账户字段
passwd | 修改已有用户密码
chpasswd | 从文件中读取登录名密码，并更新密码
chage | 修改密码过期日期
chfn | 修改用户账户的备注信息
chsh | 修改用户账户的默认登录shell

- ll输出第一列含义
```
- 文件
d 目录
l 链接
c 字符设备
b 块设备
n 网络设备
```
- umask 为创建文件的默认权限掩码
- chmod 修改文件权限
- chown 修改文件所属关系

### 文件系统

#### ext文件系统
- ext文件系统是一个基本的类Unix文件系统，使用虚拟目录来操作硬件设备，在物理设备上按定长的块来存储数据
- ext文件系统采用名为索引节点的系统来存放虚拟目录中所存储的文件信息
- 索引节点系统在每个物理设备中创建一个单独的表（索引节点表）来存储这些文件信息
- 存储在虚拟目录中的每一个文件在索引节点表中都对应一个条目
- ext文件系统名称中extended部分来自去跟踪的每个文件的额外数据包括
```
1. 文件名
2. 文件大小
3. 文件的属主
4. 文件的属组
5. 文件的访问权限
6. 指向存有文件数据的每个硬盘块的指针
```
- Linux通过inode来表示文件，inode是创建文件时由文件系统分配的
#### ext2文件系统
- ext2文件系统将允许的最大文件增大到2TB，后期增加到32TB 
- 增加文件创建时间，修改时间，最后访问时间，来帮助追踪文件的访问情况
- 保存文件时，ext2文件系统通过按组分配磁盘块来减轻碎片化，通过将数据块分组，文件系统在读取文件时不需要遍历整个物理设备
- ext文件系统由于容易在系统崩溃或断电时损坏而臭名昭著

#### 日志文件系统
- 日志文件系统不使用将数据直接写入存储设备在更新索引节点表的做法，而是将文件的更改写入临时文件中（日志），在数据成功写到存储设备和索引节点后删除对应日志条目

#### ext3文件系统
- 在ext2的基础上给每个存储设备增加一个日志文件，将准备写入的数据先计入日志
- ext3文件系统不支持恢复误删文件，没有任何内建数据压缩功能，不支持加密文件

#### ext4文件系统
- ext4现为大多数流行Linux发行版采用的默认文件系统
- ext4支持数据压缩加密
- ext4文件系统支持块区，段区在存储设备上按块分配空间，索引节点表中只保存起始块位置
- ext4引入块预分配技术，可以为文件分配所有需要用到的块
#### 操作文件系统
- fdisk
#### 逻辑卷管理
- LVM 

## 安装软件程序
#### 包管理的基础
- PMS package management system 包管理系统
- 基于Debian的发行版(Ubuntu,Linux Mint)使用dpkg命令，dpkg会直接和linux系统上的PMS交互，用来安装，管理，删除软件包
- dpkg命令是基于Debian系PMS工具的核心，包含在这个PMS的工具有
```
1. apt-get
2. apt-cache
3. aptitude
```
- 基于Red Hat的发行版(Fedora,openSUSE,Mandriva)使用rpm命令，该命令是PMS的底层基础
- 基于Red Hat的系统的几种可用前端工具
```
1. yum
2. urpm
3. zypper
```
#### 源码安装步骤
- wget www.qq.com
- tar -xzvf target.tar.gz
- cd target
- yum install automake
- sh autogen.sh
- ./configure
- make
- make install

## 构建基础脚本
- shell中以#作为注释行，shell脚本第一行是例外，#!/bin/bash是高速shell使用哪个shell来运行脚本
- echo -n 执行echo后不增加换行符
- echo命令中的环境变量=会在脚本运行时替换为当前值，要显示美元符号需反斜杠转译
- 用户变量可以是任意字母，数字下划线组成的文本字符串，长度不超多20
- 使用等号赋值给用户变量时，之前不可出现空格
- shell脚本会自动决定变量值得数据类型，在脚本的整个生命周期里shell脚本定义的变量会一直保持他们的值，直到shell脚本结束会被删掉
- 引用一个变量值时需要使用美元符号，而引用变量来对其进行赋值时则不需要使用美元符号
- 两种方法可以将命令输出赋值给变量
```
1. test=`date`
2. test=$(date)
```
- 命令替换会创建一个字shell来运行对应的命令
- 由管道符串起的命令会同时执行，第一个命令产生输出的同时，输出会被立即送给第二个命令，数据传输不会用到任何中间文件或缓冲区

### 数学运算
- expr命令
```
expr 1 + 5
如需使用特殊符号如*需转义
```
- 使用方括号
```
res=$[2 * (2 + 3)]
bash shell数学运算符只支持整数运算
```
- 浮点运算bc
```
bc -q # 不显示欢迎信息
scale值默认为0，设置其值为4则保留4位有效数字
quit # 退出交互
res=$(echo "scale=4; 3.44 / 5" | bc) # 在shell中只用bc
```
- exit退出状态码范围为0~255，对256取余数

状态码 | 描述
:----|:----
0 | 命令成功结束
1 | 一般性未知错误
2 | 不适合shell的命令
126 | 命令不可执行
127 | 没找到命令
128 | 无效的退出参数
130 | 通过Ctrl+C终止的命令
255 | 正常范围之外的退出状态码

## 使用结构化命令
#### if-then
```
if pwd
then
    echo OK
else
    echo ERROR
fi
# pwd命令执行成功则输出OK，不成功则不执行then,执行else
elif #  多重判断
```

#### 数值比较

比较 | 描述
:----|:----
a -eq b | 是否a等于b
a -ge b | 是否a大于等于b
a -gt b | 是否a大于b
a -le b | 是否a小于等于b
a -lt b | 是否a小于b
a -ne b | 是否a不等于b

#### 字符串比较
计较 | 描述
:----|:----
str1 = str2 | str1是否等于str2
str1 != str2 | str1是否不等于str2
str1 > str2 | str1是否大于str2
str1 < str2 | str1是否小于str2
-n str2 | str1长度是否非0
-z str2 | str1长度是否为0

#### 文件比较
计较 | 描述
:----|:----
-d file | file是否为存在并是一个目录
-e file | file是否为存在
-f file | file是否为存在并是一个文件
-r file | file是否为存在并可读
-w file | file是否为存在并可写
-x file | file是否为存在并可执行
-s file | file是否为存在并非空
file1 -nt file2 | file1是否比file2新
file1 -ot file2 | file1是否比file2旧
- 复合条件测试
```
if [ -d $HOME ] && [ -w $HOME/test ]
then
    echo OK
else
    echo ERROR
fi
```
#### if-then的高级特性
- 使用双括号使用高级数学表达式

符号 | 描述
:----|:----
v++ | 后增
v-- | 后减
++v | 先增
--v | 先减
!   | 逻辑求反
**  | 幂运算
&&  | 逻辑和 
\|\|| 逻辑或
```
v=10
if (( $v ** 2 > 90 ))
then
    echo $v
fi
# 双括号中特殊字符不需要转义
```
- 使用双方括号对字符串比较提供高级特性
```
if [[ $USER == f* ]]
then
    echo "HELLO $USER"
else
    echo "Sorry, I do not know you"
fi
# 使用==，将右边字符串（f*）视为一个正则模式
```
#### for 命令
```
for i in I don\'t know if "this'll" work
do
    echo "word:$i"
done
# 使用\或者""来设置单词边界

list="a b c d"
list=$list" e"
# 字符串拼接
```
- bash shell中字段分隔符为：空格，制表符，换行符，shell在数据中遇到任何一个就认为是一个新数据字段的开始
```
file="./states"
IFS=$'\n'
for state in $(cat $file)
do
    echo $state
done
# 指定'\n'为分隔符，只有遇到'\n'会分隔
```
- 如需短时间修改之后需恢复，则需备份，执行完之后回滚

- C语言风格for循环
```
for (( i = 1; i < 10; i++ ))
do 
    echo $i
done
# 变量赋值可以有空格
# 条件中的变量不已美元符号开头
# 迭代中的算式未用expr命令格式
```
- while命令
```
v=10
while [ $v -gt 0 ]
do
    echo $v
    v=$[ $v - 1 ]
done
```
- until命令和while命令工作方式完全相反
- 控制循环
```
break
continue
```

## 处理用户输入
#### 命令行参数
- 位置参数变量是标准的数字：$0是程序名,$1为第一个参数，以此类推
- 将文本字符串作为参数传递时，引号并非数据的一部分，它们只是声明数据起始位置
-  $#为命令行参数的总个数
-  $*变量会将命令行参数保存为一个单词
-  $@变量会将命令行参数保存为一个数组

#### 常用Linux命令选项

选项 | 描述
:----|:----
-a | 显示所有对象
-h | 显示命令的帮助信息
-i | 忽略大小写
-r | 递归处理

#### 获取用户输入
- read
```
# 从文件中读取
count=1
cat test | while read line
do
    echo "Line $count: $line"
    count=$[ $count + 1 ]
done
```

## 呈现数据
#### 文件描述符
- 文件描述符是一个非负整数，可以唯一标识会话中打开的文件，每个进程一次最多可以有九个文件描述符

#### 非控制台下运行脚本
```
nohup ./test.sh &
# nohup命令运行另外一个命令来阻断所有发送给该进程的信号
# nohup命令会解除终端与进程的关联，会将输出消息重定向到当前目录下的nohup.out文件中
# 如同级目录运行多个nohup命令则会将所有的输出发送到同一个nohup.out文件中
```
#### 函数
```
# 第一种
function name {
    commands
}
# 第二种
name() {
    commands
}
```
#### 函数的返回值
- 默认返回值为函数内最后一个语句执行的结果，无论之前有无错误
- 使用return只能返回0~255内的状态码
- 使用函数输出
```
db() {
    read -p "Input a number:" value
    echo $[ $value * 2 ]
}
result=$(db)
echo $result 
```

## 文本处理
- sed编辑器被称为流编辑器，在编辑器处理数据之前基于预先提供的一组规则来编辑数据流
- vim为交互文本编辑器，可以用键盘命令来交互式地插入，删除替换数据中的文本